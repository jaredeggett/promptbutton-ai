// Cloudflare Pages Function: Brevo subscriber proxy for promptbutton.ai
// Receives POST {email, consent, website, utm_source, source, section} from the
// public form, calls Brevo's REST API server-side with BREVO_API_KEY. The browser
// never sees the API key.
//
// Required env vars (set via Cloudflare Pages dashboard or wrangler):
//   - BREVO_API_KEY   (Secret)  Brevo account API key
//   - BREVO_LIST_ID   (Var)     Brevo list ID to assign subscribers to
//
// Protections:
//   - Honeypot field `website` (bots fill it, humans don't see it). Silent success.
//   - `consent` boolean required (user affirmatively ticked the box).
//   - Per-IP rate limit via KV (PB_RATE_LIMIT): 5 submissions per 10 minutes per IP.
//     Binding is optional; absence skips rate limiting.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SECONDS = 10 * 60;

export async function onRequestPost({ request, env }) {
  if (!env.BREVO_API_KEY || !env.BREVO_LIST_ID) {
    return json({ error: 'server_misconfigured' }, 500);
  }

  const listId = parseInt(env.BREVO_LIST_ID, 10);
  if (!Number.isFinite(listId) || listId <= 0) {
    return json({ error: 'server_misconfigured' }, 500);
  }

  const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for') || 'unknown';
  if (env.PB_RATE_LIMIT) {
    const key = `rl:${ip}`;
    try {
      const rawCount = await env.PB_RATE_LIMIT.get(key);
      const count = rawCount ? parseInt(rawCount, 10) : 0;
      if (count >= RATE_LIMIT_MAX) {
        return json({ error: 'rate_limited', retry_after_seconds: RATE_LIMIT_WINDOW_SECONDS }, 429);
      }
      await env.PB_RATE_LIMIT.put(key, String(count + 1), { expirationTtl: RATE_LIMIT_WINDOW_SECONDS });
    } catch (_) {
      // KV errors should not block subscribe.
    }
  }

  let body;
  const ct = request.headers.get('content-type') || '';
  try {
    if (ct.includes('application/json')) {
      body = await request.json();
    } else {
      const form = await request.formData();
      body = Object.fromEntries(form.entries());
    }
  } catch (e) {
    return json({ error: 'invalid_body' }, 400);
  }

  const email = ((body.email || body.EMAIL || '') + '').trim();
  const honeypot = ((body.website || '') + '').trim();
  const consent = body.consent === true || body.consent === 'true' || body.consent === 'on' || body.consent === '1';
  const utmSource = ((body.utm_source || '') + '').trim().slice(0, 64);
  const formSource = ((body.source || '') + '').trim().slice(0, 64);
  const formSection = ((body.section || '') + '').trim().slice(0, 64);

  if (honeypot) {
    return json({ ok: true, status: 'subscribed' });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'invalid_email' }, 400);
  }

  if (!consent) {
    return json({ error: 'consent_required' }, 400);
  }

  let referer = utmSource;
  if (!referer) {
    const ref = request.headers.get('referer') || '';
    if (ref) {
      try {
        const host = new URL(ref).hostname.toLowerCase();
        if (host.includes('reddit')) referer = 'reddit';
        else if (host.includes('news.ycombinator') || host.includes('ycombinator')) referer = 'hn';
        else if (host.includes('twitter') || host === 'x.com' || host.endsWith('.x.com')) referer = 'x';
        else if (host.includes('linkedin')) referer = 'linkedin';
        else if (host.includes('mastodon') || host.includes('bsky')) referer = 'mastodon_bsky';
        else if (host.includes('producthunt')) referer = 'producthunt';
        else if (host.includes('hackster')) referer = 'hackster';
        else if (host.includes('dev.to')) referer = 'devto';
        else if (host && host !== 'promptbutton.ai' && host !== 'www.promptbutton.ai' && host !== 'dev.promptbutton.ai') referer = host;
      } catch (_) {}
    }
  }

  const attributes = {
    SOURCE: 'promptbutton.ai',
    UTM_SOURCE: referer || 'direct',
    SIGNUP_AT: new Date().toISOString(),
    CONSENT: true,
    CONSENT_AT: new Date().toISOString(),
  };
  if (formSource) attributes.FORM_SOURCE = formSource;
  if (formSection) attributes.FORM_SECTION = formSection;

  const brevoResp = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': env.BREVO_API_KEY,
      'accept': 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: true,
      attributes,
    }),
  });

  const isSubscribed = brevoResp.ok || brevoResp.status === 204;
  let isDuplicate = false;
  let errText = '';
  if (!isSubscribed) {
    errText = await brevoResp.text();
    isDuplicate = errText.includes('duplicate_parameter');
  }

  if (isSubscribed || isDuplicate) {
    return json({ ok: true, status: isDuplicate ? 'already_subscribed' : 'subscribed' });
  }

  return json({ error: 'brevo_error', status: brevoResp.status, detail: errText }, 500);
}

export async function onRequest() {
  return new Response('Method Not Allowed', { status: 405 });
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

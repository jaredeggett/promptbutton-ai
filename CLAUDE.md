# Cowork Rules for This Repo

## Branch Rules
- ALWAYS work on the `dev` branch.
- NEVER commit or push to `main` under any circumstance. Main is promoted manually by Jared only.
- Before starting any work, run `git pull origin dev` to get the latest changes.
- After finishing changes, run `git push origin dev`.

## Commit Rules
- Use descriptive commit messages tied to what actually changed. Examples:
  - "Update hero headline on home page"
  - "Fix pricing table overflow on mobile"
  - "Add FAQ section to product page"
- Do NOT use generic messages like "update", "changes", or "WIP".
- Never use em dashes in commit messages or in any site content. Jared considers em dashes a telltale sign of AI-generated text.

## Content Rules
- Match the existing voice and style of the site. Read a few pages first before writing new copy.
- Never invent product specs, pricing, customer counts, or claims. If a number or fact is needed and not already on the site, ask Jared.

## Deployment Notes
- Pushing to `dev` triggers Cloudflare Pages to deploy to dev.promptbutton.ai within ~2 minutes.
- After pushing, report back: the commit hash, a one-line summary of what changed, and the dev URL where the change can be reviewed.

## Git Author
- On this Mac, commits should be authored as `phil-mac <phil-mac@cowork.local>`.
- On the Pi (OpenClaw), commits should be authored as `phil-pi <phil-pi@cowork.local>`.
- For Jared's direct hand-edits, commit as `jared` with his real email.
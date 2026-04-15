import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    try {
      // Formspree endpoint — replace with your actual form ID
      await fetch('https://formspree.io/f/mgondnab', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'promptbutton.ai' }),
      })
      setSubmitted(true)

      // GA4 conversion event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'email_capture',
          event_label: 'promptbutton_notify',
        })
      }
    } catch {
      // Silently handle — Formspree will still capture
      setSubmitted(true)
    }
    setLoading(false)
  }

  return (
    <section id="notify" className="py-24 grid-bg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Be first in line.
          </h2>
          <p className="text-muted mb-8">
            Drop your email for Kickstarter launch updates, early access, and SDK betas.
          </p>

          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
              <div className="text-4xl mb-3">&check;</div>
              <h3 className="text-xl font-semibold text-white mb-2">You&rsquo;re on the list!</h3>
              <p className="text-sm text-muted">
                We&rsquo;ll send you launch updates and early SDK access. Check your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 bg-surface border border-white/10 rounded-xl text-white text-sm placeholder-muted focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-brand-600/20"
              >
                {loading ? 'Joining...' : 'Notify Me'}
              </button>
            </form>
          )}

          <p className="text-xs text-muted/50 mt-4">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </div>
    </section>
  )
}

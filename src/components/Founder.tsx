export default function Founder() {
  return (
    <section id="founder" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in text-center mb-8">
          <p className="text-sm font-medium text-brand-400 uppercase tracking-wider mb-2">
            From the Founder
          </p>
          <h2 className="text-3xl font-bold text-white">
            Built by someone who ships hardware.
          </h2>
        </div>

        <div className="fade-in bg-surface border border-white/5 rounded-2xl p-8 text-center">
          {/* Avatar */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-500 to-brand-900 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">JE</span>
          </div>

          <h3 className="text-xl font-semibold text-white">Jared Eggett</h3>
          <p className="text-sm text-brand-400 mb-6">Founder, Ad Hoc Electronics</p>

          <blockquote className="text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            &ldquo;I&rsquo;ve always dreamed of being an inventor. That dream led me to
            spend 20+ years in hardware manufacturing, building kinetic energy-harvesting
            switches and earning multiple utility patents along the way. Prompt Button is
            the product I&rsquo;ve wanted to build my entire career &mdash; taking proven
            self-powered technology and putting it directly in the hands of makers and
            developers. No batteries to replace. No cloud to depend on. Just a physical
            trigger that speaks BLE and lets your code do the rest.&rdquo;
          </blockquote>

          {/* Stats */}
          <div className="flex justify-center gap-8 pt-6 border-t border-white/5">
            {[
              { value: '20+ Years', label: 'In Hardware' },
              { value: 'Multiple', label: 'Utility Patents' },
              { value: 'Global', label: 'Distribution' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg font-bold text-white">{s.value}</div>
                <div className="text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

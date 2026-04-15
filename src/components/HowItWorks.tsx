export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: '\uD83D\uDC46',
      title: 'Press',
      desc: 'You press the button. That mechanical force is all it needs.',
    },
    {
      num: '02',
      icon: '\u26A1',
      title: 'Harvest',
      desc: 'A spring-loaded electromagnetic generator converts your press into electrical energy.',
    },
    {
      num: '03',
      icon: '\uD83D\uDCE1',
      title: 'Broadcast',
      desc: 'The harvested energy powers a BLE 5.0 radio that broadcasts an advertisement packet.',
    },
    {
      num: '04',
      icon: '\uD83D\uDCBB',
      title: 'Receive',
      desc: 'Any BLE device within ~30m picks up the packet. Your code handles the rest.',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Kinetic energy in. BLE packets out.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Built on proven kinetic switch technology with 20+ years and millions of
            units deployed in commercial buildings worldwide. The same mechanism that
            powers wireless light switches now triggers your AI.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="fade-in relative">
              {/* Connector line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-brand-600/40 to-transparent z-0" />
              )}

              <div className="relative bg-surface border border-white/5 rounded-2xl p-6 hover:border-brand-600/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-brand-500 bg-brand-900/20 px-2 py-1 rounded">
                    {step.num}
                  </span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="mt-12 flex items-center justify-center gap-3 flex-wrap text-sm fade-in">
          {['Press', 'Kinetic', 'Electric', 'BLE 5.0 Broadcast', 'Your Code'].map(
            (label, i, arr) => (
              <span key={label} className="flex items-center gap-3">
                <span className="px-3 py-1.5 bg-surface border border-white/10 rounded-lg text-muted font-medium">
                  {label}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-brand-500">&rarr;</span>
                )}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}

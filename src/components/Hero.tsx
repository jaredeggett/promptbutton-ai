export default function Hero() {
  const codeLines = [
    { text: 'from promptbutton import PromptButton', color: 'text-blue-400' },
    { text: 'from openclaw import OpenClawClient', color: 'text-blue-400' },
    { text: '', color: '' },
    { text: 'button = PromptButton()', color: 'text-white' },
    { text: 'claw   = OpenClawClient()', color: 'text-white' },
    { text: '', color: '' },
    { text: '@button.on_press', color: 'text-yellow-400' },
    { text: 'def handle(event):', color: 'text-green-400' },
    { text: '    claw.send_prompt("Start morning briefing")', color: 'text-brand-300' },
    { text: '', color: '' },
    { text: 'button.listen()', color: 'text-white' },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-16 grid-bg overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-900/20 border border-brand-700/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-brand-300">Live on Kickstarter</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Press a button.</span>
              <br />
              <span className="gradient-text">Run your AI.</span>
            </h1>

            <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
              A self-powered BLE 5.0 button that triggers AI prompts, automations, and
              scripts with a physical press. No batteries, no hub, no cloud. Just open
              BLE packets your code catches in real time.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: '20+ yr', label: 'Battery-free life' },
                { value: '~30m', label: 'BLE range' },
                { value: '$19.99', label: 'Early bird' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-muted mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-brand-600/20 hover:shadow-brand-600/30"
              >
                Back on Kickstarter &rarr;
              </a>
              <a
                href="#integrations"
                className="px-6 py-3 border border-white/10 hover:border-white/20 text-white font-medium rounded-xl transition-all hover:bg-white/5"
              >
                View Code &darr;
              </a>
            </div>
          </div>

          {/* Right — Code block */}
          <div className="relative">
            <div className="code-block rounded-2xl border border-white/10 p-6 glow-orange">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-muted">app.py</span>
              </div>

              {/* Code lines */}
              <div className="space-y-1">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-8 text-right text-xs text-white/20 mr-4 select-none">
                      {i + 1}
                    </span>
                    <span className={`${line.color} text-sm`}>
                      {line.text || '\u00A0'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
                <span className="text-xs text-green-400">$</span>
                <span className="text-xs text-muted">pip install promptbutton</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

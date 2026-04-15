export default function UseCases() {
  const cases = [
    {
      icon: '\uD83E\uDD16',
      title: 'Robotic Control',
      desc: 'Press to send a natural language prompt to OpenClaw/NemoClaw. Your Jetson plans and executes the action.',
      code: 'claw.send_prompt("Pick up the red block")',
    },
    {
      icon: '\uD83C\uDFE0',
      title: 'Home Automation',
      desc: 'Trigger Home Assistant scenes, toggle lights, lock doors. No batteries to replace, ever.',
      code: 'hass.call_service("scene.turn_on", "movie_night")',
    },
    {
      icon: '\uD83D\uDCCA',
      title: 'Data Logging',
      desc: 'Track events in manufacturing, labs, or classrooms. Each press logs a timestamped record.',
      code: 'db.insert({ event: "quality_check", ts: now() })',
    },
    {
      icon: '\uD83D\uDDE3\uFE0F',
      title: 'AI Voice Assistant',
      desc: 'Press to activate a voice pipeline. Ask questions, get briefings, control your day.',
      code: 'assistant.start_listening(wake_word=False)',
    },
    {
      icon: '\uD83D\uDEA8',
      title: 'Alert Systems',
      desc: 'Panic buttons, nurse calls, or assembly line stops. No network, no cloud \u2014 pure local BLE.',
      code: 'alert.send(priority="urgent", zone=event.id)',
    },
    {
      icon: '\uD83D\uDD27',
      title: 'Custom Workflows',
      desc: 'MQTT bridges, Node-RED flows, webhook triggers. If you can code it, the button can start it.',
      code: 'mqtt.publish("factory/line3/start", payload)',
    },
  ]

  return (
    <section id="use-cases" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            One button. Infinite workflows.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Prompt Button is a physical trigger for any digital action. Here are some of
            the ways makers are planning to use it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="fade-in bg-surface border border-white/5 rounded-2xl p-6 hover:border-brand-600/30 transition-colors group"
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{c.desc}</p>
              <div className="bg-dark/50 rounded-lg px-3 py-2 font-mono text-xs text-brand-300 border border-white/5 group-hover:border-brand-600/20 transition-colors">
                {c.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

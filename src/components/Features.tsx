export default function Features() {
  const features = [
    {
      icon: '\uD83E\uDDBE',
      title: 'Powered by You',
      desc: 'Human energy harvesting. You press it, it runs. No batteries — just your sheer human determination.',
    },
    {
      icon: '\uD83D\uDD10',
      title: 'Open Protocol',
      desc: 'Published BLE spec. MIT-licensed SDKs. No vendor lock-in, ever.',
    },
    {
      icon: '\uD83D\uDD0C',
      title: 'No Hub Required',
      desc: 'Direct BLE 5.0 to any receiver. Jetson, Pi, ESP32, laptop, phone.',
    },
    {
      icon: '\uD83D\uDCBB',
      title: 'pip install promptbutton',
      desc: 'Trigger your AI workflow in 60 seconds. Python, C++, YAML, Node-RED.',
    },
  ]

  return (
    <section className="py-16 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="fade-in text-center">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

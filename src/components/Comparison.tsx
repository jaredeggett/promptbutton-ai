export default function Comparison() {
  const features = [
    { label: 'Price', flic: '$35 + $99 hub', streamdeck: '$150+', keyboard: '$5 – $15', pb: 'From $19.99' },
    { label: 'Power Source', flic: 'CR2032 coin cell', streamdeck: 'USB wired', keyboard: 'CR2032 / AAA', pb: 'Human energy harvesting' },
    { label: 'Battery Life', flic: '~18 months', streamdeck: 'N/A (wired)', keyboard: '3 – 12 months', pb: '20+ years (no battery)' },
    { label: 'Portable', flic: 'Yes (needs hub nearby)', streamdeck: 'No (desk only)', keyboard: 'Yes', pb: 'Yes — stick anywhere' },
    { label: 'Hub Required', flic: 'Yes ($99)', streamdeck: 'No (USB only)', keyboard: 'No', pb: 'No' },
    { label: 'Protocol', flic: 'Proprietary', streamdeck: 'USB HID', keyboard: 'BLE HID (closed)', pb: 'Published open BLE spec' },
    { label: 'SDKs', flic: 'Vendor app only', streamdeck: 'Stream Deck SDK', keyboard: 'None', pb: 'Python, C++, YAML, Node-RED' },
    { label: 'OpenClaw / Jetson', flic: 'No', streamdeck: 'No', keyboard: 'No', pb: 'Built-in SDK support' },
    { label: 'Cloud Dependency', flic: 'Yes (IFTTT)', streamdeck: 'No', keyboard: 'No', pb: 'No — fully local' },
    { label: 'Edge AI Ready', flic: 'No', streamdeck: 'Macro only', keyboard: 'No', pb: 'Jetson / OpenClaw native' },
  ]

  return (
    <section className="py-24 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How does Prompt Button stack up?
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We compared every trigger option on the market. Only one is human-powered,
            open-protocol, and built for edge AI.
          </p>
        </div>

        <div className="fade-in overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Feature</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Flic 2</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Stream Deck</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">BLE Keyboard</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-brand-400">Prompt Button</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.label} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                  <td className="py-3 px-4 text-sm font-medium text-white">{f.label}</td>
                  <td className="py-3 px-4 text-sm text-muted">{f.flic}</td>
                  <td className="py-3 px-4 text-sm text-muted">{f.streamdeck}</td>
                  <td className="py-3 px-4 text-sm text-muted">{f.keyboard}</td>
                  <td className="py-3 px-4 text-sm text-brand-300 font-medium comparison-highlight rounded">{f.pb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

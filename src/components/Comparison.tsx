export default function Comparison() {
  const features = [
    { label: 'Price', branded: '$35 + $99 hub', itag: '$2 \u2013 $5', esp32: '$5 + battery', pb: 'From $14.99' },
    { label: 'Power Source', branded: 'CR2032 coin cell', itag: 'CR2032 coin cell', esp32: 'USB / LiPo', pb: 'Kinetic harvesting' },
    { label: 'Battery Life', branded: '~18 months', itag: '3 \u2013 6 months', esp32: 'Days to weeks', pb: '20+ years' },
    { label: 'Hub Required', branded: 'Yes ($99)', itag: 'No', esp32: 'No', pb: 'No' },
    { label: 'Protocol', branded: 'Proprietary', itag: 'Undocumented', esp32: 'Custom', pb: 'Published open spec' },
    { label: 'SDKs', branded: 'Vendor app only', itag: 'None', esp32: 'Write your own', pb: 'Python, C++, YAML, Node-RED' },
    { label: 'Cloud Dependency', branded: 'Yes', itag: 'Varies', esp32: 'No', pb: 'No' },
    { label: 'Edge AI Ready', branded: 'No', itag: 'No', esp32: 'Manual setup', pb: 'Jetson / OpenClaw SDK' },
  ]

  return (
    <section className="py-24 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How does Prompt Button stack up?
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We compared every option on the market. Here's the data.
          </p>
        </div>

        <div className="fade-in overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Feature</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Branded Button</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">Generic iTag</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted">ESP32 DIY</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-brand-400">Prompt Button</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.label} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                  <td className="py-3 px-4 text-sm font-medium text-white">{f.label}</td>
                  <td className="py-3 px-4 text-sm text-muted">{f.branded}</td>
                  <td className="py-3 px-4 text-sm text-muted">{f.itag}</td>
                  <td className="py-3 px-4 text-sm text-muted">{f.esp32}</td>
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

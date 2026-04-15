export default function StretchGoals() {
  const goals = [
    { amount: '$3,000', status: 'funded', title: 'Base Campaign', desc: 'Prompt Button hardware, open-source SDKs, published BLE spec. We ship.' },
    { amount: '$6,000', status: 'next', title: 'Double-Press Detection', desc: 'Firmware update adds double-press event type. Two distinct triggers from one button.' },
    { amount: '$10,000', status: 'locked', title: 'Multi-Button Dashboard', desc: 'Web-based dashboard for Pi and Jetson. Monitor all your buttons, view event logs, set up triggers visually.' },
    { amount: '$15,000', status: 'locked', title: 'ESP32 BLE-to-MQTT Bridge', desc: 'Flash an ESP32 and bridge Prompt Button events to any MQTT broker. Connect to Node-RED, AWS IoT, or your own stack.' },
    { amount: '$25,000', status: 'locked', title: 'IP65 Outdoor-Rated Button', desc: 'Weather-sealed enclosure rated for outdoor deployment. Same kinetic mechanism, built for the elements.' },
    { amount: '$40,000', status: 'locked', title: 'Multi-Press & Long-Press', desc: 'Triple-press, long-press, and custom press patterns. Maximum flexibility from a single button.' },
  ]

  return (
    <section id="stretch-goals" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Where we go from here.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Every stretch goal unlocks free firmware updates and new capabilities
            for all backers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {goals.map((g) => (
            <div
              key={g.amount}
              className={`fade-in flex gap-4 p-5 rounded-xl border transition-colors ${
                g.status === 'funded'
                  ? 'bg-green-500/5 border-green-500/20'
                  : g.status === 'next'
                  ? 'bg-brand-900/10 border-brand-500/20'
                  : 'bg-surface border-white/5'
              }`}
            >
              {/* Amount pill */}
              <div className="flex-shrink-0">
                <div
                  className={`px-3 py-1.5 rounded-lg text-sm font-bold ${
                    g.status === 'funded'
                      ? 'bg-green-500/10 text-green-400'
                      : g.status === 'next'
                      ? 'bg-brand-600/20 text-brand-400'
                      : 'bg-white/5 text-muted'
                  }`}
                >
                  {g.amount}
                </div>
                {g.status === 'funded' && (
                  <div className="text-center text-xs text-green-400 mt-1 font-medium">Funded</div>
                )}
              </div>

              <div>
                <h3 className="font-semibold text-white">{g.title}</h3>
                <p className="text-sm text-muted mt-1 leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

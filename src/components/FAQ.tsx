import { useState } from 'react'

const faqs = [
  {
    q: 'How does it work without a battery?',
    a: 'Each press compresses a spring-loaded electromagnetic generator inside the button. That mechanical energy is converted into enough electrical energy to power a BLE 5.0 radio and broadcast a single advertisement packet. This is the same proven kinetic energy-harvesting technology that has powered millions of commercial wireless light switches worldwide for over 20 years. The mechanism is rated for 500,000+ presses.',
  },
  {
    q: 'What devices can receive the signal?',
    a: 'Anything with BLE 5.0 (or backward-compatible BLE 4.x) support. That includes NVIDIA Jetson boards, Raspberry Pi (3/4/5 with built-in BLE, or any Pi with a USB BLE adapter), ESP32 microcontrollers, laptops, phones, tablets, and Home Assistant setups using ESPHome BLE proxies. If it can scan for BLE advertisements, it works.',
  },
  {
    q: 'Do I need to pair it like other BLE devices?',
    a: 'No. Prompt Button uses BLE advertisement broadcasts, not connected-mode pairing. Your receiver simply listens for advertisements matching the Prompt Button service UUID. No pairing, no connection handshake, no state to manage. This is also why multiple receivers can pick up the same button press simultaneously.',
  },
  {
    q: 'Is the protocol documented?',
    a: 'Fully. The BLE advertisement format, service UUIDs, characteristic UUIDs, and payload structure are published on GitHub under MIT license. You do not need our SDK to use Prompt Button. If you prefer to write your own BLE scanner, the spec tells you exactly what to look for.',
  },
  {
    q: 'What about security? Can someone spoof a press?',
    a: 'Each Prompt Button has a unique device ID and an incrementing sequence counter in its advertisement payload. Your code can validate device IDs and detect replayed packets via the counter. For high-security applications, we recommend running your receiver in a controlled RF environment or adding application-layer authentication. The protocol spec documents the security model in full.',
  },
  {
    q: 'How does this work with OpenClaw / NemoClaw?',
    a: 'Prompt Button is the first physical trigger built for NVIDIA\u2019s OpenClaw robotic manipulation framework. Press the button and your Jetson sends a natural language prompt to the NemoClaw model, which plans and executes the robotic action. The Python SDK handles BLE scanning, event parsing, and OpenClaw integration. Three lines of code from button press to robot movement.',
  },
  {
    q: 'When does it ship?',
    a: 'We are targeting Q3 2026 for initial shipments. The kinetic switch mechanism is proven manufacturing with over 20 years of production history. The BLE radio design is finalized. We are currently in tooling and certification. Backers will receive regular production updates throughout the campaign.',
  },
  {
    q: 'Can I use multiple buttons?',
    a: 'Yes. Each button broadcasts a unique device ID. Your code can listen for multiple buttons simultaneously and route different actions to each one. The SDKs support filtering by device ID, so you can assign distinct behaviors to each button. There is no practical limit to the number of buttons a single receiver can monitor.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 grid-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Common questions.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="fade-in border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm font-medium text-white pr-4">{f.q}</span>
                <span
                  className={`text-muted flex-shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-sm text-muted leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

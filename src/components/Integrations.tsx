import { useState } from 'react'

const tabs = [
  {
    label: 'Jetson / OpenClaw',
    code: `$ pip install promptbutton

from promptbutton import PromptButton
from openclaw import OpenClawClient

button = PromptButton()
claw   = OpenClawClient()

@button.on_press
def handle(event):
    # Physical button press triggers edge AI prompt
    claw.send_prompt("Pick up the red block and place it in bin A")
    print(f"Triggered from button {event.device_id}")

button.listen()`,
    lang: 'Python',
  },
  {
    label: 'Raspberry Pi',
    code: `$ pip install promptbutton

from promptbutton import PromptButton

button = PromptButton()

@button.on_press
def handle(event):
    print(f"Button {event.device_id} pressed!")
    print(f"Press type: {event.press_type}")
    print(f"Signal: {event.rssi} dBm")
    # Route to your AI, API, database, or script
    requests.post("http://localhost:8080/trigger", json={
        "button": event.device_id,
        "action": "morning_briefing"
    })

button.listen()`,
    lang: 'Python',
  },
  {
    label: 'ESP32 / Arduino',
    code: `#include <promptbutton.h>

PromptButton button;

void onPress(PromptButtonEvent event) {
    Serial.printf("Button %s pressed!\\n", event.device_id);
    // Trigger your action
    mqtt.publish("home/button/pressed", event.device_id);
}

void setup() {
    Serial.begin(115200);
    button.onPress(onPress);
    button.begin();
}

void loop() {
    button.scan();
}`,
    lang: 'C++',
  },
  {
    label: 'Home Assistant',
    code: `# configuration.yaml
promptbutton:
  buttons:
    - id: "PB:AA:BB:CC:DD:01"
      name: "Kitchen Button"
      actions:
        single_press:
          service: scene.turn_on
          entity_id: scene.cooking_mode
        double_press:
          service: script.turn_on
          entity_id: script.kitchen_timer

# ESPHome BLE proxy config
esphome:
  name: ble-proxy
  platform: ESP32

ble_client:
  - mac_address: "PB:AA:BB:CC:DD:01"`,
    lang: 'YAML',
  },
  {
    label: 'Raw BLE Spec',
    code: `# Prompt Button BLE Advertisement Format
# Published under MIT License

Service UUID: 0xPB01
Manufacturer ID: 0x0A0D (Ad Hoc Electronics)

Payload Structure (12 bytes):
  [0-5]   Device ID     (6 bytes, unique per button)
  [6]     Press Type    (0x01=single, 0x02=double, 0x03=long)
  [7-8]   Sequence      (uint16, incrementing counter)
  [9]     TX Power      (int8, dBm)
  [10-11] Reserved      (future use)

# Scan with any BLE library:
# Python: bleak, bluepy
# C: bluez
# JS: noble, web-bluetooth`,
    lang: 'Spec',
  },
]

export default function Integrations() {
  const [active, setActive] = useState(0)

  return (
    <section id="integrations" className="py-24 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Works with everything you already use.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Open-source SDKs for every major platform. MIT licensed. Published on GitHub.
          </p>
        </div>

        <div className="fade-in">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  i === active
                    ? 'bg-brand-600 text-white'
                    : 'bg-surface border border-white/10 text-muted hover:text-white hover:border-white/20'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Code block */}
          <div className="code-block rounded-2xl border border-white/10 p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-muted font-mono">{tabs[active].lang}</span>
            </div>

            <pre className="overflow-x-auto text-sm leading-relaxed">
              <code className="text-green-300">{tabs[active].code}</code>
            </pre>
          </div>

          {/* GitHub link */}
          <div className="text-center mt-8">
            <a
              href="https://github.com/AdhocElectronics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View SDKs on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Gallery() {
  const images = [
    {
      title: 'Robotic Arm Control',
      desc: 'Press to trigger NVIDIA Jetson + OpenClaw robotic manipulation',
      src: '/gallery/usecase-robotic.jpg',
    },
    {
      title: 'Smart Home Trigger',
      desc: 'Battery-free button for Home Assistant scenes and automations',
      src: '/gallery/usecase-smarthome.jpg',
    },
    {
      title: 'Industrial Data Logging',
      desc: 'One press logs a timestamped event on the factory floor',
      src: '/gallery/usecase-industrial.jpg',
    },
    {
      title: 'Voice AI Assistant',
      desc: 'Physical trigger to start a voice pipeline — no wake word needed',
      src: '/gallery/usecase-voice.jpg',
    },
    {
      title: 'Emergency Alert',
      desc: 'Panic buttons and nurse calls with zero network dependency',
      src: '/gallery/usecase-alert.jpg',
    },
    {
      title: 'The Button',
      desc: 'Human energy harvesting — powered by your press, no batteries, ever',
      src: '/gallery/usecase-button.jpg',
    },
  ]

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See it in action.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            From robotics labs to factory floors — Prompt Button integrates
            anywhere you need a physical trigger for digital actions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div
              key={img.title}
              className="fade-in group relative overflow-hidden rounded-2xl border border-white/5 hover:border-brand-600/30 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-semibold text-white">{img.title}</h3>
                <p className="text-xs text-muted mt-0.5">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

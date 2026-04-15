export default function Pricing() {
  const tiers = [
    {
      name: 'Super Early Bird',
      price: '$19.99',
      qty: '1 button',
      retail: '$29.99',
      limit: 'Limited to 25 backers',
      perUnit: null,
      items: [
        'Human-powered Prompt Button',
        'Peel-and-stick mount',
        'Open-source SDK access',
        'Published BLE spec',
      ],
      popular: false,
    },
    {
      name: 'Dev Kit',
      price: '$24.99',
      qty: '1 button',
      retail: '$29.99',
      limit: null,
      perUnit: null,
      items: [
        'Human-powered Prompt Button',
        'Peel-and-stick mount',
        'Open-source SDK access',
        'Published BLE spec',
      ],
      popular: false,
    },
    {
      name: 'Maker Pack',
      price: '$64.99',
      qty: '3 buttons',
      retail: '$89.97',
      limit: null,
      perUnit: '$21.66 each',
      items: [
        '3x Human-powered Prompt Buttons',
        '3x Peel-and-stick mounts',
        'Open-source SDK access',
        'Published BLE spec',
      ],
      popular: true,
    },
    {
      name: 'Lab Pack',
      price: '$199.99',
      qty: '10 buttons',
      retail: '$299.90',
      limit: null,
      perUnit: '$20.00 each',
      items: [
        '10x Human-powered Prompt Buttons',
        '10x Peel-and-stick mounts',
        'Open-source SDK access',
        'Priority support channel',
      ],
      popular: false,
    },
    {
      name: 'Fleet Pack',
      price: '$449.99',
      qty: '25 buttons',
      retail: '$749.75',
      limit: null,
      perUnit: '$18.00 each',
      items: [
        '25x Human-powered Prompt Buttons',
        '25x Peel-and-stick mounts',
        'Open-source SDK access',
        'Priority support channel',
      ],
      popular: false,
    },
    {
      name: 'OEM Pack',
      price: '$799.99',
      qty: '50 buttons',
      retail: '$1,499.50',
      limit: null,
      perUnit: '$16.00 each',
      items: [
        '50x Human-powered Prompt Buttons',
        '50x Peel-and-stick mounts',
        'OEM branding discussion',
        'Direct engineering support',
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Kickstarter Pricing
          </h2>
          <p className="text-lg text-muted mb-2">
            Back the project. Get your buttons.
          </p>
          <p className="text-sm text-muted">
            Campaign goal: $3,000. Every tier ships with open-source SDKs and the
            full BLE protocol spec.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`fade-in pricing-card relative bg-surface rounded-2xl p-6 border ${
                t.popular
                  ? 'border-brand-500/40 ring-1 ring-brand-500/20'
                  : 'border-white/5'
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-brand-600 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">{t.name}</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-bold text-white">{t.price}</span>
                  <span className="text-sm text-muted">{t.qty}</span>
                </div>
                {t.retail && (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted line-through">{t.retail} retail</span>
                    <span className="text-xs text-green-400 font-medium">Save {Math.round((1 - parseFloat(t.price.replace('$','').replace(',','')) / parseFloat(t.retail.replace('$','').replace(',',''))) * 100)}%</span>
                  </div>
                )}
                {t.perUnit && (
                  <span className="text-xs text-brand-400">{t.perUnit}</span>
                )}
                {t.limit && (
                  <div className="mt-2 text-xs text-yellow-400/80 font-medium">
                    {t.limit}
                  </div>
                )}
              </div>

              <ul className="space-y-2 mb-6">
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-brand-500 mt-0.5 flex-shrink-0">&check;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#notify"
                className={`block text-center py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  t.popular
                    ? 'bg-brand-600 hover:bg-brand-700 text-white'
                    : 'border border-white/10 hover:border-white/20 text-white hover:bg-white/5'
                }`}
              >
                Back This Tier
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

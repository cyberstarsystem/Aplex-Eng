const plans = [
  {
    icon: 'bi-star',
    title: 'Standard',
    price: 9,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    features: ['Vestibulum ante ipsum primis', 'Fusce vulputate eleifend', 'Nullam ac tortor vitae'],
    featured: false,
  },
  {
    icon: 'bi-stars',
    title: 'Professional',
    price: 29,
    desc: 'Maecenas tempus tellus eget condimentum rhoncus semper.',
    features: ['Donec quam felis ultricies', 'Aenean massa imperdiet', 'Cras dapibus vivamus'],
    featured: true,
    badge: 'Recommended',
  },
  {
    icon: 'bi-star-fill',
    title: 'Ultimate',
    price: 49,
    desc: 'Etiam rhoncus maecenas tempus tellus eget condimentum.',
    features: ['Phasellus viverra nulla', 'Quisque rutrum aenean', 'Etiam ultricies nisi vel'],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title">
        <h2>Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {plans.map((plan, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className={`pricing-item ${plan.featured ? 'featured' : ''}`}>
                {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
                <div className="pricing-icon">
                  <i className={`bi ${plan.icon}`}></i>
                </div>
                <h3>{plan.title}</h3>
                <div className="price">
                  <span className="currency">$</span>
                  {plan.price}
                  <span className="period">/month</span>
                </div>
                <p className="description">{plan.desc}</p>
                <ul className="features-list">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <i className="bi bi-check2"></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className="btn-pricing">Buy Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const servicesList = [
  {
    featured: true,
    icon: 'bi-code-slash',
    title: 'AMC Services',
    desc: 'Why is maintenance — proven to be a key factor in extending equipment life, reducing downtime and lowering overall costs — so often overlooked in many operations until it becomes an emergency? There are several possible reasons.',
    // badge: 'Most Popular',
    // price: 'Starting at $2,999',
    cta: 'Get Started',
    col: 'col-lg-4 col-md-6',
  },
  {
    featured: false,
    icon: 'bi-palette',
    title: 'System Customization',
    desc: 'There is an upward trend towards customized solutions if we compare it to commercial solutions and we have made a brief analysis about the benefits of ad-hoc solutions with regard to those already developed.',
    // price: 'Starting at $1,899',
    cta: 'Learn More',
    col: 'col-lg-4 col-md-6',
  },
  {
    compact: true,
    icon: 'bi-graph-up-arrow',
    title: 'Spares Supply',
    desc: 'All plants and equipment use components that wear out at some point. By using original wear parts for your plant, you can plan maintenance and necessary replacements with confidence, knowing that you have significantly reduced the risk of unscheduled downtime due to unexpected failures.',
    cta: 'Explore',
    col: 'col-lg-4 col-md-6',
  },
  {
    compact: true,
    icon: 'bi-shield-check',
    title: 'Operation Contracts',
    desc: 'We provide services to run your previously owned and run systems i.e. SPRAY DRYER, SPIN FLASH / FLASH DRYE, EVAPORATORS..',
    cta: 'Discover',
    col: 'col-lg-4 col-md-6',
  },
  {
    compact: true,
    icon: 'bi-cloud-upload',
    title: 'Product Trial Facility',
    desc: 'Our pilot dryer is available for you during R&D and product development. You can test your product before investing in new machinery.',
    cta: 'Get Quote',
    col: 'col-lg-4 col-md-6',
  },
  {
    compact: true,
    icon: 'bi-cloud-upload',
    title: 'Refurbishment Services',
    desc: 'We are experienced in the fabrication of dryers , evaporators and associated equipment. Over the past 20 years, we have fabricated and installed hundreds of dryers throughout the country.',
    cta: 'Get Quote',
    col: 'col-lg-4 col-md-6',
  },
]

const serviceStats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '5+', label: 'Years Experience' },
]

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container section-title">
        <h2>Services</h2>

      </div>
      <div className="container">
        <div className="row gy-4">
          {servicesList.map((s, i) => (
            <div key={i} className={s.col}>
              <div className={`service-card ${s.compact ? 'compact' : ''}`}>
                <div className="service-icon">
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <div className="service-content">
                  <h3>
                    <a href="#services">{s.title}</a>
                  </h3>
                  <p>{s.desc}</p>
                  <div className="service-meta">
                    {s.badge && <span className="badge popular">{s.badge}</span>}
                    {s.price && <span className="price">{s.price}</span>}
                  </div>
                  {/* <a href="#contact" className="btn-cta">
                    <span>{s.cta}</span>
                    <i className="bi bi-arrow-right"></i>
                  </a> */}
                </div>
                <div className="service-bg"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="stats-highlight">
          <div className="row">
            {serviceStats.map((stat, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

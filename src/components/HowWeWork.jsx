const steps = [
  {
    icon: 'bi-search',
    number: 'Step 1',
    title: 'Research & Planning',
    text: 'Nulla facilisi morbi tempus iaculis urna id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.',
    arrow: true,
  },
  {
    icon: 'bi-lightbulb',
    number: 'Step 2',
    title: 'Creative Solutions',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    arrow: true,
  },
  {
    icon: 'bi-gear',
    number: 'Step 3',
    title: 'Development',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    arrow: true,
  },
  {
    icon: 'bi-rocket-takeoff',
    number: 'Step 4',
    title: 'Launch & Support',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
    arrow: false,
  },
]

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="how-we-work section">
      <div className="container section-title">
        <h2>How We Work</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container">
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={i} className="step-card">
              <div className="step-icon">
                <i className={`bi ${step.icon}`}></i>
              </div>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {step.arrow && (
                <div className="step-arrow">
                  <i className="bi bi-arrow-right"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

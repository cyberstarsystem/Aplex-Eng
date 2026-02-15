import bg14 from '../assets/img/bg/banner.jpg'

const heroStats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
]

const featureCards = [
  { icon: 'bi-shield-check', label: 'Secure & Reliable' },
  { icon: 'bi-people', label: 'Expert Team' },
  { icon: 'bi-speedometer2', label: 'High Performance' },
  { icon: 'bi-award', label: 'Award Winning' },
]

export default function Hero() {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="hero-background">
        <img src={bg14} alt="" data-aos-duration="1000" />
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <span className="hero-badge">Innovative Solutions</span>
              <h1>Welcome to Aplex Engineering Systems.</h1>
              <p>
                Experts in Spray Drying & Process Equipment Solutions

              </p>
              <div className="hero-actions">
                <a href="#services" className="btn-primary">Explore Services</a>
                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="btn-secondary glightbox">
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Demo</span>
                </a>
              </div>
              <div className="hero-stats">
                {heroStats.map((stat, i) => (
                  <div key={i} className="stat-item">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual">
              <div className="row g-3">
                <div className="col-6">
                  <div className="feature-card">
                    <i className={`bi ${featureCards[0].icon}`}></i>
                    <span>{featureCards[0].label}</span>
                  </div>
                  <div className="feature-card">
                    <i className={`bi ${featureCards[1].icon}`}></i>
                    <span>{featureCards[1].label}</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="feature-card">
                    <i className={`bi ${featureCards[2].icon}`}></i>
                    <span>{featureCards[2].label}</span>
                  </div>
                  <div className="feature-card">
                    <i className={`bi ${featureCards[3].icon}`}></i>
                    <span>{featureCards[3].label}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import aboutImg from '../assets/img/about/about-square-8.webp'

const aboutStats = [
  { number: '8+', label: 'Years Experience' },
  { number: '500+', label: 'Projects Completed' },
  { number: '25', label: 'Team Members' },
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row align-items-center">
          <div className="container section-title">
            <h2>About Us</h2>

          </div>
          <div className="col-lg-6">
            <div className="content">
              <h2>With deep expertise in drying and evaporation technology</h2>

              <p className="lead">
                Aplex Engineering Systems is a leading manufacturer and exporter specializing in Spray Dryers and Evaporators. We also provide complementary process equipment such as Reactors, Crystallizers, and Storage Vessels to deliver complete process solutions
              </p>
              <p>
                Our focus is on engineering excellence — combining technology, precision manufacturing, and robust design to serve industries across the globe.
              </p>
              <p>
                Through collaborative partnerships and innovative solutions, we&apos;ve helped hundreds of organizations
                achieve their goals while building lasting relationships founded on trust, transparency, and exceptional
                results.
              </p>
              <div className="stats-container">
                <div className="row">
                  {aboutStats.map((stat, i) => (
                    <div key={i} className="col-md-4">
                      <div className="stat-item">
                        <div className="number">{stat.number}</div>
                        <div className="label">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cta-wrapper">
                <a href="#portfolio" className="btn btn-primary">Discover Our Work</a>
                {/* <a href="#team" className="btn btn-outline">Meet Our Team</a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-wrapper">
              <img src={aboutImg} alt="About Us" className="img-fluid main-image" />
              <div className="floating-card">
                <div className="card-content">
                  <i className="bi bi-award"></i>
                  <div className="text">
                    <h5>Excellence Award</h5>
                    <span>Digital Innovation 2023</span>
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

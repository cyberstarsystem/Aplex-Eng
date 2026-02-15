import illustration3 from '../assets/img/illustration/illustration-3.webp'

export default function CallToAction() {
  return (
    <section id="call-to-action" className="call-to-action section light-background">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <div className="row g-0">
            <div className="col-lg-7">
              <div className="cta-content p-5">
                <span className="badge-custom">Premium Offer</span>
                <h2 className="mt-4 mb-4">Transform Your Experience With Our Solution</h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <div className="row benefits-row mb-5">
                  <div className="col-md-6">
                    <div className="benefit-item">
                      <div className="icon-box">
                        <i className="bi bi-lightning-charge-fill"></i>
                      </div>
                      <div className="benefit-content">
                        <h5>Quick Setup</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="benefit-item">
                      <div className="icon-box">
                        <i className="bi bi-shield-check"></i>
                      </div>
                      <div className="benefit-content">
                        <h5>Full Security</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="action-buttons">
                  <a href="#" className="btn btn-primary">Start Now</a>
                  <a href="#" className="btn btn-outline">Learn More</a>
                  <div className="guarantee-badge">
                    <i className="bi bi-patch-check-fill"></i>
                    <span>30-Day Money Back</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cta-image-container">
                <img src={illustration3} alt="Illustration" className="img-fluid main-image" />
                <div className="floating-element element-1">
                  <i className="bi bi-star-fill"></i>
                  <span>4.9 Rating</span>
                </div>
                <div className="floating-element element-2">
                  <i className="bi bi-people-fill"></i>
                  <span>10k+ Users</span>
                </div>
                <div className="pattern-dots"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

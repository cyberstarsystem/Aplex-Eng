import React from 'react'
import aboutImg from '../assets/img/about/about-square-8.webp'

const OurVision = () => {
    return (
        <div>
            <section id="vision" className="about section">
                <div className="container section-title">
                    <h2>Our Vision</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <div className="content">
                                <h2>At Aplex Engineering Systems</h2>

                                <p className="lead">
                                    To be recognized as a global leader in spray drying and evaporation technology, setting new benchmarks in innovation, performance, and service
                                </p>
                                
                                {/* <div className="cta-wrapper">
                                        <a href="#portfolio" className="btn btn-primary">Discover Our Work</a>
                                        <a href="#team" className="btn btn-outline">Meet Our Team</a>
                                    </div> */}
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
        </div>
    )
}

export default OurVision
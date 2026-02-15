import React from 'react'
import aboutImg from '../assets/img/about/about-square-8.webp'

const OurMission = () => {
    return (
        <div>
            <section id="mission" className="about section">
                <div className="container section-title">
                    <h2>Our Mission</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container">
                    <div className="row align-items-center">
                       
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

                         <div className="col-lg-6">
                            <div className="content">
                                <h2>At Aplex Engineering Systems</h2>

                                <p className="lead">
                                    Our mission is to be a trusted global partner in providing cutting-edge process engineering solutions through the design, manufacture, and supply of high-performance spray dryers, evaporators, and allied process equipment. With 15 years of experience, Under the headship of our CEO Mr. Zakir Saiyad, we are committed to supporting our customers in achieving operational excellence, energy efficiency, and product quality through reliable and sustainable technologies.
                                </p>
                                <p>
                                    We aim to continuously innovate and adopt advanced engineering practices that address the evolving demands of industries such as food and dairy, chemical, pharmaceutical, and environmental sectors. By integrating deep technical expertise with modern manufacturing capabilities, we deliver solutions that not only enhance productivity but also contribute to a more sustainable and efficient future.
                                </p>
                                <p>
                                    Our mission is guided by the principles of quality, integrity, and customer satisfaction. We believe in building long-term partnerships by offering responsive technical support, timely delivery, and customized solutions that align with our clients’ specific requirements.
                                </p>

                                <p>
                                    Through continuous improvement and commitment to excellence, we endeavor to create lasting value for our customers, employees, and stakeholders—driving progress and innovation in every project we undertake.
                                </p>
                                
                                {/* <div className="cta-wrapper">
                                    <a href="#portfolio" className="btn btn-primary">Discover Our Work</a>
                                    <a href="#team" className="btn btn-outline">Meet Our Team</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default OurMission
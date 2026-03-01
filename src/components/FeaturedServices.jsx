import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import services9 from '../assets/img/services/services-9.webp'
import { Link } from 'react-router-dom'

const featuredServiceCards = [
  {
    icon: 'bi-bar-chart-fill',
    title: 'Innovation Strategy',
    desc: 'Advanced Engineering For Efficient Process Systems.',
    num: '01'
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Quality Management',
    desc: 'Premium materials & rigorous quality assurance.',
    num: '02'
  },
  { icon: 'bi-shield-check', title: 'Expertise ', desc: 'Premium materials & rigorous quality assurance.', num: '03', },
  { icon: 'bi-lightbulb-fill', title: 'Support', desc: 'We Provide End-to-end customer and technical support.', num: '04' },
]

const serviceDesc =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras vehicula magna eget lectus varius, at finibus massa condimentum.'

export default function FeaturedServices() {
  const swiperRef = useRef(null)
  const swiperInstance = useRef(null)

  useEffect(() => {
    if (!swiperRef.current) return
    swiperInstance.current = new Swiper(swiperRef.current, {
      modules: [Navigation, Autoplay], // 👈 IMPORTANT

      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      speed: 600,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '.swiper-nav-next',
        prevEl: '.swiper-nav-prev',
      },

      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
    })

    return () => {
      if (swiperInstance.current) swiperInstance.current.destroy()
    }
  }, [])

  return (
    <section id="featured-services" className="featured-services section light-background">
      <div className="container section-title">
        <h2>Featured Services</h2>

      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="services-content" data-aos-duration="900">
              <span className="subtitle">Professional Services</span>
              <h2>Engineering Excellence in Spray Dryers & Evaporators</h2>
              <p data-aos-duration="800">
                Delivering world-class drying and evaporation systems designed for performance, reliability, and efficiency built to meet the most demanding process requirements across industries
              </p>
              <div className="mt-4" data-aos-duration="1100">
                <Link to="/contact" className="btn-consultation">
                  <span>Request a Consultation</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="services-image">
              <img src={services9} alt="Business Services" className="img-fluid" />
              <div className="shape-circle"></div>
              <div className="shape-accent"></div>
            </div>
          </div>
        </div>
        <div className="row mt-5" data-aos-duration="1000">
          <div className="col-12">
            <div className="services-slider swiper" ref={swiperRef}>
              <div className="swiper-wrapper">
                {featuredServiceCards.map((card, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="service-card">
                      <div className="icon-box">
                        <i className={`bi ${card.icon}`}></i>
                      </div>
                      <a href="#" className="arrow-link">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                      <div className="content">
                        <h4>
                          <a href="#">{card.title}</a>
                        </h4>
                        <p style={{fontSize: "17px" }}>{card.desc}</p>
                        <div className="service-number">{card.num}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper-navigation">
              <button type="button" className="swiper-nav-prev" aria-label="Previous">
                <i className="bi bi-chevron-left"></i>
              </button>
              <button type="button" className="swiper-nav-next" aria-label="Next">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

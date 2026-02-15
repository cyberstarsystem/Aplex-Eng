import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import 'swiper/css/bundle'
import personM9 from '../assets/img/person/person-m-9.webp'
import personF5 from '../assets/img/person/person-f-5.webp'
import personF12 from '../assets/img/person/person-f-12.webp'
import personM12 from '../assets/img/person/person-m-12.webp'
import personM13 from '../assets/img/person/person-m-13.webp'

const testimonials = [
  {
    quote:
      'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    img: personM9,
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
  },
  {
    quote:
      'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
    img: personF5,
    name: 'Sara Wilsson',
    role: 'Designer',
  },
  {
    quote:
      'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
    img: personF12,
    name: 'Jena Karlis',
    role: 'Store Owner',
  },
  {
    quote:
      'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
    img: personM12,
    name: 'Matt Brandon',
    role: 'Freelancer',
  },
  {
    quote:
      'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
    img: personM13,
    name: 'John Larson',
    role: 'Entrepreneur',
  },
]

export default function Testimonials() {
  const swiperRef = useRef(null)
  const swiperInstance = useRef(null)

  useEffect(() => {
    if (!swiperRef.current) return
    swiperInstance.current = new Swiper(swiperRef.current, {
      loop: true,
      speed: 600,
      autoplay: { delay: 5000 },
      slidesPerView: 'auto',
      pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 40 },
        1200: { slidesPerView: 3, spaceBetween: 1 },
      },
    })
    return () => {
      if (swiperInstance.current) swiperInstance.current.destroy()
    }
  }, [])

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {testimonials.map((t, i) => (
              <div key={i} className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{t.quote}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <img src={t.img} className="testimonial-img" alt={t.name} />
                  <h3>{t.name}</h3>
                  <h4>{t.role}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

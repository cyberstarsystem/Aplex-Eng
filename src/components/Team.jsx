import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import 'swiper/css/bundle'
import personM3 from '../assets/img/person/person-m-3.webp'
import personF5 from '../assets/img/person/person-f-5.webp'
import personM8 from '../assets/img/person/person-m-8.webp'
import personF9 from '../assets/img/person/person-f-9.webp'
import personM12 from '../assets/img/person/person-m-12.webp'

const teamMembers = [
  {
    img: personM3,
    name: 'Marcus Wilson',
    role: 'Chief Technology Officer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
  },
  {
    img: personF5,
    name: 'Sophia Reynolds',
    role: 'Product Designer',
    bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    img: personM8,
    name: 'Daniel Chen',
    role: 'Marketing Specialist',
    bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    img: personF9,
    name: 'Olivia Thompson',
    role: 'Lead Developer',
    bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    img: personM12,
    name: 'Jason Parker',
    role: 'UI/UX Designer',
    bio: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.',
  },
]

const socialIcons = [
  { href: '#', icon: 'bi-twitter-x' },
  { href: '#', icon: 'bi-facebook' },
  { href: '#', icon: 'bi-instagram' },
  { href: '#', icon: 'bi-linkedin' },
]

export default function Team() {
  const swiperRef = useRef(null)
  const swiperInstance = useRef(null)

  useEffect(() => {
    if (!swiperRef.current) return
    swiperInstance.current = new Swiper(swiperRef.current, {
      loop: true,
      speed: 800,
      autoplay: { delay: 5000 },
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    })
    return () => {
      if (swiperInstance.current) swiperInstance.current.destroy()
    }
  }, [])

  return (
    <section id="team" className="team section">
      <div className="container section-title">
        <h2>Team</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container">
        <div className="team-slider swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {teamMembers.map((member, i) => (
              <div key={i} className="swiper-slide">
                <div className="team-card">
                  <div className="team-image">
                    <img src={member.img} className="img-fluid" alt={member.name} loading="lazy" />
                    <div className="team-overlay">
                      <div className="social-links">
                        {socialIcons.map((s, j) => (
                          <a key={j} href={s.href}>
                            <i className={`bi ${s.icon}`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                    <p>{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  )
}

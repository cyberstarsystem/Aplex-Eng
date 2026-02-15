import { useRef, useEffect } from 'react'
import productsData from "../data/productsData";
import { Link, NavLink } from 'react-router-dom'
import misc7 from '../assets/img/misc/misc-7.webp'
import misc12 from '../assets/img/misc/misc-12.webp'
import misc5 from '../assets/img/misc/misc-5.webp'
import logo from '../assets/img/logo.jpg'

const socialLinks = [
  { href: '#', className: 'twitter', icon: 'bi-twitter-x' },
  { href: '#', className: 'facebook', icon: 'bi-facebook' },
  { href: '#', className: 'instagram', icon: 'bi-instagram' },
  { href: '#', className: 'linkedin', icon: 'bi-linkedin' },
]

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  // { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const megamenuTabs = [
  { id: '2190-tab-1', icon: 'bi-building-gear', label: 'Enterprise Software' },
  { id: '2190-tab-2', icon: 'bi-code-slash', label: 'Development Tools' },
  { id: '2190-tab-3', icon: 'bi-palette', label: 'Creative Suite' },
  { id: '2190-tab-4', icon: 'bi-journal-text', label: 'Resources' },
]

export default function Navbar() {
  const toggleRef = useRef(null)
  const bodyRef = useRef(typeof document !== 'undefined' ? document.body : null)

  const handleMobileNavToggle = () => {
    if (typeof document === 'undefined') return
    document.body.classList.toggle('mobile-nav-active')
    const btn = document.querySelector('.mobile-nav-toggle')
    if (btn) {
      btn.classList.toggle('bi-list')
      btn.classList.toggle('bi-x')
    }
  }

  useEffect(() => {
    const navLinks = document.querySelectorAll('#navmenu a')
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (document.body.classList.contains('mobile-nav-active')) {
          handleMobileNavToggle()
        }
      })
    })
    const toggleDropdowns = document.querySelectorAll('.navmenu .toggle-dropdown')
    toggleDropdowns.forEach((el) => {
      el.addEventListener('click', function (e) {
        e.preventDefault()
        this.parentNode.classList.toggle('active')
        const next = this.parentNode.nextElementSibling
        if (next) next.classList.toggle('dropdown-active')
        e.stopImmediatePropagation()
      })
    })
    return () => {
      navLinks.forEach((link) => link.removeEventListener('click', handleMobileNavToggle))
    }
  }, [])

  return (
    <header id="header" className="header fixed-top">
      <div className="topbar d-flex align-items-center dark-background">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">contact@example.com</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+1 5589 55488 55</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} className={s.className}>
                <i className={`bi ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-cente">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="#hero" className="logo d-flex align-items-center">
            <img src={logo} alt="" />

          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}


              <li className="megamenu-2">
                <a href="#">
                  <span>Products</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul className="mobile-megamenu">
                  {productsData.map((category, i) => (
                    <li className="dropdown" key={i}>
                      <a href="#">
                        <span>{category.category}</span>
                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                      </a>
                      <ul>
                        {category.items.map((item, index) => (
                          <li key={index}>
                            <Link  to={`/products/${category.categorySlug}/${item.slug}`}
                            >{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>


                <div className="desktop-megamenu">
                  <div className="tab-navigation">
                    <ul className="nav nav-tabs flex-column" id="2190-megamenu-tabs" role="tablist">
                      {productsData.map((category, i) => (
                        <li key={i} className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${i === 0 ? "active" : ""}`}
                            id={`tab-${i}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#tab-${i}`}
                            type="button"
                            role="tab"
                            aria-selected={i === 0}
                          >
                            <i className={`bi ${category.icon} me-2`}></i>
                            <span>{category.category}</span>

                          </button>
                        </li>
                      ))}

                    </ul>
                  </div>
                  <div className="tab-content">
                    {productsData.map((category, i) => (
                      <div
                        key={i}
                        className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
                        id={`tab-${i}`}
                        role="tabpanel"
                      >
                        <div className="content-grid">
                          <div className="product-section">
                            <h4>{category.category}</h4>
                            <div className="product-list">
                              <div className="row">
                                {category.items.map((item, index) => (
                                  <div className="col-md-4 col-sm-6 mb-3" key={index}>
                                    <Link  to={`/products/${category.categorySlug}/${item.slug}`} className="product-link d-block">
                                      <i className={`bi ${item.icon} me-2 text-dark`} style={{fontSize: "25px" }}></i>
                                      <span>{item.title}</span>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </li>

            </ul>
            <i
              className="mobile-nav-toggle d-xl-none bi bi-list"
              aria-label="Toggle navigation"
              onClick={handleMobileNavToggle}
              ref={toggleRef}
            ></i>
          </nav>
        </div>
      </div>
    </header>
  )
}

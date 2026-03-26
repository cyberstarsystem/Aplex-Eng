import { Link } from 'react-router-dom'
import logo from '../assets/img/white-logo.svg'
import DownloadCTA from './DownloadCTA'

const usefulLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

const ourServices = [
  { label: 'AMC Services', href: '#' },
  { label: 'System Customization', href: '#' },
  { label: 'Spares Supply', href: '#' },
  { label: 'Operation Contracts', href: '#' },
  { label: 'Product Trial Facility', href: '#' },
  { label: 'Refurbishment Services', href: '#' },
]

const socialIcons = [
  // { href: '', icon: 'bi-instagram' },
  { href: 'https://www.indiamart.com/aplexengineeringsystem/', target: '_blank', className: 'indiamart', image: '/images/indiamart.png' },

]

export default function Footer() {
  return (
    <>
      <DownloadCTA />

      <footer id="footer" className="footer position-relative dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-12 footer-about">
              <a href="#hero" className="logo d-flex align-items-center">
                <img src={logo} alt="" className='img-fluid' />
              </a>
              <p>
                We deliver innovative and reliable engineering solutions tailored to meet industrial needs. With a strong commitment to quality, performance, and long-term partnerships, we ensure excellence in every project we undertake.
              </p>
              <div className="social-links d-flex mt-4">
                {socialIcons.map((s, i) => (
                  <a key={i} href={s.href} target={s.target} className={s.className}>
                    {s.image ? (
                      <img
                        src={s.image}
                        alt="icon"
                        style={{ width: "20px", height: "20px"}}
                      />
                    ) : (
                      <i className={`bi ${s.icon}`}></i>
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map((link, i) => (
                  <li key={i}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                {ourServices.map((link, i) => (
                  <li key={i}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5 col-md-12 footer-contact text-md-start">
              <h4>Contact Us</h4>
              <h6>Head Office</h6>
              {/* <p>A-1207, RAJYASH RISE, VISHALA, AHMEDABAD, GUJARAT 380055, INDIA</p> */}
              <p>A-1207, Rajyash Rise, Vishala, Ahmedabad, Gujarat 380055, India</p>
              {/* <p>Vishala, Ahmedabad, Gujarat 380055</p> */}

              <p className="mt-4">
                <strong>Phone:</strong> <a href="tel:+918487013321"><span>+91 84870 13321</span></a>
              </p>
              <p>
                <strong>Email:</strong>
                <span>
                  <a href="mailto:sales@aplexengg.com">sales@aplexengg.com</a>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong className="px-1 sitename">Aplex</strong>. All Rights Reserved
          </p>

          <div className="credits">
            Developed by <a href="https://cyberstarsystem.in/">Cyberstar System</a>
          </div>
        </div>
      </footer>

    </>
  )
}

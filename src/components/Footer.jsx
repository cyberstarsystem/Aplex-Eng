const usefulLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Terms of service', href: '#' },
  { label: 'Privacy policy', href: '#' },
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
  { href: '', icon: 'bi-twitter-x' },
  { href: '', icon: 'bi-facebook' },
  { href: '', icon: 'bi-instagram' },
  { href: '', icon: 'bi-linkedin' },
]

export default function Footer() {
  return (
    <footer id="footer" className="footer position-relative dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-12 footer-about">
            <a href="#hero" className="logo d-flex align-items-center">
              <span className="sitename">Passion</span>
            </a>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies
              darta donna mare fermentum iaculis eu non diam phasellus.
            </p>
            <div className="social-links d-flex mt-4">
              {socialIcons.map((s, i) => (
                <a key={i} href={s.href}>
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              {usefulLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href}>{link.label}</a>
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
          <div className="col-lg-5 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <h6>Head Office</h6>
            <p>D-1110, TITANIUM CITY CENTER, 11TH FLOOR, NR. SACHIN – TOWER, 100FT ROAD,</p>
            <p>SATELLITE, AHMEDABAD – 380015</p>

            <p className="mt-4">
              <strong>Phone:</strong> <a href="tel:+91 98250 95243"><span>+91 98250 95243</span></a>
            </p>
            <p>
              <strong>Email:</strong>
              <span>
                <a href="mailto:aplexengg@gmail.com"> aplexengg@gmail.com</a>
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
  )
}

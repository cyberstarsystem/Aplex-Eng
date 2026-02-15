const usefulLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Terms of service', href: '#' },
  { label: 'Privacy policy', href: '#' },
]

const ourServices = [
  { label: 'Web Design', href: '#' },
  { label: 'Web Development', href: '#' },
  { label: 'Product Management', href: '#' },
  { label: 'Marketing', href: '#' },
  { label: 'Graphic Design', href: '#' },
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
          <div className="col-lg-5 col-md-12 footer-about">
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
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States</p>
            <p className="mt-4">
              <strong>Phone:</strong> <span>+91 98250 95243</span>
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
          © <span>Copyright</span> <strong className="px-1 sitename">MyWebsite</strong> <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  )
}

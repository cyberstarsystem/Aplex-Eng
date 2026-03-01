import { useState, useEffect } from 'react'
import emailjs from "@emailjs/browser";

const contactCards = [
  {
    icon: 'bi-geo-alt', title: 'Head Office', content: `D-1110, TITANIUM CITY CENTER, 11TH FLOOR, NR. SACHIN –
 TOWER, 100FT ROAD, SATELLITE, AHMEDABAD – 380015, Gujarat, India `, mobile: '+91 98250 95243'
  },
  { icon: 'bi-geo-alt', title: 'Work', content: `FP-59, SHED NO.2, NR. SHRADDHAN IND. ESTATE, BARODA EXP.WAY ROAD, RAMOL HATHIJAN RING-ROAD, AHMEDABAD 382445.Gujarat, India.`, mobile: '+91 76989 84768' },
  { icon: 'bi-envelope', title: 'Email', content: 'sales@aplexengg.com', isEmail: true },
  { icon: 'bi-telephone', title: 'Call', content: '+91 84870 13321 ' },
  // { icon: 'bi-clock', title: 'Open Hours', content: 'Monday-Friday: 9AM - 6PM' },
]

const socialLinks = [
  { href: '#', icon: 'bi-twitter' },
  { href: '#', icon: 'bi-facebook' },
  { href: '#', icon: 'bi-instagram' },
  { href: '#', icon: 'bi-linkedin' },
]

export default function Contact() {
  const [status, setStatus] = useState('') // '', 'loading', 'sent', 'error'

  useEffect(() => {
    if (status === "sent" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs.sendForm(
      "service_fz8x2j6",   // 🔴 your service id
      "template_g726xsh",  // 🔴 your template id
      e.target,
      {
        publicKey: "YetzMhRYmHejwOiGh"
      }
    )
      .then(() => {
        setStatus("sent");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setStatus(error);
      });
  };


  return (
    <section id="contact" className="contact section">
      <div className="container section-title">
        <h2>Contact Us</h2>
        <p>We are open for any suggestion or just to have a chat</p>
      </div>
      <div className="container">
        <div className="contact-main-wrapper">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.312052707746!2d72.52037332468637!3d23.012311879181006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e857b1e641f55%3A0x340942a1d8267e91!2sTitanium%20City%20Center%20-%20Corporate%20Offices!5e0!3m2!1sen!2sin!4v1771155690203!5m2!1sen!2sin"
              width="100%"
              height="50%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location"
            ></iframe>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117514.00427802985!2d72.44054600226154!3d23.012290537255534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8919e37b5b39%3A0x55cb9a7efab1fb75!2sNear%20Shraddha%20Industrial%20Park-2!5e0!3m2!1sen!2sin!4v1771155808059!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location"
            ></iframe>
          </div>
          <div className="contact-content">
            <div className="contact-cards-container">
              {contactCards.map((card, i) => (
                <div key={i} className="contact-card">
                  <div className="icon-box">
                    <i className={`bi ${card.icon}`}></i>
                  </div>
                  <div className="contact-text">
                    <h4>{card.title}</h4>
                    <p>
                      {card.isEmail ? (
                        <a href={`mailto:${card.content}`}>{card.content}</a>
                      ) : (
                        card.content
                      )}

                      {card.mobile && <><hr /><i className="bi bi-telephone"></i> {card.mobile}</>}
                    </p>
                  </div>
                </div>
              ))}
            </div>


            <div className="contact-form-container">
              <h3>Get in Touch</h3>
              <p>
                Send us a message using the form below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group mt-3">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone"
                      maxLength="15"
                      pattern="[0-9]{0,15}"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading" style={{ display: status === 'loading' ? 'block' : 'none' }}>
                    Loading
                  </div>
                  <div
                    className="error-message"
                    style={{ display: status === 'error' ? 'block' : 'none' }}
                  >
                    Failed to send message ❌
                  </div>

                  <div
                    className="sent-message"
                    style={{ display: status === 'sent' ? 'block' : 'none' }}
                  >
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="form-submit">
                  <button type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>

                  <div className="social-links">
                    {socialLinks.map((s, i) => (
                      <a key={i} href={s.href}>
                        <i className={`bi ${s.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

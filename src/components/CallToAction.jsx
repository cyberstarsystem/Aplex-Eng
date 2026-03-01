import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import illustration3 from '../assets/img/illustration/illustration-3.webp';

export default function CallToAction() {

  const [status, setStatus] = useState(""); // '', 'loading', 'sent', 'error'

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
      "service_fz8x2j6",      // same service id
      "template_wpdfkqa",     // ya alag x  
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
        setStatus("error");
      });
  };

  return (
    <section id="call-to-action" className="call-to-action section light-background">
      <div className="container">
        <div className="cta-wrapper">
          <div className="row g-0">

            <div className="col-lg-7">
              <div className="cta-content p-5">

                <h2 className="mt-4 mb-4">Get in Touch With Our Experts</h2>

                <form onSubmit={handleSubmit} className="php-email-form">

                  <div className="row">

                    <div className="col-lg-6 mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-lg-6 mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-lg-12 mb-3">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="col-lg-12 mb-3">
                      <textarea
                        name="message"
                        rows="4"
                        className="form-control"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>

                  </div>

                  {/* Status Messages */}
                  <div className="my-3">
                    {status === "loading" && (
                      <div className="loading">Sending...</div>
                    )}

                    {status === "error" && (
                      <div className="error-message"   style={{ display: status === 'error' ? 'block' : 'none' }}>
                        Failed to send feedback ❌
                      </div>
                    )}

                    {status === "sent" && (
                      <div className="sent-message"  style={{ display: status === 'sent' ? 'block' : 'none' }}>
                        Feedback submitted successfully ✅
                      </div>
                    )}
                  </div>

                  <div className="col-lg-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Subject"
                      // value={formData.email}
                      // onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="4"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{borderRadius: "50px" }}>
                    Submit Feedback
                  </button>

                </form>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="cta-image-container p-4">
                <img
                  src={illustration3}
                  alt="Illustration"
                  className="img-fluid mt-4"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
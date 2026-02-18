import { useState } from "react";
import illustration3 from '../assets/img/illustration/illustration-3.webp'

export default function CallToAction() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // yaha API call kar sakte ho
    console.log(formData);

    setStatus("Feedback submitted successfully!");

    // reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="call-to-action" className="call-to-action section light-background">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>

          <div className="row g-0">

            {/* LEFT CONTENT SAME */}
            <div className="col-lg-7">
              <div className="cta-content p-5">
                <span className="badge-custom">TRUSTED BY INDUSTRY</span>
                <h2 className="mt-4 mb-4">Get in Touch With Our Experts</h2>
                <p className="mb-4">
                  Tell us about your requirements and our experienced team will provide a tailored solution to meet your business needs.
                </p>

                <form onSubmit={handleSubmit}>

                  <div className="row">
                    <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-lg-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
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

                  <button type="submit" className="btn btn-primary w-50">
                    Submit Feedback
                  </button>

                  {status && (
                    <div className="alert alert-success mt-3">
                      {status}
                    </div>
                  )}

                </form>

              </div>
            </div>

            {/* RIGHT SIDE FEEDBACK FORM */}
            <div className="col-lg-5">
              <div className="cta-image-container p-4">


                {/* optional illustration below form */}
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
  )
}

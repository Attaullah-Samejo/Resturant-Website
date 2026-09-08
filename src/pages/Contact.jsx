
import { useState } from "react";
import {
  CheckCircle,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* HEADING */}
        <div className="contact-heading">
          <p className="section-eyebrow">
            <span></span>
            GET IN TOUCH
          </p>

          <h2>
            We'd love to
            <br />
            <em>hear from you.</em>
          </h2>

          <p>
            Have a question, special request, or simply want
            to say hello? Our team is always happy to help.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="contact-layout">

          {/* CONTACT DETAILS */}
          <div className="contact-info">

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span>VISIT US</span>
                <strong>
                  Hyderabad
                  <br />
                  Qasimabad Hyderabad
                </strong>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={18} />
              </div>

              <div>
                <span>CALL US</span>
                <strong>
                  +92 3493464684
                </strong>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={18} />
              </div>

              <div>
                <span>EMAIL US</span>
                <strong>
                  attaullahsamejo684@gmail.com
                </strong>
              </div>
            </div>

            <div className="contact-hours">
              <Clock3 size={17} />

              <div>
                <span>OPENING HOURS</span>

                <strong>
                  Monday – Sunday
                </strong>

                <small>
                  11:00 AM – 11:00 PM
                </small>
              </div>
            </div>

          </div>

          {/* CONTACT FORM */}
          <div className="contact-card">

            {!sent ? (
              <>
                <div className="contact-card-heading">
                  <div>
                    <Send size={18} />
                    <h3>Send a Message</h3>
                  </div>

                  <span>WE'RE HERE TO HELP</span>
                </div>

                <form onSubmit={handleSubmit}>

                  <div className="contact-form-row">

                    <div className="contact-form-group">
                      <label htmlFor="contact-name">
                        Your Name
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="contact-form-group">
                      <label htmlFor="contact-email">
                        Email Address
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-subject">
                      Subject
                    </label>

                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-message">
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      rows="5"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    Send Message
                    <Send size={15} />
                  </button>

                </form>
              </>
            ) : (
              <div className="contact-success">

                <div className="contact-success-icon">
                  <CheckCircle size={30} />
                </div>

                <p className="section-eyebrow">
                  <span></span>
                  MESSAGE SENT
                </p>

                <h3>
                  Thank you for <em>reaching out.</em>
                </h3>

                <p>
                  Your message has been received. Our team will
                  get back to you as soon as possible.
                </p>

                <button
                  type="button"
                  className="contact-new-message"
                  onClick={() => setSent(false)}
                >
                  Send Another Message
                </button>

              </div>
            )}

          </div>

        </div>

        {/* FOOTER STRIP */}
        <div className="contact-footer">

          <div className="contact-footer-brand">
            <span className="contact-logo-mark">L</span>

            <div>
              <strong>LUMIÈRE</strong>
              <small>FINE DINING</small>
            </div>
          </div>

          <p>
            Crafted with passion. Served with love.
          </p>

          <span className="contact-copyright">
            © 2026 Lumière. All rights reserved.
          </span>

        </div>

      </div>
    </section>
  );
}

export default Contact;

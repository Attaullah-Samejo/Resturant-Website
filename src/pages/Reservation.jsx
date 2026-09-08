
import { useState } from "react";
import {
  CalendarDays,
  CheckCircle,
  Clock3,
  Users,
} from "lucide-react";

function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  const handleNewReservation = () => {
    setSubmitted(false);

    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
    });
  };

  return (
    <section
      className="reservation-section"
      id="reservation"
    >
      <div className="reservation-container">

        {/* LEFT CONTENT */}
        <div className="reservation-content">

          <p className="section-eyebrow">
            <span></span>
            RESERVATION
          </p>

          <h2>
            Your table
            <br />
            <em>awaits.</em>
          </h2>

          <p className="reservation-description">
            Make your evening special with an unforgettable
            dining experience at Lumière. Reserve your table
            and let us take care of the rest.
          </p>

          <div className="reservation-details">

            <div className="reservation-detail">
              <div className="reservation-detail-icon">
                <Clock3 size={17} />
              </div>

              <div>
                <strong>Opening Hours</strong>
                <span>
                  Monday – Sunday · 11:00 AM – 11:00 PM
                </span>
              </div>
            </div>

            <div className="reservation-detail">
              <div className="reservation-detail-icon">
                <Users size={17} />
              </div>

              <div>
                <strong>Perfect for Every Occasion</strong>
                <span>
                  Romantic dinners, family gatherings & celebrations
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* FORM / SUCCESS */}
        <div className="reservation-card">

          {!submitted ? (
            <>
              <div className="reservation-card-heading">
                <div>
                  <CalendarDays size={19} />
                  <h3>Book a Table</h3>
                </div>

                <span>FREE RESERVATION</span>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="reservation-form-grid">

                  <div className="reservation-form-group">
                    <label htmlFor="reservation-name">
                      Full Name
                    </label>

                    <input
                      id="reservation-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="reservation-form-group">
                    <label htmlFor="reservation-phone">
                      Phone Number
                    </label>

                    <input
                      id="reservation-phone"
                      name="phone"
                      type="tel"
                      placeholder="+92 300 0000000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="reservation-form-group">
                    <label htmlFor="reservation-date">
                      Date
                    </label>

                    <input
                      id="reservation-date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="reservation-form-group">
                    <label htmlFor="reservation-time">
                      Time
                    </label>

                    <select
                      id="reservation-time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select time
                      </option>
                      <option value="11:00 AM">
                        11:00 AM
                      </option>
                      <option value="12:00 PM">
                        12:00 PM
                      </option>
                      <option value="01:00 PM">
                        01:00 PM
                      </option>
                      <option value="02:00 PM">
                        02:00 PM
                      </option>
                      <option value="06:00 PM">
                        06:00 PM
                      </option>
                      <option value="07:00 PM">
                        07:00 PM
                      </option>
                      <option value="08:00 PM">
                        08:00 PM
                      </option>
                      <option value="09:00 PM">
                        09:00 PM
                      </option>
                      <option value="10:00 PM">
                        10:00 PM
                      </option>
                    </select>
                  </div>

                </div>

                <div className="reservation-form-group full">
                  <label htmlFor="reservation-guests">
                    Number of Guests
                  </label>

                  <select
                    id="reservation-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  >
                    <option value="1">
                      1 Guest
                    </option>
                    <option value="2">
                      2 Guests
                    </option>
                    <option value="3">
                      3 Guests
                    </option>
                    <option value="4">
                      4 Guests
                    </option>
                    <option value="5">
                      5 Guests
                    </option>
                    <option value="6">
                      6 Guests
                    </option>
                    <option value="7">
                      7 Guests
                    </option>
                    <option value="8">
                      8 Guests
                    </option>
                    <option value="9">
                      9 Guests
                    </option>
                    <option value="10">
                      10+ Guests
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="reservation-submit"
                >
                  Confirm Reservation
                  <CheckCircle size={16} />
                </button>

                <p className="reservation-note">
                  We'll contact you shortly to confirm your reservation.
                </p>

              </form>
            </>
          ) : (
            <div className="reservation-success">

              <div className="reservation-success-icon">
                <CheckCircle size={30} />
              </div>

              <p className="section-eyebrow">
                <span></span>
                RESERVATION REQUESTED
              </p>

              <h3>
                Table <em>reserved.</em>
              </h3>

              <p>
                Thank you, {formData.name}. Your reservation
                request for {formData.guests}{" "}
                {formData.guests === "1"
                  ? "guest"
                  : "guests"}{" "}
                on {formData.date} at {formData.time} has
                been received.
              </p>

              <div className="reservation-confirmation-details">

                <div>
                  <span>Date</span>
                  <strong>{formData.date}</strong>
                </div>

                <div>
                  <span>Time</span>
                  <strong>{formData.time}</strong>
                </div>

                <div>
                  <span>Guests</span>
                  <strong>{formData.guests}</strong>
                </div>

              </div>

              <button
                type="button"
                className="reservation-new"
                onClick={handleNewReservation}
              >
                Make Another Reservation
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default Reservation;

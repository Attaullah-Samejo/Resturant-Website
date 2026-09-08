
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Star,
} from "lucide-react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <main className="home" id="home">
      <Navbar />

      <section className="hero">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-rating">
            <div className="stars">
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
            </div>

            <span>4.9 · 500+ happy guests</span>
          </div>

          <p className="hero-eyebrow">
            <span></span>
            WELCOME TO LUMIÈRE
          </p>

          <h1>
            Where every
            <br />
            <em>bite</em> tells a story.
          </h1>

          <p className="hero-description">
            A refined dining experience where seasonal ingredients,
            timeless recipes, and modern artistry come together.
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="primary-btn">
              Explore Our Menu
              <ArrowRight size={17} />
            </a>

            <a href="#reservation" className="secondary-btn">
              <CalendarDays size={17} />
              Reserve a Table
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <strong>12+</strong>
              <span>Years of excellence</span>
            </div>

            <div className="meta-line"></div>

            <div>
              <strong>25</strong>
              <span>Signature dishes</span>
            </div>

            <div className="meta-line"></div>

            <div>
              <strong>5★</strong>
              <span>Dining experience</span>
            </div>
          </div>

        </div>

        <a
          href="#menu"
          className="scroll-down"
          aria-label="Scroll to menu"
        >
          <span>SCROLL TO DISCOVER</span>
          <ChevronDown size={17} />
        </a>

      </section>
    </main>
  );
}

export default Home;

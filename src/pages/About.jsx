
import {
  ArrowRight,
  Award,
  ChefHat,
  Heart,
  Sparkles,
} from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* IMAGE SIDE */}
        <div className="about-visual">

          <div className="about-image-main">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
              alt="Elegant Lumière restaurant interior"
            />
          </div>

          <div className="about-image-small">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=85"
              alt="Beautifully prepared restaurant dish"
            />
          </div>

          <div className="about-year">
            <strong>12</strong>
            <span>YEARS OF<br />EXCELLENCE</span>
          </div>

        </div>

        {/* CONTENT SIDE */}
        <div className="about-content">

          <p className="section-eyebrow">
            <span></span>
            OUR STORY
          </p>

          <h2>
            More than
            <br />
            <em>just a meal.</em>
          </h2>

          <p className="about-lead">
            At Lumière, we believe the finest dining experiences
            are built around more than food — they're built around
            moments.
          </p>

          <p className="about-text">
            From thoughtfully sourced ingredients to beautifully
            crafted plates, every detail is designed to create a
            dining experience you'll remember. Our kitchen blends
            timeless culinary traditions with a modern touch.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <div className="about-feature-icon">
                <ChefHat size={17} />
              </div>

              <div>
                <strong>Passionate Chefs</strong>
                <span>Crafted with care</span>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon">
                <Award size={17} />
              </div>

              <div>
                <strong>Premium Quality</strong>
                <span>Finest ingredients</span>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon">
                <Heart size={17} />
              </div>

              <div>
                <strong>Made with Love</strong>
                <span>Every single plate</span>
              </div>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon">
                <Sparkles size={17} />
              </div>

              <div>
                <strong>Unique Experience</strong>
                <span>Memorable moments</span>
              </div>
            </div>

          </div>

          <a
            href="#menu"
            className="about-menu-link"
          >
            Discover Our Menu
            <ArrowRight size={15} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;

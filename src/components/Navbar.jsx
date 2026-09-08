
import { Menu, X, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { cartCount } = useCart();

  useEffect(() => {
    const sections = [
      "home",
      "menu",
      "about",
      "reservation",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      let currentSection = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const getNavClass = (section) =>
    activeSection === section ? "active" : "";

  return (
    <>
      <header className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={handleNavClick}
        >
          <span className="logo-mark">L</span>

          <div className="logo-text">
            <strong>LUMIÈRE</strong>
            <small>FINE DINING</small>
          </div>
        </a>

        <nav className="desktop-nav">

          <a
            href="#home"
            className={getNavClass("home")}
          >
            Home
          </a>

          <a
            href="#menu"
            className={getNavClass("menu")}
          >
            Menu
          </a>

          <a
            href="#about"
            className={getNavClass("about")}
          >
            Our Story
          </a>

          <a
            href="#reservation"
            className={getNavClass("reservation")}
          >
            Reservation
          </a>

          <a
            href="#contact"
            className={getNavClass("contact")}
          >
            Contact
          </a>

        </nav>

        <div className="nav-actions">

          <a
            href="#cart"
            className="cart-btn"
            aria-label={`Shopping cart, ${cartCount} items`}
          >
            <ShoppingBag size={20} />

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </a>

          <a
            href="#reservation"
            className="nav-reserve"
            onClick={handleNavClick}
          >
            Reserve a Table
          </a>

          <button
            className="mobile-menu"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

      </header>

      <div
        className={`mobile-nav ${isOpen ? "show" : ""}`}
      >
        <a
          href="#home"
          className={getNavClass("home")}
          onClick={handleNavClick}
        >
          Home
        </a>

        <a
          href="#menu"
          className={getNavClass("menu")}
          onClick={handleNavClick}
        >
          Menu
        </a>

        <a
          href="#about"
          className={getNavClass("about")}
          onClick={handleNavClick}
        >
          Our Story
        </a>

        <a
          href="#reservation"
          className={getNavClass("reservation")}
          onClick={handleNavClick}
        >
          Reservation
        </a>

        <a
          href="#contact"
          className={getNavClass("contact")}
          onClick={handleNavClick}
        >
          Contact
        </a>

        <a
          href="#cart"
          className="mobile-cart"
          onClick={handleNavClick}
        >
          <ShoppingBag size={18} />
          Cart

          {cartCount > 0 && (
            <span>({cartCount})</span>
          )}
        </a>

        <a
          href="#reservation"
          className="mobile-reserve"
          onClick={handleNavClick}
        >
          Reserve a Table
        </a>
      </div>
    </>
  );
}

export default Navbar;

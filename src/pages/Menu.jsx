
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Plus,
  ShoppingBag,
  Star,
} from "lucide-react";
import menuData from "../data/ProductData";
import { useCart } from "../context/CartContext";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [addedItem, setAddedItem] = useState(null);

  const { addToCart, cartCount, cartTotal } = useCart();

  const categories = [
    "All",
    "Starters",
    "Pizza",
    "Pasta",
    "Main Course",
    "Burgers",
    "Desserts",
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  const handleAddToCart = (item) => {
    addToCart(item);

    setAddedItem(item.id);

    setTimeout(() => {
      setAddedItem(null);
    }, 1800);
  };

  return (
    <>
      <section className="menu-section" id="menu">
        <div className="menu-container">

          <div className="menu-heading">
            <div>
              <p className="section-eyebrow">
                <span></span>
                OUR MENU
              </p>

              <h2>
                Crafted with
                <em> passion.</em>
              </h2>
            </div>

            <p className="menu-intro">
              Discover our carefully selected dishes, made with
              fresh ingredients and served with love.
            </p>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "category-btn active"
                    : "category-btn"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredItems.map((item) => {
              const isAdded = addedItem === item.id;

              return (
                <article className="food-card" key={item.id}>

                  <div className="food-image-wrapper">
                    <img src={item.image} alt={item.name} />

                    {item.popular && (
                      <span className="popular-badge">
                        Popular
                      </span>
                    )}

                    <button
                      className={`quick-add ${
                        isAdded ? "added" : ""
                      }`}
                      onClick={() => handleAddToCart(item)}
                      aria-label={`Add ${item.name} to cart`}
                    >
                      {isAdded ? (
                        <Check size={18} />
                      ) : (
                        <Plus size={19} />
                      )}
                    </button>
                  </div>

                  <div className="food-content">

                    <div className="food-top">
                      <div>
                        <h3>{item.name}</h3>

                        <div className="food-rating">
                          <Star size={12} fill="currentColor" />
                          <span>{item.rating}</span>
                        </div>
                      </div>

                      <strong className="food-price">
                        ${item.price}
                      </strong>
                    </div>

                    <p>{item.description}</p>

                    <button
                      className={`add-cart-btn ${
                        isAdded ? "added-btn" : ""
                      }`}
                      onClick={() => handleAddToCart(item)}
                    >
                      {isAdded ? (
                        <>
                          <Check size={15} />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          Add to Cart
                          <ArrowRight size={15} />
                        </>
                      )}
                    </button>

                    {isAdded && (
                      <div className="cart-feedback">
                        <Check size={13} />
                        <span>
                          {item.name} added to your cart
                        </span>
                      </div>
                    )}

                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* FLOATING CART BAR */}
      {cartCount > 0 && (
        <div className="floating-cart">
          <div className="floating-cart-inner">

            <div className="floating-cart-info">
              <div className="floating-cart-icon">
                <ShoppingBag size={18} />

                <span>{cartCount}</span>
              </div>

              <div>
                <strong>
                  {cartCount}{" "}
                  {cartCount === 1 ? "Item" : "Items"}
                </strong>

                <small>Ready to checkout</small>
              </div>
            </div>

            <div className="floating-cart-right">
              <strong>${cartTotal.toFixed(2)}</strong>

              <a href="#cart" className="view-cart-btn">
                View Cart
                <ArrowRight size={15} />
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Menu;


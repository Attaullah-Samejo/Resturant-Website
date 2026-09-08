
import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <section className="cart-section" id="cart">
      <div className="cart-container">

        <div className="cart-heading">
          <p className="section-eyebrow">
            <span></span>
            YOUR ORDER
          </p>

          <h2>
            Your <em>cart.</em>
          </h2>

          <p>
            Review your selected dishes before continuing to checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <ShoppingBag size={38} />

            <h3>Your cart is empty</h3>

            <p>
              Add some delicious dishes from our menu to get started.
            </p>

            <a href="#menu" className="primary-btn">
              Explore Menu
              <ArrowRight size={16} />
            </a>
          </div>
        ) : (
          <div className="cart-layout">

            {/* CART ITEMS */}
            <div className="cart-items">

              {cart.map((item) => (
                <article className="cart-item" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>

                    <span className="cart-item-category">
                      {item.category}
                    </span>

                    <strong className="cart-item-price">
                      ${item.price}
                    </strong>
                  </div>

                  <div className="cart-item-actions">

                    <div className="quantity-control">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label={`Decrease ${item.name}`}
                      >
                        <Minus size={13} />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        aria-label={`Increase ${item.name}`}
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <strong className="cart-item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </strong>

                    <button
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={15} />
                    </button>

                  </div>
                </article>
              ))}

            </div>

            {/* ORDER SUMMARY */}
            <aside className="order-summary">

              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Subtotal</span>
                <strong>${cartTotal.toFixed(2)}</strong>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <strong>Free</strong>
              </div>

              <div className="summary-line"></div>

              <div className="summary-total">
                <span>Total</span>
                <strong>${cartTotal.toFixed(2)}</strong>
              </div>

              <a href="#checkout" className="checkout-btn">
                Proceed to Checkout
                <ArrowRight size={16} />
              </a>

              <a href="#menu" className="continue-shopping">
                Continue Shopping
              </a>

            </aside>

          </div>
        )}

      </div>
    </section>
  );
}

export default Cart;

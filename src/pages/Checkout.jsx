
import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle,
  CreditCard,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const {
    cart,
    cartTotal,
    placeOrder,
  } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      return;
    }

    placeOrder();
    setOrderPlaced(true);

    setTimeout(() => {
      document
        .getElementById("confirmation")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  if (orderPlaced) {
    return null;
  }

  return (
    <section
      className="checkout-section"
      id="checkout"
    >
      <div className="checkout-container">

        {/* HEADING */}
        <div className="checkout-heading">
          <p className="section-eyebrow">
            <span></span>
            CHECKOUT
          </p>

          <h2>
            Complete your <em>order.</em>
          </h2>
        </div>

        {/* CHECKOUT FORM */}
        <form onSubmit={handlePlaceOrder}>
          <div className="checkout-layout">

            {/* LEFT SIDE */}
            <div className="checkout-form">

              {/* DELIVERY DETAILS */}
              <div className="checkout-card">
                <h3>Delivery Details</h3>

                <div className="form-group">
                  <label>
                    <User size={13} />
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Phone size={13} />
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+92 300 0000000"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    <MapPin size={13} />
                    Delivery Address
                  </label>

                  <textarea
                    placeholder="Enter your complete address"
                    rows="3"
                    required
                  ></textarea>
                </div>
              </div>

              {/* PAYMENT METHOD */}
              <div className="checkout-card">
                <h3>Payment Method</h3>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                  />

                  <span className="payment-icon">
                    <CreditCard size={17} />
                  </span>

                  <span>
                    <strong>
                      Cash on Delivery
                    </strong>

                    <small>
                      Pay when your order arrives
                    </small>
                  </span>

                  <CheckCircle size={17} />
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                  />

                  <span className="payment-icon">
                    <CreditCard size={17} />
                  </span>

                  <span>
                    <strong>
                      Card Payment
                    </strong>

                    <small>
                      Secure online payment
                    </small>
                  </span>
                </label>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <aside className="checkout-summary">

              <h3>Your Order</h3>

              {/* ORDER ITEMS */}
              <div className="checkout-items">
                {cart.map((item) => (
                  <div
                    className="checkout-item"
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div>
                      <strong>
                        {item.name}
                      </strong>

                      <span>
                        Qty: {item.quantity}
                      </span>
                    </div>

                    <b>
                      $
                      {(
                        item.price *
                        item.quantity
                      ).toFixed(2)}
                    </b>
                  </div>
                ))}
              </div>

              {/* DIVIDER */}
              <div className="checkout-divider"></div>

              {/* SUBTOTAL */}
              <div className="checkout-total-row">
                <span>Subtotal</span>

                <strong>
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>

              {/* DELIVERY */}
              <div className="checkout-total-row">
                <span>Delivery</span>

                <strong>
                  Free
                </strong>
              </div>

              {/* GRAND TOTAL */}
              <div className="checkout-grand-total">
                <span>Total</span>

                <strong>
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>

              {/* PLACE ORDER */}
              <button
                type="submit"
                className="place-order-btn"
                disabled={cart.length === 0}
              >
                Place Order
                <CheckCircle size={17} />
              </button>

              {/* BACK TO CART */}
              <a
                href="#cart"
                className="back-cart"
              >
                <ArrowLeft size={13} />
                Back to Cart
              </a>

            </aside>

          </div>
        </form>

      </div>
    </section>
  );
}

export default Checkout;

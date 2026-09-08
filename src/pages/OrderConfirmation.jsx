
import {
  Check,
  Clock3,
  Home,
  ShoppingBag,
} from "lucide-react";
import { useCart } from "../context/CartContext";

function OrderConfirmation() {
  const { lastOrder } = useCart();

  if (!lastOrder) {
    return null;
  }

  return (
    <section
      className="confirmation-section"
      id="confirmation"
    >
      <div className="confirmation-container">

        <div className="confirmation-icon">
          <Check size={32} />
        </div>

        <p className="section-eyebrow confirmation-eyebrow">
          <span></span>
          ORDER CONFIRMED
        </p>

        <h2>
          Thank you for <em>ordering.</em>
        </h2>

        <p className="confirmation-text">
          Your order has been received and our kitchen is
          getting everything ready for you.
        </p>

        <div className="order-number">
          <span>ORDER NUMBER</span>
          <strong>#{lastOrder.orderNumber}</strong>
        </div>

        <div className="confirmation-card">

          <div className="confirmation-card-heading">
            <div>
              <ShoppingBag size={17} />
              <h3>Your Order</h3>
            </div>

            <span>
              {lastOrder.items.length}{" "}
              {lastOrder.items.length === 1
                ? "Item"
                : "Items"}
            </span>
          </div>

          <div className="confirmation-items">
            {lastOrder.items.map((item) => (
              <div
                className="confirmation-item"
                key={item.id}
              >
                <div>
                  <strong>{item.name}</strong>

                  <span>
                    Qty: {item.quantity}
                  </span>
                </div>

                <b>
                  $
                  {(
                    item.price * item.quantity
                  ).toFixed(2)}
                </b>
              </div>
            ))}
          </div>

          <div className="confirmation-divider"></div>

          <div className="confirmation-total">
            <span>Total</span>

            <strong>
              ${lastOrder.total.toFixed(2)}
            </strong>
          </div>

          <div className="delivery-status">
            <Clock3 size={16} />

            <div>
              <strong>
                Estimated delivery
              </strong>

              <span>
                30–45 minutes
              </span>
            </div>
          </div>

        </div>

        <a
          href="#home"
          className="confirmation-home"
        >
          <Home size={15} />
          Back to Home
        </a>

      </div>
    </section>
  );
}

export default OrderConfirmation;

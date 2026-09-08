
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      {/* HOME */}
      <Home />

      {/* MENU */}
      <Menu />

      {/* OUR STORY */}
      <About />

      {/* CART */}
      <Cart />

      {/* CHECKOUT */}
      <Checkout />

      {/* ORDER CONFIRMATION */}
      <OrderConfirmation />

      {/* RESERVATION */}
      <Reservation />

      {/* CONTACT + FOOTER */}
      <Contact />
    </CartProvider>
  );
}

export default App;

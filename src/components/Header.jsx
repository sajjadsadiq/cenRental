import Logo from "./../assets/logo.svg";
import Ring from "./../assets/ring.svg";
import Sun from "./../assets/icons/sun.svg";
import Cart from "./../assets//shopping-cart.svg";
import { useState } from "react";
import CartDetails from "./Movie/CartDetails";

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  function handleCartShow() {
    setShowCart(true);
  }

  function handleCartClose() {
    setShowCart(false);
  }
  return (
    <header>
      {showCart && <CartDetails onClose={handleCartClose} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Sun} width="24" height="24" alt="sun" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img src={Cart} width="24" height="24" alt="cart" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

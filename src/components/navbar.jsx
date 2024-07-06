import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingContext } from "../context/shopping-context.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

export default function NavBar() {
  const { cartCount } = useContext(ShoppingContext);

  return (
    <nav className="navbar">
      <h2 className="title">Shopping</h2>
      <div className="cart-link-container">
        <Link to="cart" className="cart-link">
          <FontAwesomeIcon icon={faCartShopping} />
          <h2 className="cart-count">{cartCount}</h2>
        </Link>
      </div>
    </nav>
  );
}

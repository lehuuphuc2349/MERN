import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar({ click }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCount = () => {
    return cartItems.reduce((qty, item) => Number(qty + item.qty) + qty, 0);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__logo">
          <h2>MERN Shopping Cart</h2>
        </div>
        <ul className="navbar__links">
          <li>
            <Link to="/cart" className="cart__link">
              <i className="fas fa-shopping-cart"></i>
              Cart
              <span className="cartlogo__badge">{getCount()}</span>
            </Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
        </ul>

        <div className="hamburger__menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Flipkart Logo */}
        <div className="logo">
          <img
            src="D:\react_p\Flipkart\flipkart-front\src\components\flipkart.png"
            alt="Flipkart"
          />
          <span className="explore">Explore <span className="plus">Plus</span></span>
        </div>

        {/* Search Bar */}
        <div className="search-box">
          <input type="text" placeholder="Search for products, brands and more" />
          <button>🔍</button>
        </div>

        {/* Navigation Options */}
        <div className="nav-items">
          <button className="login-btn">Login</button>
          <div className="more">More ⏷</div>
          <div className="cart">
            🛒 Cart
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

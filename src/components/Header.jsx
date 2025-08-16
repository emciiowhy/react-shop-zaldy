// src/components/Header.jsx
import React from "react";

function Header({ count, onToggleCart }) {
  return (
    <header className="header">
      <h1 className="logo">🛒 ShopEase</h1>
      <button className="cart-btn" onClick={onToggleCart}>
        Cart <span className="cart-count">{count}</span>
      </button>
    </header>
  );
}

export default Header;

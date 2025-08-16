// src/components/ProductCard.jsx
import React from "react";

function ProductCard({ image, name, price, description, onAddToCart, onBuy }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="price">₱{price.toLocaleString()}</p>

      <div className="actions">
        <button className="cart-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
        <button className="buy-btn" onClick={onBuy}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

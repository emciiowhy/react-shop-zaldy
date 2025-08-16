/* Product Card */
.product-card {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 16px;
  margin: 12px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.product-card img {
  width: 100%;
  max-height: 180px;
  object-fit: contain;
  border-radius: 6px;
  margin-bottom: 12px;
}

/* Texts */
.product-card h2 {
  font-size: 1.3rem; /* bigger */
  margin: 8px 0;
}

.product-card p {
  font-size: 1rem; /* slightly bigger */
  margin: 6px 0;
}

.product-card .price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2d6cdf;
  margin: 10px 0;
}

/* Buttons */
.product-card .button-group {
  display: flex;
  justify-content: center;
  gap: 12px; /* spacing between buttons */
  margin-top: 12px;
}

.product-card button {
  padding: 8px 14px;
  font-size: 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

/* Add to Cart Button */
.product-card .add-btn {
  background: #f1f1f1;
  color: #333;
}

.product-card .add-btn:hover {
  background: #ddd;
}

/* Buy Now Button */
.product-card .buy-btn {
  background: #2d6cdf;
  color: white;
}

.product-card .buy-btn:hover {
  background: #1a4bb8;
}

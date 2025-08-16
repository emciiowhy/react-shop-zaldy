import React from 'react'

export default function Cart({ items, onClear }) {
  const handleBuyNow = () => {
    if (items.length === 0) {
      alert("Your cart is empty. Add some products before buying!");
    } else {
      alert("Thank you for buying these products!");
      onClear(); 
    }
  };

  return (
    <aside className="cart-panel">
      {items.length === 0 ? (
        <div className="cart-empty">Your cart is empty.</div>
      ) : (
        <div>
          {items.map((p) => (
            <div key={p.id + Math.random()} className="cart-row">
              <img className="cart-thumb" src={p.image} alt={p.name} />
              <div style={{ flex: 1 }}>
                <div className="cart-name">{p.name}</div>
                <div className="cart-price">
                  {new Intl.NumberFormat('en-PH', {
                    style: 'currency',
                    currency: 'PHP'
                  }).format(p.price)}
                </div>
              </div>
            </div>
          ))}
          <div className="cart-actions" style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-danger" onClick={onClear}>
              Clear Cart
            </button>
            <button className="btn btn-success" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
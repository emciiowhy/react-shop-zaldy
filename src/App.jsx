// src/App.jsx
import React from "react";
import ProductCard from "./components/ProductCard";
import "./index.css";

function App() {
  const products = [
    { 
      id: 1, 
      image: "/images/headphones.jpg", 
      name: "Wireless Headphones", 
      price: 1499, 
      description: "Experience high-quality sound without the wires." 
    },
    { 
      id: 2, 
      image: "/images/smartwatch.jpg", 
      name: "Smartwatch", 
      price: 2499, 
      description: "Track your health and notifications on the go." 
    },
    { 
      id: 3, 
      image: "/images/mouse.jpg", 
      name: "Gaming Mouse", 
      price: 999, 
      description: "Precision and speed for serious gamers." 
    },
    { 
      id: 4, 
      image: "/images/keyboard.jpg", 
      name: "Mechanical Keyboard", 
      price: 1999, 
      description: "Tactile switches for the ultimate typing experience." 
    },
    { 
      id: 5, 
      image: "/images/speaker.jpg", 
      name: "Bluetooth Speaker", 
      price: 1299, 
      description: "Portable sound with deep bass and long battery life." 
    },
    { 
      id: 6, 
      image: "/images/stand.jpg", 
      name: "Laptop Stand", 
      price: 799, 
      description: "Ergonomic design to keep your posture in check." 
    },
    { 
      id: 7, 
      image: "/images/powerbank.jpg", 
      name: "Power Bank", 
      price: 899, 
      description: "Stay charged on the go with a 20,000mAh battery." 
    },
    { 
      id: 8, 
      image: "/images/earbuds.jpg", 
      name: "Wireless Earbuds", 
      price: 1599, 
      description: "Compact design with noise cancellation." 
    },
    { 
      id: 9, 
      image: "/images/camera.jpg", 
      name: "Action Camera", 
      price: 4999, 
      description: "Capture adventures in stunning 4K resolution." 
    },
    { 
      id: 10, 
      image: "/images/monitor.jpg", 
      name: "Gaming Monitor", 
      price: 7999, 
      description: "Ultra-wide screen with 144Hz refresh rate." 
    },
    { 
      id: 11, 
      image: "/images/mic.jpg", 
      name: "USB Microphone", 
      price: 2199, 
      description: "Perfect for streaming, podcasts, and recording." 
    },
    { 
      id: 12, 
      image: "/images/router.jpg", 
      name: "Wi-Fi Router", 
      price: 1799, 
      description: "Fast and stable internet connection for your home." 
    }
  ];

  const handleAddToCart = (productName) => {
    alert(`🛒 ${productName} added to cart!`);
  };

  const handleBuy = (productName) => {
    alert(`✅ You bought: ${productName}`);
  };

  return (
    <div className="app">
      <h1 className="title">🔥 Zaldy GadgetsCo 🔥</h1>
      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            onAddToCart={() => handleAddToCart(product.name)}
            onBuy={() => handleBuy(product.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

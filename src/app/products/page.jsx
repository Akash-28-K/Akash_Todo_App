"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./products.css";

export default function Products() {
  const products = useSelector((state) => state.pages.products);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div id="d">
      <nav className="navbar">
        <div className="nav-left">
          <h2>My Store</h2>
        </div>
        <div className="nav-right">
          <span>🛒 Cart: {cart.length}</span>
        </div>
      </nav>

      <div className="products-container">
        <h1>Our Products</h1>
        <ul className="products-list">
          {products.map((p) => (
            <li className="product-item" key={p.id}>
              <img src={p.image} alt={p.name} className="product-image" />
              <div className="product-details">
                <span className="product-name">{p.name}</span>
                <span className="product-price">{p.price}</span><br/>
                

                {isInCart(p.id) ? (
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(p.id)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button className="add-btn" onClick={() => addToCart(p)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

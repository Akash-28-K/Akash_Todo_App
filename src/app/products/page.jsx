"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/pages/pageSlice";
import "./products.css";

export default function Products() {
  const { products, cart } = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <div id="d">
      <nav className="navbar">
        <h2>My Store</h2>
        <span>🛒 Cart: {cart.length}</span>
      </nav>

      <div className="products-container">
        <h1>Our Products</h1>
        <ul className="products-list">
          {products.map((p) => (
            <li className="product-item" key={p.id}>
              <img src={p.image} alt={p.name} className="product-image" />
              <div className="product-details">
                <span className="product-name">{p.name}</span>
                <span className="product-price">{p.price}</span>
                <br />
                {isInCart(p.id) ? (
                  <button className="remove-btn" onClick={() => dispatch(removeFromCart(p.id))}>
                    Remove from Cart
                  </button>
                ) : (
                  <button className="add-btn" onClick={() => dispatch(addToCart(p))}>
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

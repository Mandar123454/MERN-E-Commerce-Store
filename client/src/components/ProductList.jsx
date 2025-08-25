// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import './ProductList.css';

function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/items')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-grid">
      {products.map(product => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} className="product-image"/>
            <div className="product-details">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-bottom">
                <span className="product-price">₹{product.price}</span>
                <button className="add-cart-btn" onClick={() => onAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}
export default ProductList;

// src/components/Cart.js
import React from 'react';
import './Cart.css';
function Cart({ cartItems, onRemove, onUpdateQty }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <section className="cart-section">
      <h2 style={{
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 800,
        fontSize: '1.6rem',
        color: '#6fa5ff',
        marginBottom: 18,
        letterSpacing: '0.01em',
        textShadow: '0 2px 12px #23243a44',
        textAlign: 'left',
      }}>Cart</h2>
      {cartItems.length === 0 ? (
        <div style={{ color: '#b3b6be', fontSize: '1.08rem', fontWeight: 500 }}>Cart is empty.</div>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item._id}>
              <span style={{ fontWeight: 700, color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif' }}>{item.name}</span>
              <span style={{ margin: '0 2px', color: '#b3b6be', fontWeight: 500 }}>×</span>
              <span style={{ fontWeight: 600 }}>{item.quantity}</span>
              <span style={{ margin: '0 6px', color: '#b3b6be', fontWeight: 400 }}>-</span>
              <span style={{ color: '#6fa5ff', fontWeight: 700 }}>₹{item.price * item.quantity}</span>
              <button onClick={() => onUpdateQty(item, item.quantity + 1)} title="Increase quantity">+</button>
              <button onClick={() => onUpdateQty(item, item.quantity - 1)} title="Decrease quantity">-</button>
              <button onClick={() => onRemove(item)} title="Remove from cart">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">Total: <span style={{ color: '#fff', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '0.01em' }}>₹{total}</span></div>
    </section>
  );
}
export default Cart;

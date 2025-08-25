import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const exist = prev.find(item => item._id === product._id);
      if (exist) {
        return prev.map(item =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems(prev => prev.filter(item => item._id !== product._id));
  };

  const updateQuantity = (product, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev =>
      prev.map(item => (item._id === product._id ? { ...item, quantity } : item))
    );
  };

    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #191a22 60%, #23243a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 0'
      }}>
        <div style={{
          maxWidth: 1200,
          width: '96%',
          margin: '0 auto',
          background: 'rgba(36, 38, 48, 0.98)',
          borderRadius: 28,
          boxShadow: '0 8px 40px rgba(30,40,65,0.18)',
          padding: '36px 36px 28px 36px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h1 style={{
            fontFamily: 'Montserrat, Arial, sans-serif',
            fontWeight: 800,
            fontSize: '2.4rem',
            color: '#e3e6f3',
            marginBottom: 18,
            letterSpacing: '0.01em',
            textAlign: 'center',
            textShadow: '0 2px 12px #23243a44'
          }}>
            MERN E-Commerce Store
          </h1>
          <ProductList onAddToCart={addToCart} />
          <Cart
            cartItems={cartItems}
            onRemove={removeFromCart}
            onUpdateQty={updateQuantity}
          />
        </div>
      </div>
    );
}

export default App;

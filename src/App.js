import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Olio from './pages/Olio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Territorio from './pages/Territorio';
import Pasta from './pages/Pasta';
import Farina from './pages/Farina';

function App() {
  const [cart, setCart] = useState([]); // Assicurati che cart sia inizializzato come array
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <Navbar cart={cart} toggleCart={toggleCart} />
        <div className="flex">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/olio" element={<Olio addToCart={addToCart} />} />
              <Route path="/pasta" element={<Pasta addToCart={addToCart} />} />
              <Route path="/farina" element={<Farina addToCart={addToCart} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/territorio" element={<Territorio />} />
            </Routes>
          </div>

        </div>
        <Footer />  
      <CartDrawer
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        isOpen={isCartOpen}
        toggleCart={toggleCart}
      />
      
    </Router>
  );
}

export default App;
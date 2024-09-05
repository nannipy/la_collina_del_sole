import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar({ cart = [], toggleCart }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="text-parchment p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl ml-0 font-bold hover:text-green transition-colors">
          <img src="images/logo-3.png" alt="Logo" className="w-auto h-28" />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-parchment focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 items-center">
          <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="hover:text-white transition-colors dropdown">
              Prodotti
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-white text-green rounded-lg shadow-lg z-50"
                  style={{ zIndex: 1000 }}
                >
                  <li>
                    <Link to="/olio" className="block px-4 py-2 hover:bg-green hover:text-beige transition-colors">
                      Olio
                    </Link>
                  </li>
                  <li>
                    <Link to="/pasta" className="block px-4 py-2 hover:bg-green hover:text-beige transition-colors">
                      Pasta
                    </Link>
                  </li>
                  <li>
                    <Link to="/farina" className="block px-4 py-2 hover:bg-green hover:text-beige transition-colors">
                      Farina
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li><Link to="/about" className="hover:text-white transition-colors">Chi siamo</Link></li>
          <li><Link to="/territorio" className="hover:text-white transition-colors">Territorio</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contatti</Link></li>
          <li>
            <button onClick={toggleCart} className="relative text-beige transition-colors bg-green px-5 py-3 rounded-lg">
              <img src="images/carrello.png" alt="Carrello" className="w-auto h-6 text-beige" />
              {cart.length > 0 && (
                <span className="absolute top-1 right-1 bg-white text-green rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </li>
        </ul>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <ul className="flex flex-col space-y-4 mt-4">
              <li>
                <Link to="/olio" className="block px-4 py-2 hover:bg-green hover:text-beige transition-colors">
                  Olio
                </Link>
              </li>
              <li>
                <Link to="/pasta" className="block px-4 py-2 hover:bg-green hover:text-beige transition-colors">
                  Pasta
                </Link>
              </li>
              <li>
                <Link to="/farina" className="block px-4 py-2 hover:bg-green hover:text-beige transition-colors">
                  Farina
                </Link>
              </li>
              <li><Link to="/about" className="block px-4 py-2 hover:bg-green hover:text-beige transition-colors">Chi siamo</Link></li>
              <li><Link to="/territorio" className="block px-4 py-2 hover:bg-green hover:text-beige transition-colors">Territorio</Link></li>
              <li><Link to="/contact" className="block px-4 py-2 hover:bg-green hover:text-beige transition-colors">Contatti</Link></li>
              <li>
                <button onClick={toggleCart} className="relative text-beige transition-colors bg-green px-5 py-3 rounded-lg">
                  <img src="images/carrello.png" alt="Carrello" className="w-auto h-6 text-beige" />
                  {cart.length > 0 && (
                    <span className="absolute top-1 right-1 bg-white text-green rounded-full text-xs w-4 h-4 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
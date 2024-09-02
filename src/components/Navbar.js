import React from 'react';
import { Link } from 'react-router-dom';


function Navbar({ cart = [], toggleCart }) { // Imposta un valore predefinito per cart
  return (
    <nav className=" text-parchment p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl ml-0 font-bold hover:text-green transition-colors">
          <img src="images/logo.png" alt="Logo" className="w-auto h-28" />
        </Link>
        <ul className="flex space-x-6 items-center">
          
          <li><Link to="/prodotti" className="hover:text-citron transition-colors">Prodotti</Link></li>
          <li><Link to="/olio" className="hover:text-citron transition-colors">Olio</Link></li>
          <li><Link to="/pasta" className="hover:text-citron transition-colors">Pasta</Link></li>
          <li><Link to="/about" className="hover:text-citron transition-colors">Chi siamo</Link></li>
          <li><Link to="/territorio" className="hover:text-citron transition-colors">Territorio</Link></li>
          <li><Link to="/contact" className="hover:text-citron transition-colors">Contatti</Link></li>
          <li>
            <button onClick={toggleCart} className="relative text-beige  transition-colors bg-green px-5 py-3 rounded-lg">
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
    </nav>
  );
}

export default Navbar;
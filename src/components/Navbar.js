import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-feldgrau text-parchment p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-citron transition-colors">
          La Collina del Sole
        </Link>
        <ul className="flex space-x-6 font-semibold">
          <li><Link to="/prodotti" className="hover:text-beige transition-colors  text-beige bg-green rounded-lg p-3"> Ordina Prodotti</Link></li>
          <li><Link to="/about" className="hover:text-citron transition-colors">Chi siamo</Link></li>
          <li><Link to="/contact" className="hover:text-citron transition-colors">Contatti</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
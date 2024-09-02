import React from 'react';

import { motion } from 'framer-motion';


function ProductCard({ prodotto, onDelete, onAddToCart }) {
  return (
    <motion.div 
      className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm h-[530px] flex flex-col justify-between"
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-feldgrau mb-2 h-16 overflow-hidden text-center">{prodotto.nome}</h3>
        <div className="relative h-72 mb-4">
          <img 
            src={prodotto.img} 
            alt={prodotto.nome} 
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <p className="text-feldgrau text-center">{prodotto.prezzo.toFixed(2)} €</p>
      </div>
      <div className="p-4 flex justify-center overflow-ellipsis">
        <button 
          onClick={() => onAddToCart(prodotto)}
          className="bg-green font-extrabold text-beige px-4 py-6 w-96 rounded justify-center flex items-center"
        >
        Aggiungi al Carrello 
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
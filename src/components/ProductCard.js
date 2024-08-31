import React from 'react';

function ProductCard({ prodotto, onDelete }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm h-[600px] flex flex-col">
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-2xl font-semibold text-feldgrau mb-2 h-16 overflow-hidden">{prodotto.nome}</h3>
        <div className="relative h-72 mb-4">
          <img 
            src={prodotto.img} 
            alt={prodotto.nome} 
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <p className="text-outer-space mb-4 h-24 overflow-y-auto">{prodotto.descrizione}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-feldgrau font-bold">{prodotto.prezzo.toFixed(2)} €</p>
          <button 
            onClick={onDelete}
            className="bg-citron hover:bg-feldgrau text-outer-space hover:text-parchment font-bold py-2 px-4 rounded transition-colors"
          >
            Rimuovi
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
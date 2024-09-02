import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';

// Mock database
let mockDB = [
  { id: 1, nome: "Il nostro Olio EVO - 1l", prezzo: 12.00, descrizione: "il nostro Olio umbro", img: "images/olio.jpg" },
  { id: 2, nome: "Il nostro Olio Evo - 5l", prezzo: 60.00, descrizione: "il nostro Olio umbro", img: "images/olio2.jpg" },
  { id: 3, nome: "Il nostro Olio EVO - 10l", prezzo: 120.00, descrizione: "il nostro Olio umbro", img: "images/olio3.jpg" },
];

function Olio({ addToCart }) {
  const [prodotti, setProdotti] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // In un'app reale, qui faresti una chiamata API
    setProdotti(mockDB);
  }, []);

  const aggiungiProdotto = (nuovoProdotto) => {
    const prodottoConId = { ...nuovoProdotto, id: Date.now() };
    mockDB.push(prodottoConId);
    setProdotti([...mockDB]);
    setShowForm(false);
  };

  const rimuoviProdotto = (id) => {
    mockDB = mockDB.filter(prodotto => prodotto.id !== id);
    setProdotti([...mockDB]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-feldgrau mb-8">Il Nostro Olio</h1>
      
      {showForm && <ProductForm onSubmit={aggiungiProdotto} onCancel={() => setShowForm(false)} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prodotti.map(prodotto => (
          <ProductCard 
            key={prodotto.id} 
            prodotto={prodotto} 
            onDelete={() => rimuoviProdotto(prodotto.id)}
            onAddToCart={() => addToCart(prodotto)}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Olio;
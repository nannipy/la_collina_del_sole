import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';

// Mock database
let mockDB = [
  { id: 7, nome: "La nostra farina di Grano Duro antico Timilia - 1kg", prezzo: 12.00, descrizione: "il nostro Olio umbro", img: "images/olio.jpg" },
  { id: 8, nome: "La nostra crusca di Grano Duro antico Timilia - 2kg", prezzo: 24.00, descrizione: "il nostro Olio umbro", img: "images/olio2.jpg" },
  { id: 9, nome: "La nostra crusca ", prezzo: 10.00, descrizione: "il nostro Olio umbro", img: "images/olio3.jpg" },
];

function Farina({ addToCart }) {
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
      <h1 className="text-4xl font-bold text-feldgrau mb-8">Le nostre Farine</h1>
      
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

export default Farina;
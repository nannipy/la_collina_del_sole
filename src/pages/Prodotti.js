import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';



// Mock database
let mockDB = [
  { id: 1, nome: "Spaghetti con farina di grano antico Timilia", prezzo: 3.00, descrizione: "I nostri spaghetti sono fatti con farina di grano antico Timilia che dà un sapore unico e delicato.", img: "images/fusilloni2.jpg" },
  { id: 2, nome: "Fusilloni con farina di grano antico Timilia", prezzo: 3.00, descrizione: "I nostri fusilloni sono fatti con farina di grano antico Timilia che dà un sapore unico e delicato.", img: "images/fusilloni.jpg" },
  { id: 3, nome: "Il nostro Olio Extra Vergine d'Oliva ", prezzo: 12.00, descrizione: "il nostro Olio umbro", img: "images/olio.jpg" },
  { id: 4, nome: "La nostra farina di grano antico Timilia", prezzo: 10.00, descrizione: "farina", img: "images/fusilloni4.jpg" },
  { id: 5, nome: "La nostra crusca di grano antico Timilia", prezzo: 10.00, descrizione: "crusca", img: "images/fusilloni.jpg" },
  { id: 6, nome: "I nostri ceci ", prezzo: 10.00, descrizione: "ceci", img: "images/fusilloni.jpg" },
];

function Prodotti({ addToCart }) {
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
      <h1 className="text-4xl font-bold text-feldgrau mb-8">I Nostri Prodotti</h1>
      
      {showForm && <ProductForm onSubmit={aggiungiProdotto} onCancel={() => setShowForm(false)} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default Prodotti;
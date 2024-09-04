import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';



function Checkout({ cart, updateQuantity, removeFromCart }) {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    indirizzo: '',
    citta: '',
    cap: '',
    paese: 'Italia',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const totale = cart.reduce((acc, item) => acc + item.prezzo * item.quantity, 0);

  return (
    <motion.div 
      className="min-h-screen bg-beige text-feldgrau p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="mb-4 bg-white p-2 rounded-lg shadow-md border-2 border-green">
                    <h3 className="font-semibold text-black text-lg mb-2">{item.nome}</h3>
                    <div className="flex items-center">
                      <img src={item.img} alt={item.nome} className="w-20 h-auto object-cover rounded-lg border-2 border-green mr-4" />
                      <div className="flex-1">
                        <p className="text-sm text-outer-space">{item.prezzo ? `${item.prezzo.toFixed(2)} €` : 'Prezzo non disponibile'}</p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-green text-beige p-1 rounded-l"
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>
                          <span className="bg-white px-2 py-1 border-t border-b border-green">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-green text-beige p-1 rounded-r"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-2 bg-red-600 rounded-lg p-1 mt-7 text-white hover:text-red-700"
                    >
                      <FaTimes size={25} />
                    </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Informazioni di Spedizione</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="cognome"
                placeholder="Cognome"
                value={formData.cognome}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="indirizzo"
                placeholder="Indirizzo"
                value={formData.indirizzo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="citta"
                placeholder="Città"
                value={formData.citta}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="cap"
                placeholder="CAP"
                value={formData.cap}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <select
                name="paese"
                value={formData.paese}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="Italia">Italia</option>
                <option value="Francia">Francia</option>
                <option value="Germania">Germania</option>
                {/* Aggiungi altri paesi se necessario */}
              </select>
            </div>
            <div>
            <h2 className="text-2xl font-semibold mb-4 pt-7">Riepilogo Ordine</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.nome} x {item.quantity}</span>
                  <span>€{(item.prezzo * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Totale</span>
                  <span>€{totale.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <button
              type="submit"
              className="w-full bg-green text-white font-bold py-3 px-4 rounded hover:bg-feldgrau transition duration-300"
            >
              Completa l'Ordine
            </button>
          </div>
          
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Checkout;

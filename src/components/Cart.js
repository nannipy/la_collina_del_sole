import React from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

function Cart({ cart, updateQuantity, removeFromCart }) {
  const totalPrice = cart.reduce((total, item) => total + (item.prezzo || 0) * item.quantity, 0);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-feldgrau mb-4">Carrello</h2>
      {cart.length === 0 ? (
        <p className="text-outer-space">Il carrello è vuoto</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4 bg-white p-2 rounded">
              <div>
                <h3 className="font-semibold text-feldgrau">{item.nome}</h3>
                <p className="text-sm text-outer-space">{item.prezzo ? `${item.prezzo.toFixed(2)} €` : 'Prezzo non disponibile'}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-feldgrau text-parchment p-1 rounded-l"
                  disabled={item.quantity === 1}
                >
                  <FaMinus />
                </button>
                <span className="bg-white px-2 py-1">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-feldgrau text-parchment p-1 rounded-r"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right">
            <p className="text-lg font-bold text-feldgrau">Totale: {totalPrice.toFixed(2)} €</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
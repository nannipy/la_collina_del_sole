import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

function CartDrawer({ cart, updateQuantity, removeFromCart, isOpen, toggleCart }) {
  const totalPrice = cart.reduce((total, item) => total + (item.prezzo || 0) * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 , zIndex: 1000}}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-4 flex flex-col justify-between"
        >
          <div className='overflow-y-auto'>
            <div className="flex justify-between items-center mb-4 ">
              <h2 className="text-2xl font-bold text-feldgrau">Carrello</h2>
              <button onClick={toggleCart} className="text-feldgrau">
                <FaTimes size={24} />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-outer-space">Il carrello è vuoto</p>
            ) : (
              <>
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
              </>
            )}
          </div>
          {cart.length > 0 && (
            <div className="mt-auto text-center">
              <p className="text-2xl font-bold text-feldgrau mb-4">Totale: {totalPrice.toFixed(2)} €</p>
              <button className="bg-green text-beige py-3 px-6 rounded text-lg hover:bg-emerald-700 transition-colors">
                Procedi al Checkout
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="flex flex-col md:flex-row max-w-7xl bg-parchment">
        <div className="flex-1 relative mb-8 md:mb-0">
          <div className="relative w-full h-96 md:h-[500px]">
            <img 
              src="images/giardino.jpg"
              alt="Casetta" 
              className="absolute bottom-0 left-0 w-5/6 h-5/6 object-cover rounded-lg shadow-lg z-10"
            />
            <img 
              src="images/casetta.jpg"
              alt="Chiesa" 
              className="absolute top-0 right-0 w-5/6 h-5/6 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-extrabold text-feldgrau mb-6">LA MAGIA DEL NOSTRO PRODOTTO</h1>
          <p className="text-outer-space mb-6 leading-relaxed font-semibold">
            Selezionato a mano dai nostri esperti; lavorato in forni tradizionali; invecchiato in botti di quercia; e consegnato direttamente a te e alla tua famiglia. Valorizziamo ogni fase del nostro processo e rispettiamo coloro che lo rendono possibile, mantenendo il nostro impegno verso la terra. Il risultato è il nostro prodotto premiato, uno dei più raffinati e piacevoli al mondo.
          </p>
          <Link to="/prodotti" className="inline-block font-extrabold text-xl bg-green text-beige py-3 px-6 rounded hover:text-beige transition-colors">
            SCOPRI I NOSTRI PRODOTTI →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';

function Home() {
  return (
    <main className="flex flex-col items-center p-5">
      <div className="relative w-full md:h-[500px] mb-8">
        <img 
          src="images/ulivitramonto.jpg"
          alt="Tramonto" 
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="max-w-4xl text-center mb-8">
        
        <Link to="/products" className="inline-block font-extrabold text-xl bg-green text-beige py-3 px-6 rounded hover:text-beige transition-colors">
          SCOPRI I NOSTRI PRODOTTI →
        </Link>
      </div>
     
      <PhotoGallery /> {/* Aggiungi la galleria di foto qui */}
    </main>
    
  );
}

export default Home;
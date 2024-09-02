import React from 'react';
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';

function Home() {
  return (
    <div className="flex flex-col items-center  p-5">
      <div className="relative w-full  md:h-[500px]  ">
            <img 
              src="images/trattore.jpg"
              alt="Chiesa" 
              className="relative h-full rounded-lg  shadow-lg mx-80"
            />
        </div>
        <div className="flex-1 relative mb-8 md:mb-0 md:h-[500px]"> 
        <div className="flex-1 p-8">
          <Link to="/prodotti" className=" inline-block text-center font-extrabold text-xl bg-green text-beige py-3 px-6 rounded hover:text-beige transition-colors">
            SCOPRI I NOSTRI PRODOTTI →
          </Link>
        </div>
      </div>
      <PhotoGallery /> 
    </div>
  );
}

export default Home;
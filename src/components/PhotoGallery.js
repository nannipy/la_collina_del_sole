import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  { src: 'images/tramontocampo.jpg', alt: 'tramontocampo' },
  { src: 'images/ulivipapa.jpg', alt: 'ulivi papa' },
  { src: 'images/vigna_sett.jpg', alt: 'Vigna' },
  { src: 'images/fornole.jpg', alt: 'Chiesa' },
  

  // Aggiungi altre foto qui
];

const PhotoGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-feldgrau mb-8 text-center">Galleria</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg "
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
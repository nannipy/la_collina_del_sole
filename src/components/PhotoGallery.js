import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const photos = [
  { src: 'images/tramonto2.jpg', alt: 'Giardino' },
  { src: 'images/ulivi_papa.jpg', alt: 'Casetta' },
  { src: 'images/vigna_sett.jpg', alt: 'Vigna' },
  { src: 'images/fornole.jpg', alt: 'Chiesa' },
  // Aggiungi altre foto qui
];

const PhotoGallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-feldgrau mb-8 text-center">Galleria</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={photos[photoIndex].src}
          nextSrc={photos[(photoIndex + 1) % photos.length].src}
          prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % photos.length)
          }
          imageTitle={photos[photoIndex].alt}
          imageCaption={photos[photoIndex].alt}
        />
      )}
    </div>
  );
};

export default PhotoGallery;
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-footer-dark text-beige ">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-beige">Agricola Pernazza</h3>
            <p className="text-sm">Selezionato a mano, lavorato con cura e consegnato direttamente a te. Valorizziamo ogni fase del nostro processo.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-beige">Contatti</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-beige" />
                <a href="tel:+39 3341287766" className="hover:text-beige transition-colors">+39 334 128 7766</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-beige" />
                <a href="mailto:laagricolapernazza@gmail.com" className="hover:text-beige transition-colors">agricolapernazza@gmail.com</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-beige">Seguici</h4>
            <a 
              href="https://instagram.com/laagricolapernazza" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-beige hover:text-beige transition-colors"
            >
              <FaInstagram className="mr-2" />
              @laagricolapernazza
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Il Nostro Prodotto. Tutti i diritti riservati.</p>
          <p className="mt-2">
            <a href="/privacy-policy" className="hover:text-beige transition-colors">Privacy Policy</a>
            {' '}&bull;{' '}
            <a href="/termini-e-condizioni" className="hover:text-beige transition-colors">Termini e Condizioni</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

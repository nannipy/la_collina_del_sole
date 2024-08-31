import React from 'react';

function About() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-black text-extrabold mb-6">Chi siamo</h1>
      <p className="text-xl text-black text-extrabold max-w-2xl mx-auto">
        Siamo un team appassionato dedicato a creare soluzioni innovative e sostenibili. 
        La nostra missione è migliorare la vita delle persone rispettando l'ambiente.
      </p>
      <img src="images/casetta.jpg" alt="Chi siamo" className="w-1/2 mx-auto mt-8 rounded-lg" />
    </div>
  );
}

export default About;

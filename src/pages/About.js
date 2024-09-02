import React from 'react';

function About() {
  return (
    <div className="text-center p-5">
      <h1 className="text-4xl font-bold text-black text-extrabold mb-2">Chi siamo</h1>
      <p className="text-xl text-black text-extrabold max-w-2xl mx-auto">
        Siamo una famiglia che si diverte a produrre olio, pasta e farina di grano duro antico Timilia.
      </p>
      <img src="images/casetta.jpg" alt="Chi siamo" className="w-1/2 mx-auto mt-2 rounded-lg" />
    </div>
  );
}

export default About;

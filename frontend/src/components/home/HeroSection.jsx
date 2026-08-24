import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-slate-900 text-white">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-blue-900 opacity-80">
         {/* You can replace this with an actual background image using standard Tailwind bg-cover utility */}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
        <div className="inline-block bg-blue-700 text-white font-bold px-4 py-1.5 rounded-full text-sm mb-6 shadow-sm">
          28+ Ans d'expérience
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl">
          Une éducation d'excellence pour l'avenir de votre enfant
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl">
          Découvrez un environnement stimulant, bienveillant et innovant, 
          qui accompagne chaque élève vers la réussite scolaire et personnelle.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/ecole" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg">
            Découvrir notre école
          </Link>
          <Link to="/contact" className="bg-white hover:bg-gray-100 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors shadow-lg">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

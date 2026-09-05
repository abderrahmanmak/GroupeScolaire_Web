import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-12 font-sans border-t-4 border-[#199347]">
      <div className="max-w-[1600px] mx-auto px-[4vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo / About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-sans text-white">Groupe Scolaire Les Crêtes</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Fondé en 2009, notre établissement s'engage au quotidien à accompagner chaque élève vers la réussite, avec pour mission de façonner les citoyens élites de demain.
            </p>
          </div>
          
          {/* Empty or Quick Links */}
          <div></div>

          {/* Contactez-nous */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 font-sans text-white">Contactez-nous</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <span>05 22 81 78 91</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">✉️</span>
                <span>groupe.lescretes@yahoo.fr</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg mt-1">📍</span>
                <span>573, Bd. Modibo Keita, quartier les crêtes, Casablanca</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© 2026 Groupe Scolaire Les Crêtes. Tous droits réservés.</span>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#199347] transition-colors">FB</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#199347] transition-colors">IG</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#199347] transition-colors">YT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

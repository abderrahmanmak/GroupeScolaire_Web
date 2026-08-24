import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-display text-blue-400">Groupe Scolaire Les Crêtes</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Le Groupe Scolaire Les Crêtes est un pionnier de l'enseignement à Casablanca, doté d'une expérience de plus de Vingt ans, desservant la maternelle, le primaire, le collège et le lycée.
            </p>
          </div>
          
          {/* Col 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display text-white">Liens rapides</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Accueil</Link></li>
              <li><Link to="/notre-ecole" className="hover:text-blue-400 transition-colors">Notre école</Link></li>
              <li><Link to="/nos-cycles" className="hover:text-blue-400 transition-colors">Nos cycles</Link></li>
              <li><Link to="/vie-etudiante" className="hover:text-blue-400 transition-colors">Vie étudiante</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/visite" className="hover:text-blue-400 transition-colors">Visiter l'école (Rentrée 2026)</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display text-white">Contactez-nous</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <span>N° 364 Bd Ouad Oum Rabii, El Oulfa, Casablanca</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">📞</span>
                <div className="space-y-1">
                  <div>Primaire: 05 22 90 82 38</div>
                  <div>Collège: 05 22 89 52 40</div>
                  <div>Lycée: 05 22 93 04 08</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">✉️</span>
                <span>info@gslescretes.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-display text-white">Réseaux sociaux</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors shadow-sm">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition-colors shadow-sm">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-500 transition-colors shadow-sm">YT</a>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2 text-white">Heures d'ouverture</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Lundi-Vendredi: 8h-18h</li>
                <li>Samedi: 8h-13h</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          © 2026 Groupe Scolaire Les Crêtes. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

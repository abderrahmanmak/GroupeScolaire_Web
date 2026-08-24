import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const cycles = [
  {
    name: "Maternelle",
    desc: "Un environnement ludique et bienveillant pour les premiers apprentissages essentiels.",
    color: "bg-pink-100 text-pink-700"
  },
  {
    name: "Primaire",
    desc: "L'acquisition des savoirs fondamentaux avec des méthodes pédagogiques interactives.",
    color: "bg-green-100 text-green-700"
  },
  {
    name: "Collège",
    desc: "Développement de l'autonomie, de l'esprit critique et préparation aux premiers examens.",
    color: "bg-blue-100 text-blue-700"
  },
  {
    name: "Lycée",
    desc: "Accompagnement vers l'excellence, l'orientation supérieure et le baccalauréat.",
    color: "bg-purple-100 text-purple-700"
  }
];

const CyclesPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">De la maternelle au lycée</h2>
            <div className="w-24 h-1 bg-blue-700 rounded-full"></div>
          </div>
          <Link to="/cycles" className="hidden md:flex items-center text-blue-700 font-semibold hover:text-blue-800 transition-colors">
            Voir tous les cycles <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cycles.map((cycle, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 w-max ${cycle.color}`}>
                {cycle.name}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{cycle.name}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{cycle.desc}</p>
              <Link to={`/cycles#${cycle.name.toLowerCase()}`} className="text-blue-600 font-medium hover:text-blue-800 flex items-center mt-auto">
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/cycles" className="inline-flex items-center justify-center text-blue-700 font-semibold hover:text-blue-800 transition-colors bg-white px-6 py-3 rounded-lg shadow-sm w-full">
            Voir tous les cycles <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CyclesPreview;

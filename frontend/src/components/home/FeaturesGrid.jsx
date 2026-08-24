import React from 'react';
import { BookOpen, Globe2, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    icon: <BookOpen size={32} className="text-blue-700 mb-4" />,
    title: "Excellence académique",
    description: "Des programmes rigoureux et innovants pour garantir un niveau de compétence exceptionnel."
  },
  {
    icon: <Globe2 size={32} className="text-blue-700 mb-4" />,
    title: "Enseignement multilingue",
    description: "Une maîtrise renforcée des langues pour ouvrir nos élèves sur le monde."
  },
  {
    icon: <Lightbulb size={32} className="text-blue-700 mb-4" />,
    title: "Cadre éducatif stimulant",
    description: "Des infrastructures modernes favorisant la créativité et le bien-être."
  },
  {
    icon: <Users size={32} className="text-blue-700 mb-4" />,
    title: "Accompagnement personnalisé",
    description: "Un suivi individuel pour valoriser le potentiel de chaque enfant."
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi choisir le Groupe Scolaire ?</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/lescretespicsvids/sections/college/notreecole.jpg" 
          alt="Élèves en classe" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="relative z-20 text-center px-[4vw]">
          <h1 className="font-sans font-bold text-5xl md:text-7xl text-white tracking-tight mb-4">
            Notre École
          </h1>
          <p className="font-sans text-xl md:text-2xl text-orange-500 font-medium">
            L'excellence éducative au cœur de Casablanca
          </p>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-[4vw] py-24 space-y-32">
        
        {/* Mot de la Fondatrice / Du Directeur */}
        <section>
          <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-12 border-b border-[#199347] pb-4 inline-block">
            Mot du Directeur
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center bg-gray-50 p-10 rounded-[2rem] border border-gray-100 shadow-sm relative">
            <div className="w-full md:w-1/3 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop" alt="Directeur" className="w-full h-auto aspect-square object-cover rounded-[2rem] shadow-md border-4 border-white" />
            </div>
            <div className="w-full md:w-2/3">
                <span className="text-[#199347] text-6xl absolute top-4 left-4 md:left-[35%] font-serif opacity-30 hidden md:block">"</span>
                <p className="font-serif text-2xl text-gray-800 leading-relaxed relative z-10 italic">
                  Chers parents, chers élèves,<br/><br/>
                  Le Groupe Scolaire Les Crêtes n'est pas seulement une école, c'est une grande famille dédiée à l'excellence. Depuis notre création, notre philosophie repose sur un équilibre parfait entre l'exigence académique et l'épanouissement personnel. Nous croyons fermement que chaque enfant possède un potentiel unique qui ne demande qu'à être révélé par la bienveillance et l'encouragement.
                </p>
                <p className="mt-8 font-sans font-bold text-gray-900 text-lg">
                  - Directeur Général du Groupe Scolaire Les Crêtes
                </p>
            </div>
          </div>
        </section>

        {/* Chiffres Clés */}
        <section className="bg-[#199347] rounded-[3rem] py-16 px-8 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="font-sans font-bold text-6xl md:text-7xl">1200+</div>
              <div className="font-serif text-2xl">Élèves</div>
            </div>
            <div className="space-y-4">
              <div className="font-sans font-bold text-6xl md:text-7xl">50+</div>
              <div className="font-serif text-2xl">Salles de classe optimisées</div>
            </div>
            <div className="space-y-4">
              <div className="font-sans font-bold text-6xl md:text-7xl">100%</div>
              <div className="font-serif text-2xl">Taux de réussite aux examens</div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs Fondamentales */}
        <section>
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 border-b border-[#199347] pb-4 inline-block">
              Nos Valeurs Fondamentales
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-100 p-10 rounded-[2rem] text-center shadow-sm hover:shadow-xl transition-shadow hover:-translate-y-2 duration-300">
              <div className="text-[#199347] text-5xl mb-6">🏆</div>
              <h3 className="font-sans font-bold text-2xl text-gray-900 mb-4">Excellence</h3>
              <p className="font-serif text-lg text-gray-600">Nous visons le plus haut niveau d'accomplissement académique. Le dépassement de soi est au cœur de notre pédagogie.</p>
            </div>
            <div className="bg-white border border-gray-100 p-10 rounded-[2rem] text-center shadow-sm hover:shadow-xl transition-shadow hover:-translate-y-2 duration-300">
              <div className="text-[#199347] text-5xl mb-6">❤️</div>
              <h3 className="font-sans font-bold text-2xl text-gray-900 mb-4">Bienveillance</h3>
              <p className="font-serif text-lg text-gray-600">Un environnement sécurisant et encourageant. Chaque élève est respecté, écouté et accompagné avec empathie.</p>
            </div>
            <div className="bg-white border border-gray-100 p-10 rounded-[2rem] text-center shadow-sm hover:shadow-xl transition-shadow hover:-translate-y-2 duration-300">
              <div className="text-[#199347] text-5xl mb-6">💡</div>
              <h3 className="font-sans font-bold text-2xl text-gray-900 mb-4">Innovation</h3>
              <p className="font-serif text-lg text-gray-600">Nous adoptons les meilleures pratiques éducatives mondiales. La technologie et la créativité enrichissent notre enseignement.</p>
            </div>
            <div className="bg-white border border-gray-100 p-10 rounded-[2rem] text-center shadow-sm hover:shadow-xl transition-shadow hover:-translate-y-2 duration-300">
              <div className="text-[#199347] text-5xl mb-6">🌍</div>
              <h3 className="font-sans font-bold text-2xl text-gray-900 mb-4">Citoyenneté</h3>
              <p className="font-serif text-lg text-gray-600">Nous formons des leaders responsables et éthiques. Nos élèves sont conscients de leur rôle dans la société.</p>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="bg-gray-50 py-20 px-10 rounded-[3rem] border border-gray-100">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 border-b border-[#199347] pb-4 inline-block">
              Témoignages
            </h2>
            <p className="font-serif text-xl text-gray-600">La réussite de nos anciens élèves est notre plus grande fierté.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm relative">
              <span className="text-[#199347] text-6xl absolute top-6 left-6 font-serif opacity-20">"</span>
              <p className="font-serif text-xl text-gray-700 leading-relaxed mb-6 relative z-10 pt-8">
                Les années passées aux Crêtes m'ont donné une rigueur de travail exceptionnelle et une confiance en moi inébranlable. Aujourd'hui en classe préparatoire aux grandes écoles d'ingénieurs, je mesure l'importance des bases solides que j'y ai acquises.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&fit=crop" alt="Alumni" />
                </div>
                <div>
                  <div className="font-sans font-bold text-gray-900">Youssef B.</div>
                  <div className="font-serif text-sm text-gray-500">Promotion 2024, Étudiant en CPGE</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm relative">
              <span className="text-[#199347] text-6xl absolute top-6 left-6 font-serif opacity-20">"</span>
              <p className="font-serif text-xl text-gray-700 leading-relaxed mb-6 relative z-10 pt-8">
                Au-delà de l'excellence académique, c'est l'encadrement humain et bienveillant qui m'a le plus marquée. Les professeurs m'ont poussée à viser loin, et c'est grâce à eux que j'ai pu intégrer l'université de mes rêves en médecine.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" alt="Alumni" />
                </div>
                <div>
                  <div className="font-sans font-bold text-gray-900">Salma T.</div>
                  <div className="font-serif text-sm text-gray-500">Promotion 2023, Étudiante en Médecine</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;

import React from 'react';
import activityPics from "../data/activitypics.json";

function StudentLife() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80 z-10"></div>
        {/* Using a placeholder for basketball net as requested */}
        <img 
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1600&h=900&fit=crop" 
          alt="Vie Étudiante" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="relative z-20 text-center px-[4vw]">
          <h1 className="font-sans font-bold text-5xl md:text-7xl text-white tracking-tight mb-4">
            Vie Étudiante
          </h1>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-[4vw] py-24 space-y-32">
        
        {/* Restez connectés (Telegram) Card */}
        <section>
          <div className="bg-[#f0f4f8] rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="font-sans text-4xl font-bold text-gray-900">Restez connectés (Espace Scolaire)</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="text-2xl">🚌</span> 
                  <span className="font-serif text-xl text-gray-800">Transport scolaire</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-2xl">📅</span> 
                  <span className="font-serif text-xl text-gray-800">Emploi du temps</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-2xl">✅</span> 
                  <span className="font-serif text-xl text-gray-800">Absences</span>
                </li>
              </ul>
              <div className="inline-block bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
                <span className="font-sans font-bold text-[#199347]">Nouveau :</span> Parler à un agent propulsé par l'IA
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="/espace-scolaire" className="px-8 py-4 bg-[#199347] text-white font-bold rounded-full hover:bg-green-800 transition-colors">
                  Telegram Maternelle Primaire
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center text-8xl shadow-lg border-4 border-[#e2e8f0]">
                📱
              </div>
            </div>
          </div>
        </section>

        {/* Activités parascolaires Grid */}
        <section>
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 border-b border-[#199347] pb-4 inline-block">
              Activités parascolaires
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-100 p-10 rounded-3xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">🎨</div>
              <h3 className="font-sans font-bold text-xl text-gray-900">Clubs artistiques</h3>
            </div>
            <div className="bg-white border border-gray-100 p-10 rounded-3xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">🔬</div>
              <h3 className="font-sans font-bold text-xl text-gray-900">Clubs scientifiques</h3>
            </div>
            <div className="bg-white border border-gray-100 p-10 rounded-3xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">⚽</div>
              <h3 className="font-sans font-bold text-xl text-gray-900">Activités sportives</h3>
            </div>
            <div className="bg-white border border-gray-100 p-10 rounded-3xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">🚌</div>
              <h3 className="font-sans font-bold text-xl text-gray-900">Sorties éducatives</h3>
            </div>
          </div>
        </section>

        {/* Enseignement à distance */}
        <section>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-sans text-3xl font-bold text-gray-900">Enseignement à distance</h2>
            <p className="font-serif text-2xl text-gray-700 leading-relaxed">
              Pour assurer une continuité pédagogique numérique de pointe, nous utilisons <span className="font-bold text-[#199347]">Google Meet</span> pour les classes virtuelles interactives et <span className="font-bold text-[#199347]">Google Classroom</span> pour la gestion des cours et des devoirs.
            </p>
          </div>
        </section>

        {/* Événements scolaires */}
        <section>
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 border-b border-[#199347] pb-4 inline-block">
              Événements scolaires
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-100 p-8 rounded-3xl text-center shadow-sm">
              <span className="block font-sans font-bold text-[#199347] uppercase tracking-wider mb-4">Septembre</span>
              <h3 className="font-serif text-2xl text-gray-900">Journée portes ouvertes</h3>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-3xl text-center shadow-sm">
              <span className="block font-sans font-bold text-[#199347] uppercase tracking-wider mb-4">Mars</span>
              <h3 className="font-serif text-2xl text-gray-900">Journées culturelles</h3>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-3xl text-center shadow-sm">
              <span className="block font-sans font-bold text-[#199347] uppercase tracking-wider mb-4">Juin</span>
              <h3 className="font-serif text-2xl text-gray-900">Fête de fin d'année</h3>
            </div>
          </div>
        </section>

        {/* Nos activités (Dynamic Grid) */}
        <section id="activites-grid" className="pt-10 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 border-b border-[#199347] pb-4 inline-block">
              Nos activités
            </h2>
          </div>
          <div 
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
          >
            {activityPics.map((pic, index) => (
              <div key={index} className="overflow-hidden rounded-2xl aspect-square">
                <img
                  src={`/lescretespicsvids/sections/${pic}`}
                  alt={`Activité ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default StudentLife;

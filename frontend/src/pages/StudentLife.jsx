import React from 'react';

const heroImage = "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=800&fit=crop";

function StudentLife() {
  return (
    <div className="min-h-screen bg-white pb-24">
      <section className="relative mx-auto max-w-7xl px-6 pt-12 pb-16">
        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5 mb-16">
          <img src={heroImage} alt="Vie Étudiante" className="w-full h-[400px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[0.9]">
              Vie <span className="font-serif font-normal italic">Étudiante</span>
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 space-y-24">
        
        {/* Telegram Card */}
        <section>
          <div className="bg-blue-50 rounded-[2rem] p-8 md:p-12 border border-blue-100 flex flex-col lg:flex-row gap-12 items-center shadow-sm">
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold mb-6 text-blue-900">Restez connectés (Telegram)</h2>
              <ul className="space-y-4 mb-8 text-blue-800 text-lg">
                <li className="flex items-center gap-3"><span>🚌</span> Transport scolaire</li>
                <li className="flex items-center gap-3"><span>📅</span> Emploi du temps (Google Classroom)</li>
                <li className="flex items-center gap-3"><span>✅</span> Absences</li>
                <li className="flex items-center gap-3 font-bold bg-white p-3 md:p-4 rounded-xl shadow-sm w-max border border-blue-200 text-sm md:text-base mt-2">
                  <span>🤖</span> Nouveau : Parler à un agent propulsé par l'IA
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="px-6 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors shadow-md text-sm md:text-base">
                  Telegram Maternelle Primaire
                </a>
                <a href="#" className="px-6 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors border border-blue-200 shadow-sm text-sm md:text-base">
                  Telegram Collège Lycée
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center text-7xl shadow-xl shadow-blue-300 animate-bounce">
                📱
              </div>
            </div>
          </div>
        </section>

        {/* Activités parascolaires */}
        <section>
          <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-12 text-center">Activités parascolaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ActivityCard title="Clubs artistiques" icon="🎨" />
            <ActivityCard title="Clubs scientifiques" icon="🔬" />
            <ActivityCard title="Activités sportives" icon="⚽" />
            <ActivityCard title="Sorties éducatives" icon="🚌" />
          </div>
        </section>

        {/* Enseignement à distance */}
        <section className="bg-gray-50 rounded-[2rem] p-10 md:p-16 text-center border border-gray-100 shadow-sm">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 mb-6">Enseignement à distance</h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Afin d'assurer la continuité pédagogique, nous intégrons des outils modernes tels que <span className="font-bold text-blue-600">Google Meet</span> et <span className="font-bold text-green-600">Google Classroom</span> dans notre cursus.
          </p>
        </section>

        {/* Événements scolaires */}
        <section>
          <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-16 text-center">Événements scolaires</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 relative max-w-5xl mx-auto z-10">
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-gray-200 -z-10"></div>
            <TimelineItem month="Septembre" title="Journée portes ouvertes" />
            <TimelineItem month="Mars" title="Journées culturelles" />
            <TimelineItem month="Juin" title="Fête de fin d'année" />
          </div>
        </section>
      </div>
    </div>
  );
}

function ActivityCard({ title, icon }) {
  return (
    <div className="group p-10 rounded-3xl bg-white border border-gray-200 text-gray-900 shadow-sm hover:shadow-xl transition-all text-center hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-1">
      <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-bold text-xl transition-colors">{title}</h3>
    </div>
  );
}

function TimelineItem({ month, title }) {
  return (
    <div className="group flex flex-col items-center bg-white p-8 rounded-3xl border border-gray-200 text-gray-900 w-full md:w-72 text-center transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-xl hover:-translate-y-2">
      <span className="px-5 py-2 rounded-full text-sm uppercase tracking-widest font-bold mb-6 bg-gray-100 text-gray-600 group-hover:bg-blue-500/30 group-hover:text-white transition-colors">
        {month}
      </span>
      <h4 className="font-display font-bold text-2xl transition-colors">{title}</h4>
    </div>
  );
}

export default StudentLife;

import React from 'react';

const cyclesHero = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop";

function Cycles() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative mx-auto max-w-7xl px-6 pt-12 pb-24">
        <div className="grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 animate-reveal">
             <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5 mb-16">
              <img src={cyclesHero} alt="Nos cycles" className="w-full h-[300px] md:h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16">
                <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold text-white text-balance tracking-tighter leading-[0.9]">
                  Nos <span className="font-serif font-normal italic">Cycles</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-20 animate-reveal-delay-1">
          <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-serif italic">
            Au Groupe Scolaire Les Crêtes, nous offrons un parcours éducatif complet et cohérent de la maternelle au lycée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-reveal-delay-1">
          <CycleDetailCard
            title="Maternelle"
            age="3-5 ans"
            description="Arabe/Français, pré-lecture, socio-émotionnel."
          />
          <CycleDetailCard
            title="Primaire"
            age="6-11 ans"
            description="Trilingue, STEM, Initiation IA (Gemini, Canva, Google)."
          />
          <CycleDetailCard
            title="Collège"
            age="12-14 ans"
            description="Autonomie, enseignement approfondi, examens nationaux."
          />
          <CycleDetailCard
            title="Lycée"
            age="15-17 ans"
            description="Options (Sc. Maths, Sc. Physiques, SVT, Lettres), préparation post-bac."
          />
        </div>
      </section>
    </div>
  );
}

function CycleDetailCard({ title, age, description }) {
  return (
    <div className="group rounded-[2rem] border border-gray-200 bg-white text-gray-900 p-8 md:p-10 transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 flex flex-col">
      <div className="flex justify-between items-start mb-8">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-gray-100 text-gray-800 group-hover:bg-blue-500/30 group-hover:text-white transition-colors">
          {age}
        </span>
      </div>
      <h3 className="mb-4 font-display text-4xl font-bold">{title}</h3>
      <p className="text-xl leading-relaxed text-gray-600 group-hover:text-blue-50 transition-colors">
        {description}
      </p>
    </div>
  );
}

export default Cycles;

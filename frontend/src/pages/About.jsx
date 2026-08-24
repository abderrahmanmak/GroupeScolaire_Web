import React from 'react';

const schoolBuilding = "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&h=800&fit=crop";

function About() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative mx-auto max-w-7xl px-6 pt-12 pb-24">
        <div className="grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 animate-reveal">
             <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5 mb-16">
              <img src={schoolBuilding} alt="Notre établissement" className="w-full h-[400px] md:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16">
                <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[0.9]">
                  Notre <span className="font-serif font-normal italic">École</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-24 animate-reveal-delay-1">
          <span className="mb-6 block font-mono text-sm uppercase tracking-[0.2em] text-blue-500 font-bold">Mission</span>
          <p className="font-serif text-2xl md:text-3xl italic text-gray-800 leading-relaxed">
            "Fondé en 1997... Notre mission est de former des citoyens responsables, créatifs et ouverts sur le monde..."
          </p>
        </div>

        <div className="mb-24">
          <div className="mb-12 text-center">
            <span className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-blue-400 font-bold">Nos Valeurs</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900">Les Piliers de Notre Établissement</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <ValueCard title="Excellence" />
            <ValueCard title="Respect" />
            <ValueCard title="Innovation" />
            <ValueCard title="Responsabilité" />
            <ValueCard title="Ouverture" />
            <ValueCard title="Intégrité" />
          </div>
        </div>

        <div>
          <div className="mb-12 text-center">
            <span className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-blue-400 font-bold">Nos Installations</span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900">Un environnement propice</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FacilityCard icon="🍽️" title="Restauration" />
            <FacilityCard icon="🏫" title="Salles de classe modernes" />
            <FacilityCard icon="🔬" title="Laboratoires scientifiques" />
            <FacilityCard icon="📚" title="Bibliothèque" />
            <FacilityCard icon="⚽" title="Espaces sportifs" />
            <FacilityCard icon="🌳" title="Aires de récréation sécurisées" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ title }) {
  return (
    <div className="group p-8 md:p-10 rounded-3xl border border-gray-200 bg-white text-gray-900 text-center transition-all hover:shadow-xl hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:border-blue-600">
      <h3 className="font-display text-2xl font-bold">{title}</h3>
    </div>
  );
}

function FacilityCard({ icon, title }) {
  return (
    <div className="group flex items-center gap-6 p-6 md:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600">
      <div className="w-16 h-16 rounded-full bg-blue-50 group-hover:bg-blue-500/20 flex items-center justify-center text-3xl transition-colors">{icon}</div>
      <h4 className="font-bold text-gray-800 group-hover:text-white text-xl transition-colors">{title}</h4>
    </div>
  );
}

export default About;

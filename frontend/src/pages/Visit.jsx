import React from 'react';

function Visit() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24 pt-16">
      <div className="mx-auto max-w-7xl px-6 space-y-24">
        
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
            Rentrée 2026-2027 · Visite privée sur RDV
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            L'école qui accompagnera votre enfant pendant les <span className="text-blue-600 italic">15 prochaines années.</span>
          </h1>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="29 ans d'engagement" icon="⭐" />
          <StatCard title="4 campus dédiés" icon="🏫" />
          <StatCard title="Maternelle → Bac sans rupture" icon="📈" />
          <StatCard title="4 programmes" subtitle="(Neurogames, Lumi, IA, Soft Skills)" icon="🧠" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Formulaire */}
          <div className="lg:col-span-7">
            <section className="bg-white rounded-[2rem] shadow-xl ring-1 ring-black/5 p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3">Réservez votre visite privée</h2>
              <p className="text-gray-500 mb-10 text-lg font-medium">Aucun engagement, aucun frais.</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Niveau visé</label>
                  <select className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none cursor-pointer text-gray-800 font-medium">
                    <option value="">Sélectionnez un niveau</option>
                    <option value="maternelle">Maternelle</option>
                    <option value="primaire">Primaire</option>
                    <option value="college">Collège</option>
                    <option value="lycee">Lycée</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nom complet du parent</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all text-gray-800" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Numéro WhatsApp</label>
                  <input type="tel" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all text-gray-800" placeholder="+212 ..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all text-gray-800" placeholder="votre@email.com" />
                </div>
                <button type="button" className="w-full py-5 mt-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-lg text-lg">
                  Réserver ma visite
                </button>
              </form>
            </section>
          </div>

          {/* Contenu Droite */}
          <div className="lg:col-span-5 space-y-12">
            <section className="bg-blue-50 rounded-3xl p-10 border border-blue-100 shadow-sm">
              <h3 className="font-display text-3xl font-bold text-blue-900 mb-6 leading-tight">Une école où votre enfant peut rester 15 ans</h3>
              <p className="text-blue-800 text-lg leading-relaxed font-medium">
                La continuity pédagogique est primordiale. <span className="font-bold underline decoration-blue-300 decoration-2 underline-offset-4">Pas de test entre la maternelle et le CP. Pas de changement d'école en 1ère AC.</span> Un parcours fluide pour le bien-être de votre enfant.
              </p>
            </section>

            <section>
              <h3 className="font-display text-3xl font-bold tracking-tight text-gray-900 mb-8">Questions Fréquentes (Visites)</h3>
              <div className="space-y-4">
                <FaqItem title="La visite est-elle gratuite ?" content="Oui, nos visites privées sont entièrement gratuites et sans aucun engagement de votre part." />
                <FaqItem title="Présence de l'enfant ?" content="La présence de votre enfant est fortement recommandée pour qu'il puisse découvrir son futur environnement." />
                <FaqItem title="Frais de dossier ?" content="Les frais de dossier ne s'appliquent qu'au moment de l'inscription définitive." />
                <FaqItem title="Test de positionnement ?" content="Si vous décidez de nous rejoindre après la visite, un test de positionnement (sans stress) sera planifié pour mieux accompagner votre enfant." />
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}

function StatCard({ title, subtitle, icon }) {
  return (
    <div className="group p-8 rounded-3xl border border-gray-200 bg-white text-gray-900 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-blue-600 hover:text-white hover:border-blue-600">
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="font-bold text-xl leading-tight transition-colors">{title}</h3>
      {subtitle && <span className="text-sm mt-3 font-medium text-gray-500 group-hover:text-blue-200 transition-colors">{subtitle}</span>}
    </div>
  );
}

function FaqItem({ title, content }) {
  return (
    <details className="group border border-gray-200 bg-white rounded-2xl [&_summary::-webkit-details-marker]:hidden shadow-sm">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900 font-bold text-lg hover:text-blue-600 transition-colors">
        {title}
        <span className="relative size-6 shrink-0 bg-gray-50 rounded-full flex items-center justify-center group-open:bg-blue-50 group-open:text-blue-600 transition-colors">
          <svg className="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed">
        {content}
      </div>
    </details>
  );
}

export default Visit;

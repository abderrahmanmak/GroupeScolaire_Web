import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-white pb-24 pt-16">
      <div className="mx-auto max-w-7xl px-6 space-y-24">
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">Contactez-nous</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-serif italic">Nous sommes à votre écoute pour toute information.</p>
        </div>

        {/* WhatsApp IA Banner */}
        <div className="bg-green-500 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-green-200/50">
          <div className="text-white max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">WhatsApp — réponse instantanée</h2>
            <p className="text-green-50 text-lg md:text-xl font-medium">Discutez avec notre agent IA pour obtenir des réponses immédiates à vos questions.</p>
          </div>
          <a href="#" className="px-8 py-5 bg-white text-green-600 font-bold rounded-full hover:bg-green-50 transition-colors shadow-lg text-lg flex items-center gap-3 whitespace-nowrap">
            <span className="text-2xl">💬</span> Démarrer le chat
          </a>
        </div>

        {/* Nos coordonnées */}
        <section>
          <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-12 text-center">Nos coordonnées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CoordCard title="Maternelle" address="N°55, Rue 27, Oulfa" phone="05 22 89 52 24" />
            <CoordCard title="Primaire" address="362 Bd Ouad Oum Rabii" phone="05 22 90 82 38" />
            <CoordCard title="Collège" address="N°31, Rue 27" phone="05 22 89 52 40" />
            <CoordCard title="Lycée" address="N°5 et 7, Angle Rue 49 et 50" phone="05 22 93 04 08" />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Formulaire */}
          <section className="bg-white rounded-[2rem] shadow-xl ring-1 ring-black/5 p-8 md:p-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 mb-8">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Prénom</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Votre prénom" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nom</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Votre nom" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                <input type="tel" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Votre numéro" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Sujet</label>
                <input type="text" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder="Sujet de votre message" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button type="button" className="w-full py-4 mt-2 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-500 transition-colors shadow-md">
                Envoyer le message
              </button>
            </form>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 mb-8">Questions Fréquentes</h2>
            <div className="space-y-4">
              <FaqItem title="Inscriptions" content="Les inscriptions sont ouvertes à partir de mars pour la rentrée suivante. Veuillez nous contacter pour la procédure détaillée." />
              <FaqItem title="Frais" content="Nos frais de scolarité varient selon le cycle. Veuillez télécharger notre brochure ou nous appeler pour plus de détails." />
              <FaqItem title="Transport" content="Un service de transport scolaire sécurisé est disponible pour différents quartiers de Casablanca. Horaires et trajets sur demande." />
              <FaqItem title="Horaires" content="Nos horaires habituels sont de 8h à 18h en semaine." />
              <FaqItem title="Visites" content="Vous pouvez réserver une visite guidée personnalisée via la page de Visite ou en nous appelant directement." />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function CoordCard({ title, address, phone }) {
  return (
    <div className="group p-8 rounded-3xl border border-gray-200 bg-white text-gray-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-blue-600 hover:text-white hover:border-blue-600">
      <h3 className="font-display text-3xl font-bold mb-6 transition-colors">{title}</h3>
      <div className="space-y-4 text-sm md:text-base">
        <p className="flex items-start gap-3">
          <span className="text-gray-400 group-hover:text-blue-200 transition-colors">📍</span>
          <span className="font-medium">{address}</span>
        </p>
        <p className="flex items-start gap-3">
          <span className="text-gray-400 group-hover:text-blue-200 transition-colors">📞</span>
          <span className="font-bold tracking-wide">{phone}</span>
        </p>
      </div>
    </div>
  );
}

function FaqItem({ title, content }) {
  return (
    <details className="group border border-gray-200 bg-white rounded-2xl [&_summary::-webkit-details-marker]:hidden shadow-sm">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900 font-bold text-lg md:text-xl transition-colors hover:text-blue-600">
        {title}
        <span className="relative size-6 shrink-0 bg-gray-50 rounded-full flex items-center justify-center group-open:bg-blue-50 group-open:text-blue-600 transition-colors">
          <svg className="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="px-6 pb-6 text-gray-600 text-base md:text-lg leading-relaxed">
        {content}
      </div>
    </details>
  );
}

export default Contact;

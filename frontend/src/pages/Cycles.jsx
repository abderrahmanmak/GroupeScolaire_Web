import React from 'react';

const maternelleImg = "/lescretespicsvids/sections/primaire/primaire.jpg";
const primaireImg = "/lescretespicsvids/sections/maternelle/maternelle.jpg";
const collegeImg = "/lescretespicsvids/sections/college/college.jpg";
const lyceeImg = "/lescretespicsvids/sections/lycee/lycee.jpg";

function Cycles() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="/lescretespicsvids/sections/maternelle/cycles.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Élèves" />
        
        <div className="relative z-20 text-center px-[4vw]">
            <h1 className="font-sans font-bold text-5xl md:text-7xl text-white tracking-tight mb-4">
                Nos Cycles d'Enseignement
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gray-200 font-medium">
                Un parcours éducatif complet et cohérent, de la maternelle au lycée.
            </p>
        </div>
      </header>

      {/* Liste des cycles (Z-pattern) */}
      <div className="py-24 px-[4vw] max-w-[1600px] mx-auto flex flex-col gap-24">
          
          {/* Maternelle */}
          <div className="flex flex-col md:flex-row items-stretch gap-12">
              <div className="w-full md:w-1/2 flex">
                  <img src={maternelleImg} className="w-full h-full min-h-[400px] object-cover rounded-3xl" alt="Maternelle" />
              </div>
              <div className="w-full md:w-1/2 flex">
                  <div className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full flex flex-col justify-center">
                      <h2 className="font-sans text-4xl font-bold text-gray-900 mb-6">Maternelle</h2>
                      <ul className="space-y-6">
                          <li className="flex items-start gap-4">
                              <span className="text-[#199347] text-2xl font-bold leading-none mt-1">✓</span>
                              <span className="font-serif text-xl text-gray-700 leading-relaxed">Développement linguistique (Arabe/Français)</span>
                          </li>
                          <li className="flex items-start gap-4">
                              <span className="text-[#199347] text-2xl font-bold leading-none mt-1">✓</span>
                              <span className="font-serif text-xl text-gray-700 leading-relaxed">Activités de pré-lecture et pré-écriture</span>
                          </li>
                          <li className="flex items-start gap-4">
                              <span className="text-[#199347] text-2xl font-bold leading-none mt-1">✓</span>
                              <span className="font-serif text-xl text-gray-700 leading-relaxed">Éveil artistique et motricité</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

          {/* Primaire (inversé) */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-12">
              <div className="w-full md:w-1/2 flex">
                  <img src={primaireImg} className="w-full h-full min-h-[400px] object-cover rounded-3xl" alt="Primaire" />
              </div>
              <div className="w-full md:w-1/2 flex">
                  <div className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full flex flex-col justify-center">
                      <h2 className="font-sans text-4xl font-bold text-gray-900 mb-6">Primaire</h2>
                      <ul className="space-y-6">
                          <li className="flex items-start gap-4">
                              <span className="text-[#199347] text-2xl font-bold leading-none mt-1">✓</span>
                              <span className="font-serif text-xl text-gray-700 leading-relaxed">Enseignement trilingue (Arabe, Français, Anglais)</span>
                          </li>
                          <li className="flex items-start gap-4">
                              <span className="text-[#199347] text-2xl font-bold leading-none mt-1">✓</span>
                              <span className="font-serif text-xl text-gray-700 leading-relaxed">Initiation aux sciences, technologie et IA</span>
                          </li>
                          <li className="flex items-start gap-4">
                              <span className="text-[#199347] text-2xl font-bold leading-none mt-1">✓</span>
                              <span className="font-serif text-xl text-gray-700 leading-relaxed">Éducation sportive et musicale</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

          {/* Collège */}
          <div className="flex flex-col md:flex-row items-stretch gap-12">
              <div className="w-full md:w-1/2 flex">
                  <img src={collegeImg} className="w-full h-full min-h-[400px] object-cover rounded-3xl" alt="Collège" />
              </div>
              <div className="w-full md:w-1/2 flex">
                  <div className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full flex flex-col justify-center">
                      <h2 className="font-sans text-4xl font-bold text-gray-900 mb-6">Collège</h2>
                      <ul className="space-y-6">
                          <li className="flex items-start gap-4">
                              <span className="text-[#199347] text-2xl font-bold leading-none mt-1">✓</span>
                              <span className="font-serif text-xl text-gray-700 leading-relaxed">Renforcement trilingue approfondi</span>
                          </li>
                          <li className="flex items-start gap-4">
                              <span className="text-[#199347] text-2xl font-bold leading-none mt-1">✓</span>
                              <span className="font-serif text-xl text-gray-700 leading-relaxed">Mathématiques et sciences expérimentales</span>
                          </li>
                          <li className="flex items-start gap-4">
                              <span className="text-[#199347] text-2xl font-bold leading-none mt-1">✓</span>
                              <span className="font-serif text-xl text-gray-700 leading-relaxed">Histoire-géographie, civisme et technologie</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

          {/* Lycée (inversé) */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-12">
              <div className="w-full md:w-1/2 flex">
                  <img src={lyceeImg} className="w-full h-full min-h-[400px] object-cover rounded-3xl" alt="Lycée" />
              </div>
              <div className="w-full md:w-1/2 flex">
                  <div className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full flex flex-col justify-center">
                      <h2 className="font-sans text-4xl font-bold text-gray-900 mb-6">Lycée</h2>
                      <ul className="space-y-6">
                          <li className="flex items-start gap-4">
                              <span className="text-[#199347] text-2xl font-bold leading-none mt-1">✓</span>
                              <span className="font-serif text-xl text-gray-700 leading-relaxed">3 filières : Sc. Maths, Sc. Physiques, SVT</span>
                          </li>
                          <li className="flex items-start gap-4">
                              <span className="text-[#199347] text-2xl font-bold leading-none mt-1">✓</span>
                              <span className="font-serif text-xl text-gray-700 leading-relaxed">Préparation intensive aux concours supérieurs</span>
                          </li>
                          <li className="flex items-start gap-4">
                              <span className="text-[#199347] text-2xl font-bold leading-none mt-1">✓</span>
                              <span className="font-serif text-xl text-gray-700 leading-relaxed">Orientation académique personnalisée</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
}

export default Cycles;

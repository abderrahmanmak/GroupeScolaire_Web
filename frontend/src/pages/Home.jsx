import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import activityPics from "../data/activitypics.json";

const heroCampus = "/lescretespicsvids/entrance.jpg";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Content Section (Two-Column Layout) */}
      <section className="bg-white pt-24">
        <div className="max-w-[1600px] mx-auto px-[4vw]">
          {/* Top Row: Image & Text */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-start max-w-5xl">
            {/* Left Column (Image) */}
            <div className="flex-shrink-0">
              <img src="/lescretespicsvids/videos/9iyam.jpg" alt="Génération d'élite, couronnant les crêtes" className="w-[280px] object-contain" />
            </div>
            {/* Right Column (About Text) */}
            <div className="font-serif text-lg leading-relaxed text-gray-800">
              <p>
                Fondé en 2009, le Groupe Scolaire Les Crêtes incarne l'excellence éducative. Fort de plus de 16 ans d'expérience.
              </p>
              {/*, notre établissement s'engage au quotidien à accompagner chaque élève vers la réussite, avec pour mission de façonner les citoyens élites de demain. */}
            </div>
          </div>
          {/* Bottom Row: Title */}
          <div className="mt-16 flex justify-start overflow-hidden">
            <h1 
              className="font-sans font-bold text-black tracking-tight text-left"
              style={{ fontSize: '200px', marginBottom: '0', lineHeight: '0.81' }}
            >
              Les Crêtes
            </h1>
          </div>
        </div>
      </section>

      {/* Oversized Brand Typography Section
      <section className="w-full bg-white relative mt-24">
        
      </section> */}

      {/* Full-Width Bleed Image */}
      <section className="w-full">
        <img 
          src="/lescretespicsvids/entrance3.jpg" 
          alt="Les Cretes Entrance" 
          className="w-full object-cover block border-y " 
          style={{ width: '100vw', height: 'auto' }}
        />
      </section>

      <PourquoiChoisir />

      <NewsTicker />

      <section className="max-w-[1600px] mx-auto px-[4vw] py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 border-b border-[#199347] pb-4 inline-block">
              Une vision et pédagogie innovante
            </h2>
            <div className="text-xl text-gray-600 leading-relaxed font-medium space-y-4">
              <h3>Notre établissement s'engage à assurer un suivi de proximité de chaque élève, garantissant un parcours dirigé et orienté du préscolaire au lycée.</h3>
              <h3>Pour préparer au mieux nos jeunes, nous développons leurs capacités de communication en langues vivantes tout en enrichissant notre système éducatif d'heures supplémentaires en matières scientifiques.</h3>
              <h3>Cette approche globale permet d'offrir à nos élèves une orientation ambitieuse vers les filières supérieures spécialisées et les carrières d'avenir</h3>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <video 
              src="/lescretespicsvids/notreecole.mp4" 
              className="rounded-[2rem] shadow-2xl w-full max-w-sm aspect-[9/16] object-cover border-4 border-white ring-1 ring-black/5"
              controls 
              autoPlay 
              muted 
              loop
            />
          </div>
        </div>
      </section>

      <NewsAndCalendar />

      <section className="py-16 overflow-hidden bg-white border-t border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8 border-b border-[#199347] pb-4 inline-block">
            Nos activités
          </h2>
          <ImageCarousel images={activityPics} />
          <div className="mt-10">
            <Link to="/vie-etudiante#activites-grid" className="inline-block px-8 py-3 bg-[#199347] text-white font-bold rounded-full hover:bg-green-700 transition-colors shadow-md">
              Voir plus
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 md:p-12 rounded-[2rem] shadow-sm border border-green-200">
          <div className="text-center mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-green-800 border-b border-[#199347] pb-4 inline-block">
              Inscriptions Ouvertes 2026 - 2027
            </h2>
          </div>
          <p className="text-xl text-center text-green-700 font-medium mb-8">
            Rejoignez le Groupe Scolaire Les Crêtes et offrez à votre enfant l'avenir qu'il mérite. Les places sont limitées.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors shadow-lg text-lg">
              Réserver votre place
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ title, description, icon }) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white text-gray-900 p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-green-600 hover:text-white hover:border-purple-500 flex flex-col items-center text-center">
      <span className="text-5xl mb-6 block">{icon}</span>
      <h3 className="mb-3 font-display text-2xl font-bold">{title}</h3>
      <p className="text-base font-medium group-hover:text-green-100 text-gray-600 transition-colors">{description}</p>
    </div>
  );
}

function FeatureCard({ title, number }) {
  return (
    <div className="flex items-center gap-6 p-6 md:p-8 rounded-2xl bg-white border border-gray-200 transition-all hover:bg-green-600 hover:text-white hover:border-purple-500 hover:shadow-lg group">
      <span className="text-5xl font-display font-black text-gray-200 group-hover:text-green-200 transition-colors">{number}</span>
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-white transition-colors">{title}</h3>
    </div>
  );
}
function PourquoiChoisir() {
  const [activeTab, setActiveTab] = useState(0);
  
  const reasons = [
    {
      title: "Excellence académique",
      description: "Notre établissement s'engage au quotidien à offrir une excellence académique de premier plan. Pour y parvenir, nous déployons un programme éducatif rigoureux, exigeant et constamment mis à jour. Ce cursus est soigneusement aligné sur les meilleurs standards et exigences internationaux. Notre objectif principal est de doter chaque apprenant des connaissances solides pour se démarquer. Ainsi, nous préparons efficacement et durablement nos élèves à réussir brillamment dans leurs parcours futurs."
    },
    {
      title: "Enseignement multilingue",
      description: "L'ouverture sur le monde est garantie au sein de notre école par un enseignement multilingue d'exception. Dès leur plus jeune âge, nos élèves bénéficient d'une formation approfondie en arabe, français et anglais. Cette immersion linguistique quotidienne leur permet de s'exprimer avec aisance, nuance et confiance. Maîtriser ces trois langues fondamentales constitue un atout majeur pour leur développement intellectuel et culturel. Ils sont ainsi parfaitement outillés pour s'intégrer et prospérer dans un avenir résolument international."
    },
    {
      title: "Cadre éducatif stimulant",
      description: "Nous mettons un point d'honneur à offrir à nos apprenants un cadre éducatif particulièrement stimulant. Notre établissement est doté d'installations modernes, spécifiquement adaptées aux nouvelles méthodes d'apprentissage. Chaque espace de vie et de travail est pensé pour garantir un environnement serein et totalement sécurisé. Ces infrastructures de grande qualité favorisent à la fois la concentration, la curiosité et le travail collaboratif. Ce milieu bienveillant contribue directement à l'épanouissement global et au bien-être de chaque enfant."
    },
    {
      title: "Accompagnement personnalisé",
      description: "La réussite scolaire de vos enfants repose avant tout sur notre approche d'accompagnement profondément personnalisé. Nos équipes pédagogiques accordent une attention individuelle et bienveillante aux besoins spécifiques de chaque élève. Un suivi régulier et rigoureux est mis en place pour évaluer les progrès et encourager les talents. Ce dispositif intègre naturellement des communications fluides, transparentes et continues avec les parents. Ensemble, la famille et l'école forment ainsi une véritable alliance pour guider l'élève vers son plein potentiel."
    }
  ];

  return (
    <section className="mx-auto max-w-[1600px] px-[4vw] py-24">
      <div className="flex flex-col md:flex-row gap-[60px] items-start">
        {/* Left column: Phrases */}
        <div className="w-full md:w-1/4 flex flex-col gap-6 relative">
          {reasons.map((reason, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-left font-sans text-[26px] pb-2 border-b border-[#199347] transition-colors ${
                activeTab === index
                  ? "font-bold text-[#199347]"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {reason.title}
            </button>
          ))}
        </div>
        
        {/* Right column: Paragraph */}
        <div className="w-full md:w-3/4 flex flex-col justify-start">
          <p className="font-serif text-[22px] leading-[1.6] text-gray-800 max-w-[800px]">
            {reasons[activeTab].description}
          </p>
        </div>
      </div>
    </section>
  );
}

function NewsTicker() {
  const newsItems = [
    "Inscriptions Ouvertes 2026 - 2027",
    "100 % de réussite pour nos bacheliers",
    "100 % de réussite pour nos élèves de 3ème année Collège et 6ème année Primaire",
    "Félicitations à nos chers élèves de 1ère année Baccalauréat pour la moyenne exceptionnelle de 18,95/20"
  ];

  // We duplicate the items 4 times to ensure it's wide enough for large screens,
  // and maintains a perfect 50% split for the continuous-scroll animation.
  const allItems = [...newsItems, ...newsItems, ...newsItems, ...newsItems];

  return (
    <div className="w-full bg-green-50 border-y border-green-100 overflow-hidden py-6 flex items-center">
      <div className="animate-continuous-scroll hover:[animation-play-state:paused] flex items-center cursor-default">
        {allItems.map((item, index) => (
          <div key={index} className="flex items-center whitespace-nowrap">
            <span className="text-gray-800 font-sans font-medium text-[24px] px-12">
              {item}
            </span>
            <span className="text-[#199347] text-2xl">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsAndCalendar() {
  const newsItems = [
    "Inscriptions Ouvertes 2026 - 2027",
    "100 % de réussite pour nos bacheliers",
    "100 % de réussite pour nos élèves de 3ème année Collège et 6ème année Primaire",
    "Félicitations à nos chers élèves de 1ère année Baccalauréat pour la moyenne exceptionnelle de 18,95/20"
  ];

  const calendarItems = [
    { title: "Maternelle et Primaire", desc: "Jeudi 3 septembre 2026 de 08h30 à 12h30 | Vendredi 4 septembre 2026 de 08h30 à 12h30" },
    { title: "Collège", desc: "Jeudi 3 septembre 2026 de 08h30 à 12h30 | Reprise des cours : Lundi 7 septembre 2026" },
    { title: "Lycée", desc: "Vendredi 4 septembre 2026 de 08h30 à 12h30 | Reprise des cours : Lundi 7 septembre 2026" }
  ];

  return (
    <section className="bg-gray-50 py-24 border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: News */}
          <div>
            <h2 className="font-sans text-3xl font-bold text-black mb-8 border-b-2 border-[#199347] pb-4 inline-block">Actualités</h2>
            <ul className="space-y-6">
              {newsItems.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="text-[#199347] text-2xl mt-1">•</span>
                  <p className="font-serif text-xl text-gray-800 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            <br /><br />
            <div className="bg-[#eefcf2] p-6 rounded-xl border border-green-200">
                <p className="font-serif text-lg text-green-800 font-medium">
                  Note additionnelle: Le transport scolaire est assuré. Ensemble, pour une nouvelle année riche en réussites !
                </p>
              </div>
          </div>
          
          {/* Right Column: Calendar */}
          <div>
            <h2 className="font-sans text-3xl font-bold text-black mb-8 border-b-2 border-[#199347] pb-4 inline-block">Rentrée Scolaire 2026</h2>
            <div className="space-y-8">
              {calendarItems.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-colors duration-300 hover:bg-[#199347] group">
                  <h3 className="font-sans font-bold text-xl text-black mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="font-serif text-lg text-gray-600 group-hover:text-white transition-colors">{item.desc}</p>
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

function ImageCarousel({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden bg-white border-y border-gray-100 py-6">
      <div 
        className="el-thumbs el-thumbs--scroll animate-continuous-scroll hover:[animation-play-state:paused]"
        style={{ animationDuration: '120s' }}
      >
        {images.map((pic, index) => (
          <img
            key={index}
            src={`/lescretespicsvids/sections/${pic}`}
            alt={`Activité ${index}`}
            loading="lazy"
            className="flex-none h-[250px] md:h-[300px] w-auto mx-4 rounded-2xl object-cover shadow-sm border border-gray-200"
          />
        ))}
        {images.map((pic, index) => (
          <img
            key={`clone-${index}`}
            src={`/lescretespicsvids/sections/${pic}`}
            alt={`Activité clone ${index}`}
            loading="lazy"
            className="flex-none h-[250px] md:h-[300px] w-auto mx-4 rounded-2xl object-cover shadow-sm border border-gray-200"
          />
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from "react-router-dom";

const heroCampus = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative mx-auto max-w-7xl px-6 pt-8 pb-24">
        <div className="grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 lg:col-span-12 animate-reveal">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5">
              <img
                src={heroCampus}
                alt="Campus"
                className="w-full aspect-[16/10] md:aspect-[21/9] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-8 md:p-16 max-w-3xl">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/30 border border-blue-400/50 text-white text-sm font-bold tracking-wider mb-6 w-max backdrop-blur-sm">
                  28+ Ans d'expérience
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                  Bienvenue au Groupe Scolaire <span className="font-serif font-normal italic">Les Crêtes</span>.
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-10 font-medium">
                  Une éducation d'excellence pour l'avenir de votre enfant.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/notre-ecole" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors border-2 border-blue-400 shadow-lg">
                    Découvrir notre école
                  </Link>
                  <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors shadow-lg">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 mb-4">
              L'approche globale GS Les Crêtes
            </h2>
            <p className="text-2xl text-blue-600 font-serif italic">
              Corps, Coeur, Esprit, Avenir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Corps" description="Neurogames, 3-6 ans" icon="🏃" />
            <Card title="Coeur" description="Soft Skills, CP-CE6" icon="❤️" />
            <Card title="Esprit" description="Lumi, CP-CE6 tuteur IA" icon="🧠" />
            <Card title="Avenir" description="Programme IA, Primaire" icon="🚀" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900">
              Pourquoi choisir le Groupe Scolaire Les Crêtes ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard title="Excellence académique" number="01" />
            <FeatureCard title="Enseignement multilingue" number="02" />
            <FeatureCard title="Cadre éducatif stimulant" number="03" />
            <FeatureCard title="Accompagnement personnalisé" number="04" />
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ title, description, icon }) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white text-gray-900 p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 flex flex-col items-center text-center">
      <span className="text-5xl mb-6 block">{icon}</span>
      <h3 className="mb-3 font-display text-2xl font-bold">{title}</h3>
      <p className="text-base font-medium group-hover:text-blue-100 text-gray-600 transition-colors">{description}</p>
    </div>
  );
}

function FeatureCard({ title, number }) {
  return (
    <div className="flex items-center gap-6 p-6 md:p-8 rounded-2xl bg-white border border-gray-200 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg group">
      <span className="text-5xl font-display font-black text-gray-200 group-hover:text-blue-200 transition-colors">{number}</span>
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-white transition-colors">{title}</h3>
    </div>
  );
}

export default HomePage;

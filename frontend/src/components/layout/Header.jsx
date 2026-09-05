import React from 'react';
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/notre-ecole", label: "Notre École" },
  { to: "/nos-cycles", label: "Nos Cycles" },
  { to: "/vie-etudiante", label: "Vie Étudiante" },
];

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-[4vw] flex justify-between items-center h-24">
        {/* Left Alignment: Logo */}
        <div className="flex items-center">
          <img src="/lescretespicsvids/logo2.jpg" alt="Logo" className="h-12 w-auto" />
        </div>
        
        {/* Right Alignment: Navigation */}
        <nav className="flex items-center gap-6 font-sans text-black">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="font-bold hover:underline">
              {link.label}
            </Link>
          ))}
          <Link 
            to="/espace-scolaire" 
            className="bg-[#199347] text-white px-6 py-2.5 rounded-full font-bold shadow-sm"
          >
            Espace Scolaire
          </Link>
        </nav>
      </div>
    </header>
  );
}

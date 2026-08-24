import React from 'react';
import { NavLink, Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/notre-ecole", label: "Notre École" },
  { to: "/nos-cycles", label: "Nos Cycles" },
  { to: "/vie-etudiante", label: "Vie Étudiante" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-blue-600 rotate-3">
            <span className="font-display text-xl font-bold text-white">C</span>
          </div>
          <div className="leading-none">
            <span className="block font-display text-lg font-extrabold tracking-tight uppercase text-gray-900">
              Les Crêtes
            </span>
            <span className="block font-mono text-[10px] tracking-tighter text-gray-500">
              GROUPE SCOLAIRE
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `group relative text-sm font-medium transition-colors ${
                  isActive ? "text-gray-900 after:w-full" : "text-gray-500 hover:text-gray-900 after:w-0"
                } after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-blue-600 after:transition-all hover:after:w-full`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
            >
              Contactez-nous
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Info, BookOpen, Users, Phone, MapPin, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Accueil', icon: <Home size={20} />, route: '/' },
    { name: 'Notre école', icon: <Info size={20} />, route: '/ecole' },
    { name: 'Nos cycles', icon: <BookOpen size={20} />, route: '/cycles' },
    { name: 'Vie étudiante', icon: <Users size={20} />, route: '/vie-etudiante' },
    { name: 'Contact', icon: <Phone size={20} />, route: '/contact' },
  ];

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-slate-900 text-white p-4 flex justify-between items-center z-50">
        <span className="text-xl font-bold">Groupe Scolaire</span>
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar Content */}
      <aside className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:w-64 bg-slate-900 text-white flex flex-col h-full transition-transform duration-300 ease-in-out z-40 w-64 shadow-xl`}>
        
        {/* Brand */}
        <div className="p-6 hidden lg:block border-b border-slate-800">
          <h2 className="text-2xl font-extrabold tracking-tight">Groupe Scolaire</h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 mt-16 lg:mt-0 overflow-y-auto">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.route}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              <span className="mr-3">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button at Bottom */}
        <div className="p-6 border-t border-slate-800">
          <NavLink
            to="/visite"
            onClick={closeSidebar}
            className="flex items-center justify-center w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-4 rounded-xl transition-colors shadow-md"
          >
            <MapPin size={20} className="mr-2" />
            Visiter l'école
          </NavLink>
        </div>
      </aside>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;

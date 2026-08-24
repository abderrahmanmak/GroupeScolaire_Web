import React from 'react';
import { Bus } from 'lucide-react';
import { Link } from 'react-router-dom';

const TransportHighlight = () => {
  return (
    <section className="py-16 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-800 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center mb-8 lg:mb-0 lg:mr-8">
            <div className="bg-white/10 p-4 rounded-full mr-6 hidden sm:block">
              <Bus size={48} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Transport Scolaire Sécurisé</h2>
              <p className="text-blue-100 text-lg">
                Nouvelles lignes desservies : <strong className="text-amber-400">RAHMA, DAR BOUAZZA, BEAUSÉJOUR</strong>
              </p>
            </div>
          </div>
          <Link to="/contact" className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-colors shadow-lg whitespace-nowrap w-full text-center lg:w-auto">
            Demander des infos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TransportHighlight;

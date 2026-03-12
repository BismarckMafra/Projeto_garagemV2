import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-12 border-t border-orange-900/30">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Coluna 1: Marca */}
        <div className="col-span-1 md:col-span-1">
          <span className="text-white font-black text-xl italic">
            HOT<span className="text-orange-500">WHEELS</span>
          </span>
          <p className="mt-4 text-sm leading-relaxed">
            Acelerando sua paixão por miniaturas com a tecnologia e os dados da maior comunidade de colecionadores.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-[0.2em]">Explorar</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition">Mainline 2024</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Treasure Hunts</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Guia de Preços</a></li>
          </ul>
        </div>

        {/* Coluna 3: Suporte */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-[0.2em]">Comunidade</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition">Fórum</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Trocas</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Eventos</a></li>
          </ul>
        </div>

        {/* Coluna 4: Newsletter Tech */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-[0.2em]">Fique por dentro</h4>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              className="bg-[#1a1a1a] border border-gray-800 p-2 rounded-l-md w-full focus:outline-none focus:border-orange-500 text-sm"
            />
            <button className="bg-orange-600 p-2 rounded-r-md hover:bg-orange-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-900 text-center text-[10px] uppercase tracking-widest">
        © 2026 HotWheels Lab. Non-official fan project.
      </div>
    </footer>
  );
};

export default Footer;
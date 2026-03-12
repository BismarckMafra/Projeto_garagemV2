import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-orange-500 font-black text-2xl tracking-tighter italic">
              HOT<span className="text-white">WHEELS</span>
              <span className="text-[10px] ml-1 bg-orange-500 text-black px-1 not-italic rounded">LAB</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Garagem', 'Coleções', 'Raridades', 'Pistas'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm font-medium uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-full text-xs font-bold uppercase transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(234,88,12,0.4)]">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0d1b2a] z-50 px-6 md:px-10 py-4 md:py-5">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center text-white font-bold text-sm md:text-lg">
          <Scale className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 p-1 border-2 border-white rounded-full" />
          <div>
            <div>PAULO VELOSO</div>
            <div>ADVOGADO</div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#inicio" className="text-white hover:text-[#f4b860] transition-colors duration-200 font-medium">
            Início
          </a>
          <a href="#areas" className="text-white hover:text-[#f4b860] transition-colors duration-200 font-medium">
            Áreas de Atuação
          </a>
          <a href="#sobre" className="text-white hover:text-[#f4b860] transition-colors duration-200 font-medium">
            Sobre
          </a>
          <a 
            href="#contato" 
            className="bg-[#f4b860] hover:bg-[#e6a54d] text-[#0d1b2a] px-5 py-2.5 rounded-md font-bold transition-colors duration-200"
            onClick={() => window.open('https://wa.me/5511948884171', '_blank')}
          >
            FALE COMIGO AGORA
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 border-t border-gray-600">
          <div className="flex flex-col space-y-4 pt-4">
            <a href="#inicio" className="text-white hover:text-[#f4b860] transition-colors duration-200 font-medium">
              Início
            </a>
            <a href="#areas" className="text-white hover:text-[#f4b860] transition-colors duration-200 font-medium">
              Áreas de Atuação
            </a>
            <a href="#sobre" className="text-white hover:text-[#f4b860] transition-colors duration-200 font-medium">
              Sobre
            </a>
            <a 
              href="#contato" 
              className="bg-[#f4b860] hover:bg-[#e6a54d] text-[#0d1b2a] px-4 py-2 rounded-md font-bold transition-colors duration-200 w-fit text-sm"
              onClick={() => window.open('https://wa.me/5511948884171', '_blank')}
            >
              FALE COMIGO AGORA
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
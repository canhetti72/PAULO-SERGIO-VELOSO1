import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-[#0d1b2a] text-white pt-20 md:pt-32 pb-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
        <div className="flex-1 lg:max-w-lg text-center lg:text-left">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3 lg:mb-6 leading-tight">
            Defesa jurídica com ética, compromisso e resultados.
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mb-4 lg:mb-8 text-gray-200 leading-relaxed">
            Atendimento especializado em direito Criminal, cível, trabalhista, empresarial...
          </p>
          <button 
            className="bg-[#f4b860] hover:bg-[#e6a54d] text-[#0d1b2a] px-4 lg:px-8 py-2 lg:py-4 rounded-md font-bold text-sm lg:text-lg transition-colors duration-200 hover:shadow-lg transform hover:-translate-y-1"
            onClick={() => window.open('https://wa.me/5511948884171', '_blank')}
          >
            AGENDE SUA CONSULTA
          </button>
        </div>
        
        <div className="hidden lg:block flex-shrink-0 w-80 h-80">
          <div 
            className="w-full h-full rounded-lg shadow-lg"
            style={{
              backgroundImage: 'url(https://i.ibb.co/3m8F7NtN/foto-instagram-1080x1080.jpg)',
              backgroundSize: 'contain',
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>
        
        <div className="lg:hidden flex-shrink-0 w-full max-w-xs h-80 mx-auto mt-8 px-2">
          <div 
            className="w-full h-full rounded-lg shadow-lg border-2 border-gray-300"
            style={{
              backgroundImage: 'url(https://i.ibb.co/3m8F7NtN/foto-instagram-1080x1080.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
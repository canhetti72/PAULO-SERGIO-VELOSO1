import React from 'react';

const Contact = () => {
  return (
    <section id="contato" className="py-12 md:py-20 px-6 md:px-10 bg-[#0d1b2a] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          PRECISA DE ORIENTAÇÃO JURÍDICA?
        </h2>
        <p className="text-sm md:text-xl mb-8 md:mb-12">
          Entre em contato e agende sua consulta inicial.
        </p>
        <button 
          className="bg-[#f4b860] hover:bg-[#e6a54d] text-[#0d1b2a] px-6 md:px-8 py-3 md:py-4 rounded-md font-bold text-sm md:text-lg transition-colors duration-200 hover:shadow-lg transform hover:-translate-y-1"
          onClick={() => window.open('https://wa.me/5511948884171', '_blank')}
        >
          FALE DIRETO COMIGO
        </button>
      </div>
    </section>
  );
};

export default Contact;
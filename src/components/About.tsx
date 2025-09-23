import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-12 md:py-20 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        <div className="flex-1">
          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800 uppercase">
            SOBRE O SEU ADVOGADO
          </h2>
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
            Sou <strong>Paulo Sérgio Veloso Júnior</strong>, Advogado inscrito na <strong>OAB/SP Nº 538.880</strong>, com experiência na área: <strong>Criminal, Cível, Trabalhista e Família </strong>. Meu compromisso é oferecer soluções jurídicas personalizadas e eficazes para cada cliente.
          </p>
        </div>
        
        <div className="hidden lg:block flex-shrink-0 w-full max-w-sm lg:w-96">
          <img 
            src="https://i.ibb.co/9HXrMfKB/Whats-App-Image-2025-09-22-at-21-02-13.jpg" 
            alt="Paulo Sergio Veloso Júnior - Advogado"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
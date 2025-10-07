import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0d1b2a] text-white text-center py-6 md:py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm md:text-lg font-medium mb-2">
          © 2025 - Paulo Sergio Veloso Júnior | OAB/SP Nº 538.880
        </p>
        <p className="text-sm md:text-base mb-2">
          <a 
            href="mailto:contato@paulovelosoadv.com.br" 
            className="text-blue-300 hover:underline"
          >
            pauloveloso@adv.com.br
          </a>
        </p>
        <div>
          <a 
            href="https://www.instagram.com/veloso_adv_?igsh=bjlhYjgxdTh5Y2li" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#f4b860] hover:text-[#e6a54d] transition-colors duration-200 font-medium inline-flex items-center gap-2"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/28/Instagram_logo.png" 
              alt="Instagram" 
              className="w-5 h-5"
            />
            Instagram
          </a>
        </div>
      </div>
      <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
          Powered by Anderson Canhetti
        </p>
    </footer>
  );
};


export default Footer;

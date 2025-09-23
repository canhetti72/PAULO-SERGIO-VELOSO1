import React from 'react';
import { Handshake, CheckCircle, User, FileText } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: <Handshake className="w-12 h-12 mb-4 text-gray-600" />,
      title: "Atendimento humanizado"
    },
    {
      icon: <CheckCircle className="w-12 h-12 mb-4 text-gray-600" />,
      title: "Ética e transparência"
    },
    {
      icon: <User className="w-12 h-12 mb-4 text-gray-600" />,
      title: "Consultoria personalizada"
    },
    {
      icon: <FileText className="w-12 h-12 mb-4 text-gray-600" />,
      title: "Rapidez nos processos"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold mb-8 md:mb-12 text-gray-800 text-left uppercase">
          MEUS DIFERENCIAIS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {differentials.map((differential, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="flex justify-center">
                {differential.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-xs md:text-sm">
                {differential.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
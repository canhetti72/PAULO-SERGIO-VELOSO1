import React from 'react';
import { Scale, Users, Building2, Briefcase, Home, CheckSquare } from 'lucide-react';

const PracticeAreas = () => {
  const areas = [
    {
      icon: <Scale className="w-12 h-12 mb-4 text-gray-600" />,
      title: "Direito Civil"
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-gray-600" />,
      title: "Direito de Família"
    },
    {
      icon: <Building2 className="w-12 h-12 mb-4 text-gray-600" />,
      title: "Direito Empresarial"
    },
    {
      icon: <Briefcase className="w-12 h-12 mb-4 text-gray-600" />,
      title: "Direito Trabalhista"
    },
    {
      icon: <Home className="w-12 h-12 mb-4 text-gray-600" />,
      title: "Direito Imobiliário"
    },
    {
      icon: <CheckSquare className="w-12 h-12 mb-4 text-gray-600" />,
      title: "Direito Imobiliário"
    }
  ];

  return (
    <section id="areas" className="py-12 md:py-20 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold mb-8 md:mb-12 text-gray-800 text-left uppercase">
          ÁREAS DE ATUAÇÃO
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="flex justify-center">
                {area.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-xs md:text-sm">
                {area.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
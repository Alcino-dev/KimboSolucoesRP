"use client";

import { useState } from 'react';

export default function Clientes() {
  const [isExpanded, setIsExpanded] = useState(false);

  const clients = [
    {
      name: "Hotel Hagata",
      logo: "/hotelAgata.png"
    },
    {
      name: "Banco Yetu",
      logo: "/bancoyetu.jpg"
    },
    {
      name: "Restaurante Matabicho",
      logo: "/matabicho.jpeg"
    },
    {
      name: "Restaurante Las Fronteras",
      logo: "/lafrontera.png"
    },
    {
      name: "Unitel",
      logo: "/unitel.jpeg"
    },
    {
      name: "Joprama",
      logo: "/jopramo.jpg"
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920')`,
        }}
      >
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.9), rgba(255, 235, 59, 0.9))'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="mt-40 text-3xl md:text-4xl font-medium text-white text-center mb-8 md:mb-12 drop-shadow-lg">
          Conheça Nossos Clientes
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {/* Fixed Circle Container */}
          <div className={`relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] ${isExpanded ? 'wheel-expanded' : ''} md:mr-8`}>
            {/* Central Axis */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-xl z-20 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
              onClick={() => setIsExpanded(true)} // Added onClick event handler
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-800 rounded-full"></div>
            </div>
            
            {/* Rotating Wheel */}
            <div className="logo-circle">
              {clients.map((client, index) => (
                <div
                  key={client.name}
                  className="logo-item"
                  style={{
                    '--rotation': `${index * (360 / clients.length)}deg`,
                  } as React.CSSProperties}
                >
                  <div className="logo-content">
                    <div className="logo-wrapper">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <p className="logo-name">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-8 md:mt-0 md:ml-8 text-white text-center md:text-left max-w-md bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-lg">
            <p className="text-lg md:text-xl leading-relaxed">
              Esses são alguns dos nossos parceiros e clientes que confiam no nosso trabalho e caminham ao nosso lado. Cada parceria representa um compromisso com a excelência, inovação e qualidade. Valorizamos a confiança depositada em nós e seguimos empenhados em fortalecer esses laços, contribuindo para o crescimento e sucesso de cada um. Juntos, construímos histórias de sucesso!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
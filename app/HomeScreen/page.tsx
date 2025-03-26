"use client"

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Facebook, Instagram, X, Linkedin} from "lucide-react";
import Link from 'next/link';

const slides = [
  {
    image: "img1.jpg",
    title: "Bem-vindo à Kimbo Soluções",
    subtitle: "Soluções completas em desinfestação, limpeza, jardinagem e climatização",
  },
  {
    image: "img2.jpg",
    title: "Desinfestação Profissional",
    subtitle: "Proteja sua casa e empresa contra pragas com nossos serviços especializados",
  },
  {
    image: "img3.jpg",
    title: "Limpeza Profunda",
    subtitle: "Ambientes higienizados e livres de impurezas para seu conforto e segurança",
  },
  {
    image: "img4.jpg",
    title: "Soluções em Climatização",
    subtitle: "Instalação e manutenção de sistemas de climatização para seu bem-estar",
  },
];

export default function HomeScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(false);
  const [currentLang, setCurrentLang] = useState('PT');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentSlide((current) => (current + 1) % slides.length);
      }, 300);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    return () => clearTimeout(textTimer);
  }, [currentSlide]);

  const nextSlide = () => {
    setShowText(false);
    setTimeout(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 300);
  };

  const prevSlide = () => {
    setShowText(false);
    setTimeout(() => {
      setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
    }, 300);
  };
  const languages = [
    { code: 'PT', label: 'PT', flag: 'https://flagcdn.com/pt.svg' },
    { code: 'ENG', label: 'ENG', flag: 'https://flagcdn.com/gb.svg' },
    { code: 'FR', label: 'FR', flag: 'https://flagcdn.com/fr.svg' }
  ];

  
  const currentLanguage = languages.find(lang => lang.code === currentLang);
  
  return (
    <main className="relative min-h-screen">
      {/* Carousel */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}   
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          > 
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
          </div>
        ))}

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4 md:px-0">
          <div className="text-center">
            <h2
              className={`text-white text-4xl md:text-6xl font-bold mb-4 transition-all duration-500 ${
                showText ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
              }`}
            >
              {slides[currentSlide].title}
            </h2>
            <p
              className={`text-white text-lg md:text-xl max-w-2xl mx-auto transition-all duration-500 delay-100 ${
                showText ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
              }`}
            >
              {slides[currentSlide].subtitle}
            </p>
            <Link href="/servicos">
            <button
              style={{ borderRadius: "40px" }}
              className={`mt-8 bg-[#ffd200] text-Black px-6 md:px-8 py-3 text-base md:text-lg font-semibold hover:bg-[#d0ab00] transition-all duration-500 delay-200 ${
                showText ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
              }`}
            >
              Nossos Serviços
            </button>
            </Link>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 bg-black bg-opacity-30 rounded-full flex items-center justify-center text-white hover:bg-opacity-50 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 bg-black bg-opacity-30 rounded-full flex items-center justify-center text-white hover:bg-opacity-50 transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 md:bottom-32 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setShowText(false);
                setTimeout(() => setCurrentSlide(index), 300);
              }}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-6 md:w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
        <div className="absolute bottom-40 ml-5 md:bottom-32 right-4 md:right-8 z-30 flex items-center space-x-4">
          <Link href="/Clientes" className="text-white hover:text-[#ffd200]">Conheça nossos clientes</Link>
          <div className="h-8 w-px bg-[#ffd200]" />
          <span className="text-white">Nossas redes:</span>
          <a href="https://www.linkedin.com/in/kimbo-solu%C3%A7%C3%B5es-246b4a27b/" className="text-white hover:text-green-400">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/servicoskimbo/" className="text-white hover:text-green-400">
            <Instagram size={20} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100076839086708" className="text-white hover:text-green-400">
            <Facebook size={20} />
          </a>

          <div className="h-8 w-px bg-[#ffd200]"/>

          <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 bg-black/30 hover:bg-black/40 px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-white transition-colors"
              >
                <img 
                  src={currentLanguage?.flag} 
                  alt={currentLanguage?.code} 
                  className="w-3 md:w-4 h-3 md:h-4 rounded-sm object-cover"
                />
                <span className="text-xs md:text-sm font-medium">{currentLang}</span>
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 py-1 w-24 md:w-28 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl border border-white/10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`flex items-center space-x-2 md:space-x-3 w-full px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm transition-colors ${
                        currentLang === lang.code
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      <img 
                        src={lang.flag} 
                        alt={lang.code} 
                        className="w-3 md:w-4 h-3 md:h-4 rounded-sm object-cover"
                      />
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
        </div>
      </div>
    </main>
  );
}
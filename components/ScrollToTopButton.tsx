"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-[#75B53F] text-white p-4 rounded-full shadow-lg 
                  hover:bg-[#128C7E] transition-all duration-300 ease-in-out
                  hover:scale-110 hover:shadow-xl
                  focus:outline-none focus:ring-2 focus:ring-[#75B53F] focus:ring-offset-2
                  ${isVisible ? 'block' : 'hidden'}`}
      aria-label="Scroll to Top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}

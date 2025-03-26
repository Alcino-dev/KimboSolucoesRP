"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/servicos", label: "Serviços" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/contactos", label: "Contacte-nos" },
  ];

  return (
    <header className="bg-[#fff] text-black w-full z-50">
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="relative flex items-center">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl -z-10" />
            <div className="flex items-center gap-8 px-6 py-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white text-lg font-semibold hover:text-[#ffd200] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Logo */}
        <div className={`flex-1 flex justify-center ${isMobile ? '' : 'relative right-28'}`}>
          <Link href="/">
            <Image src="/Logo.png" width={isMobile ? 200 : 250} height={isMobile ? 80 : 100} alt="Logo" priority />
          </Link>
        </div>

        {/* CTA Button */}
        <Link href="/orcamento" className={`${isMobile ? 'hidden' : 'block'}`}>
          <button
            className="bg-[#018001] text-white px-6 py-2 hover:bg-[#75B53F] transition-colors rounded-[40px]"
          >
            Pedir Orçamento
          </button>
        </Link>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl font-semibold hover:text-[#ffd200] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/orcamento"
                onClick={() => setIsOpen(false)}
                className="mt-4"
              >
                <button
                  className="bg-[#75B53F] text-white px-8 py-3 text-lg hover:bg-[#018001] transition-colors rounded-[40px]"
                >
                  Pedir Orçamento
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
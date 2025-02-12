"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#75B53F] text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.jpg"
              alt="Logo"
              width={210}
              height={210}
              style={{marginLeft: '-15px'}}
             // className="w-10 h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-yellow-300 transition-colors">
              Início
            </Link>
            <Link
              href="/sobre"
              className="hover:text-yellow-300 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/servicos"
              className="hover:text-yellow-300 transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="/contactos"
              className="hover:text-yellow-300 transition-colors"
            >
              Contactos
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Pesquisar..."
                className="py-1 px-3 pr-10 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <div className="absolute right-0 top-0 h-full flex items-center">
                <button className="px-3 bg-yellow-400 h-full rounded-r-full hover:bg-yellow-500 transition-colors">
                  <Search className="h-4 w-4 text-black" />
                </button>
              </div>
            </div>
            <Link href="/orcamento">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                Pedir Orçamento
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-3">
              <Link
                href="/"
                className="block hover:bg-green-600 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/sobre"
                className="block hover:bg-green-600 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/servicos"
                className="block hover:bg-green-600 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/contactos"
                className="block hover:bg-green-600 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contactos
              </Link>
              <Link
                href="/orcamento"
                className="block"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                  Pedir Orçamento
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

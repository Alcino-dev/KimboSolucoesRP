"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import {
  Bug,
  Flower,
  ThermometerSun,
  SprayCan as Spray,
  ArrowRight,
} from "lucide-react";

import { categories } from "./data";

export default function Servicos() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const scrollToCategory = useCallback((categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSelectedCategory(categoryId);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white h-[500px] -mt-20">
        <div className="fixed bottom-8 right-8 z-50">
          <WhatsAppButton phoneNumber="+244944070757" />

          <ScrollToTopButton />
        </div>
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src="/fundoSection.webp"
              alt="Serviços de Manutenção"
              fill
              className="object-cover brightness-[0.7]"
              priority
              sizes="100vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjQ4OEQ4LjE1REVHS1NTW1xfXkVnaWVsbUVbW1v/2wBDARUXFx4aHR4eHVtTQlNbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10 top-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl pl-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Nossos Serviços
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-xl">
              Soluções completas e profissionais para todas as suas necessidades
              de manutenção e conservação.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="sticky top-0 bg-white/80 backdrop-blur-sm z-20 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => scrollToCategory(category.id)}
                className={`
                  transition-all duration-300
                  ${
                    selectedCategory === category.id
                      ? "bg-[#75B53F] text-white scale-105"
                      : "hover:bg-[#ffd200]/50 hover:text-[#000]"
                  }
                `}
              >
                <span className="flex items-center gap-2 w-32 h-32">
                  {category.icon}
                  {category.title}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-24">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                id={category.id}
                className="space-y-12"
              >
                <div className="text-center space-y-4">
                  <div className="inline-block p-4 rounded-full bg-[#75B53F]/10 text-[#75B53F]">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {service.description}
                          </p>
                          <ul className="space-y-2 mb-6 flex-1">
                            {service.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-center text-gray-600 group-hover:text-[#75B53F] transition-colors"
                              >
                                <span className="w-2 h-2 bg-[#75B53F] rounded-full mr-2"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={`/orcamento?service=${category.id}`}
                            className="mt-auto"
                          >
                            <Button className="w-full bg-[#75B53F] hover:bg-[#75B53F]/90 transition-colors">
                              Solicitar Orçamento
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

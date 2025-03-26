"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import HomeScreen from "./HomeScreen/page";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import {
  Bug,
  Flower,
  ThermometerSun,
  SprayCan as Spray,
  ArrowRight,
  Building,
  ShoppingCart,
  Hotel,
  Coffee,
  CheckCircle2,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    image: "./imgS1.jpg",
    icon: <Spray className="h-8 w-8" />,
    title: "Limpeza",
    description:
      "Eliminação eficaz de sujeira e detritos, garantindo ambientes limpos, higienizados e o conforto do clinte.",
  },
  {
    image: "./imgS2.jpg",
    icon: <Flower className="h-8 w-8" />,
    title: "Jardinagem",
    description:
      "Cuidados especializados para manter seu jardim sempre verde e saudável, com podas e tratamentos.",
  },
  {
    image: "./imgS3.jpg",
    icon: <ThermometerSun className="h-8 w-8" />,
    title: "Climatização",
    description:
      "Soluções de climatização para ambientes agradáveis, com instalação e manutenção.",
  },
  {
    image: "./imgS4.jpg",
    icon: <Bug className="h-8 w-8" />,
    title: "Desinfestação",
    description:
      "Serviços especializados para eliminar pragas e infestantes, garantindo um ambiente seguro e saudável.",
  },
];

const infrastructures = [
  {
    icon: <Building className="h-12 w-12 text-[#75B53F]" />,
    name: "Escritórios e edifícios corporativos",
  },
  {
    icon: <ShoppingCart className="h-12 w-12 text-[#75B53F]" />,
    name: "Lojas e centros comerciais",
  },
  {
    icon: <Hotel className="h-12 w-12 text-[#75B53F]" />,
    name: "Hotéis e pousadas",
  },
  {
    icon: <Coffee className="h-12 w-12 text-[#75B53F]" />,
    name: "Restaurantes e cafés",
  },
];

const steps = [
  {
    step: 1,
    title: "Entre em Contato",
    description: "Preencha nosso formulário ou ligue para nós.",
  },
  {
    step: 2,
    title: "Avaliação",
    description: "Nossa equipe fará uma avaliação do seu espaço.",
  },
  {
    step: 3,
    title: "Orçamento",
    description: "Receba um orçamento detalhado dos serviços.",
  },
  {
    step: 4,
    title: "Execução",
    description: "Agende e acompanhe a execução dos serviços.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
      <HomeScreen />
        <div className="fixed bottom-8 right-8 z-50">
          <WhatsAppButton phoneNumber="+244944070757" />
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Nossos Serviços
            </motion.h2>
            <div className="w-24 h-1 bg-[#75B53F] mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="relative p-6 text-center hover:shadow-xl transition-all duration-300 overflow-visible bg-white/80 backdrop-blur-sm border-t-4 border-[#75B53F]" style={{borderTopLeftRadius: "80px", borderBottomRightRadius: "80px"}}>
                  <div className="relative mx-auto mb-6" style={{
                    width: "220px",
                    height: "200px",
                    marginTop: "-60px",
                  }}>
                    <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        alt={`${service.title} service`}
                        src={service.image}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="text-[#75B53F] flex justify-center mt-4 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link href={`/servicos#${service.title.toLowerCase().replace(/ /g, "-")}`}>
                    <Button
                      variant="outline"
                      className="group bg-[#018001] text-white hover:bg-[#75B53F] hover:text-white transition-all duration-300"
                    >
                      Ver Mais
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-24"
        style={{
          backgroundImage: "url('/imgSection1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-white mb-8"
              >
                Por que escolher nossos serviços?
              </motion.h2>
              {[
                "Equipe altamente capacitada e experiente",
                "Tecnologias inovadoras e sustentáveis",
                "Compromisso com a satisfação do cliente",
              ].map((note, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <CheckCircle2 className="h-8 w-8 text-[#75B53F] mr-4 flex-shrink-0" />
                  <p className="text-gray-800 font-medium">{note}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/imgConjunto.png"
                alt="Serviços ilustrativos"
                width={600}
                height={600}
                className="-mb-24 object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Client Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              O que os nossos clientes dizem
            </motion.h2>
            <div className="w-24 h-1 bg-[#75B53F] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["01.png", "02.png", "03.png", "04.png"].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={`/${image}`}
                  alt={`Testimonial ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-contain mx-auto transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Infrastructure Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-24"
        style={{
          backgroundImage: "url('/imgSection2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-white mb-8"
              >
                Infraestruturas que Operamos
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {infrastructures.map((infra, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300"
                  >
                    {infra.icon}
                    <p className="mt-4 font-medium text-gray-800">{infra.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/imgMix.png"
                alt="Infraestruturas"
                width={600}
                height={600}
                className="object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Step-by-Step Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Como Requisitar Nossos Serviços
            </motion.h2>
            <div className="w-24 h-1 bg-[#75B53F] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#75B53F]"
              >
                <div className="text-[#75B53F] text-5xl font-bold mb-6">{step.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <ScrollToTopButton />
    </>
  );
}
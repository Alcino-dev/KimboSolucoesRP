"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Bug, SprayCan as Spray, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    image: "./img_bg.jpg",
    icon: <Bug className="h-12 w-12" />,
    title: "Controle de Pragas",
    description:
      "Eliminação eficaz de insetos, roedores e outras pragas que podem comprometer seu ambiente.",
  },
  {
    image: "./img_bg.jpg",
    icon: <Spray className="h-12 w-12" />,
    title: "Desinfecção",
    description:
      "Serviços especializados de desinfecção para eliminar vírus, bactérias e outros microrganismos.",
  },
  {
    image: "./img_bg.jpg",
    icon: <Shield className="h-12 w-12" />,
    title: "Proteção Contínua",
    description:
      "Programas de manutenção preventiva para manter seu espaço protegido constantemente.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 relative h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/img_bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Yellow Diagonal Overlay */}
        <div
          className="absolute inset-0 bg-yellow-400"
          style={{
            width: "60%",
            clipPath: "polygon(0 0, 100%, 0, 100% 100%, 0 100%)",
            opacity: 0.8,
          }}
        />

<div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center relative">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-5xl font-extrabold mb-6 text-white">SEJA BEM-VINDO A</h1>
    <h1 className="text-5xl font-extrabold mb-6 text-white">KIMBO SOLUÇÕES</h1>
    <p className="text-xl text-white font-light" style={{backgroundColor: '#75B53F', height: '30px', paddingInline: '15px', marginBottom: '3px'}}>
      O nosso objetivo é proporcionar um ambiente saudável e seguro, livre de pragas,
    </p>
    <p className="text-xl text-white font-light" style={{backgroundColor: '#75B53F', height: '30px', paddingInline: '15px', marginBottom: '20px'}}>
     utilizando métodos eficazes e sustentáveis para o ambiente.
    </p>
    <div className="space-x-10">
    <Link href="/servicos">
        <Button
          size="lg"
          variant="outline"
          className="bg-black text-white border-white hover:bg-black/10"
        >
          Nossos Serviços
        </Button>
      </Link>
      <Link href="/orcamento">
        <Button
          size="lg"
          className="bg-black/20 text-white border-white hover:bg-green-600"
        >
          Pedir Orçamento
        </Button>
      </Link>
    </div>
  </motion.div>
</div>

      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="relative p-6 text-center hover:shadow-lg transition-shadow -top-40">
                  <div
                    style={{
                      top: "-60px",
                      width: "260px", 
                      height: "240px", 
                      borderRadius: "50%", 
                      overflow: "hidden", 
                      border: "4px solid #FFF", 
                      position: "relative", 
                      justifySelf: "center"
                    }}
                  >
                    <Image
                      alt="imagem do serviço"
                      src={service.image}
                      fill 
                      style={{ objectFit: "cover" }} 
                    />
                  </div>
                  <div className="mb-4 text-[#75B53F] flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={`/servicos#${service.title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    <Button variant="outline" className="group">
                      Ver Mais
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para garantir a segurança e higiene
              do seu ambiente.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
}

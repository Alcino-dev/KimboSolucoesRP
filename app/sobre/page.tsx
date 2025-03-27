"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Clock, Shield } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

const features = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Qualidade Garantida",
    description: "Utilizamos produtos de alta qualidade e técnicas aprovadas.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Equipe Especializada",
    description: "Profissionais treinados e certificados.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Atendimento 24/7",
    description: "Disponíveis quando você precisar.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Segurança Total",
    description: "Procedimentos seguros para sua tranquilidade.",
  },
];

const professionals = [
  {
    image: "/imgProf1.webp",
    title: "Climatização",
    description:
      "Soluções de climatização para ambientes agradáveis, com instalação e manutenção de sistemas de ar condicionado.",
  },
  {
    image: "/imgProf2.webp",
    title: "Jardinagem",
    description:
      "Cuidados especializados para manter seu jardim sempre verde e saudável, com podas e tratamentos.",
  },
  {
    image: "/imgProf3.webp",
    title: "Desinfestação",
    description:
      "Serviços especializados para eliminar pragas e infestantes, garantindo um ambiente seguro e saudável.",
  },
  {
    image: "/imgProf4.webp",
    title: "Limpeza",
    description:
      "Eliminação eficaz de sujeira e detritos, garantindo ambientes limpos, higienizados e o conforto do cliente.",
  },
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[500px] -mt-20">
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
              src="/imgSobre.webp"
              alt="Sobre a KIMBO Soluções"
              fill
              className="object-cover brightness-[0.7]"
              priority
              sizes="100vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjQ4OEQ4LjE1REVHS1NTW1xfXkVnaWVsbUVbW1v/2wBDARUXFx4aHR4eHVtTQlNbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </motion.div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10 text-white top-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sobre Nós
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Garantimos soluções eficientes para promover ambientes mais
              seguros, saudáveis e bem cuidados, sempre com qualidade e
              inovação.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h2 className="text-4xl font-bold">CEO</h2>
            <p className="text-xl text-gray-600 italic">
              &quot;Nossa missão é transformar ambientes com soluções
              inovadoras, garantindo mais segurança, saúde e bem-estar para
              todos&quot;
            </p>
            <p className="text-2xl text-[#75B53F] font-semibold">
              Adilson Candondo
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-[#75B53F]/10 text-[#75B53F] rounded-full p-4 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fundada em 2018, a KIMBO Soluções nasceu com a missão de
                  proporcionar ambientes mais seguros, saudáveis e bem cuidados
                  para nossos clientes.
                </p>
                <p>
                  Ao longo dos anos, desenvolvemos expertise em controle de
                  pragas, desinfecção, limpeza, climatização, desinfestação e
                  jardinagem, oferecendo soluções completas para residências,
                  empresas e instituições.
                </p>
                <p>
                  Hoje, somos reconhecidos como líderes no mercado, atendendo
                  residências, empresas e instituições com o mesmo compromisso
                  de excelência que nos trouxe até aqui.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] w-[400px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Logo.webp"
                alt="KIMBO Soluções"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold">Nossos Profissionais em Ação</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionals.map((professional, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={professional.image}
                    alt={professional.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {professional.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {professional.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

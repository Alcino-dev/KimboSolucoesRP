"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Clock, Shield } from "lucide-react";

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
    image: "/imgProf1.jpg",
    title: "Climatização",
    description:
      "Soluções de climatização para ambientes agradáveis, com instalação e manutenção de sistemas de ar condicionado.",
  },
  {
    image: "/imgProf2.jpg",
    title: "Jardinagem",
    description:
      "Cuidados especializados para manter seu jardim sempre verde e saudável, com podas e tratamentos.",
  },
  {
    image: "/imgProf3.jpg",
    title: "Desinfestação",
    description:
      "Serviços especializados para eliminar pragas e infestantes, garantindo um ambiente seguro e saudável.",
  },
  {
    image: "/imgProf4.jpg",
    title: "Limpeza",
    description:
      "Eliminação eficaz de sujeira e detritos, garantindo ambientes limpos, higienizados e o conforto do cliente.",
  },
];

export default function Sobre() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="-top-20 relative text-white py-20"
        style={{
          backgroundImage: "url('/imgSobre.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            <h1
              className="text-6xl font-bold mb-6 text-left ml-4"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Sobre Nós
            </h1>
            <p
              className="text-xl max-w-xl text-left ml-4"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Garantimos soluções eficientes para promover ambientes mais seguros, saudáveis e bem cuidados, sempre com qualidade e inovação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-2">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-2 text-center"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            CEO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-4xl mx-auto text-center mb-4 italic"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            &quot;Nossa missão é transformar ambientes com soluções inovadoras,
            garantindo mais segurança, saúde e bem-estar para todos&quot;
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl max-w-4xl mx-auto text-center mb-16"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            Adilson Candondo
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-[#75B53F] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                Fundada em 2018, a KIMBO Soluções nasceu com a missão de
                proporcionar ambientes mais seguros, saudáveis e bem cuidados
                para nossos clientes. Ao longo dos anos, desenvolvemos expertise
                em controle de pragas, desinfecção, limpeza, climatização,
                desinfestação e jardinagem, oferecendo soluções completas para
                residências, empresas e instituições. Com um compromisso
                contínuo com a excelência e a inovação, nos tornamos referência
                no mercado, garantindo ambientes protegidos, higienizados e
                confortáveis para todos os nossos clientes.
              </p>
              <p className="text-gray-600">
                Hoje, somos reconhecidos como líderes no mercado, atendendo
                residências, empresas e instituições com o mesmo compromisso de
                excelência que nos trouxe até aqui.
              </p>
            </div>
            <div className="relative h-[300px] min-w-20 min-h-20">
              <Image
                src="/Logo.jpg"
                alt="Equipe KIMBO em ação"
                fill
                className="rounded-lg object-cover min-w-20 min-h-20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Nossos Profissionais em Ação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionals.map((professional, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="relative h-[200px] mb-4">
                  <Image
                    src={professional.image}
                    alt={professional.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{professional.title}</h3>
                <p className="text-gray-600">{professional.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

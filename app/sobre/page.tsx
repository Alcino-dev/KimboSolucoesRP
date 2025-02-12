'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Users, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Qualidade Garantida',
    description: 'Utilizamos produtos de alta qualidade e técnicas aprovadas.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Equipe Especializada',
    description: 'Profissionais treinados e certificados.',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Atendimento 24/7',
    description: 'Disponíveis quando você precisar.',
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Segurança Total',
    description: 'Procedimentos seguros para sua tranquilidade.',
  },
];

export default function Sobre() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#75B53F] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Sobre Nós</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Há mais de uma década, a KIMBO Soluções tem sido líder em serviços de pulverização
              e desinfecção, garantindo ambientes seguros e saudáveis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
                Fundada em 2010, a KIMBO Soluções nasceu com a missão de proporcionar ambientes
                mais seguros e saudáveis para nossos clientes. Ao longo dos anos, desenvolvemos
                expertise em diversas áreas de controle de pragas e desinfecção.
              </p>
              <p className="text-gray-600">
                Hoje, somos reconhecidos como líderes no mercado, atendendo residências, empresas
                e instituições com o mesmo compromisso de excelência que nos trouxe até aqui.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Equipe KIMBO em ação"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
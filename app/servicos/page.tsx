'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bug, SprayCan, Shield, ArrowRight, Brush as Virus, Home } from 'lucide-react';

const services = [
  {
    id: 'controle-de-pragas',
    icon: <Bug className="h-12 w-12" />,
    title: 'Controle de Pragas',
    description: 'Eliminação eficaz de insetos, roedores e outras pragas que podem comprometer seu ambiente.',
    fullDescription: `Nosso serviço de controle de pragas utiliza métodos seguros e eficazes para eliminar e prevenir infestações. 
    Realizamos uma avaliação completa do ambiente, identificamos os pontos críticos e aplicamos soluções personalizadas para cada situação.`,
    image: 'https://images.unsplash.com/photo-1632904217140-90c7f0b3a9ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: 'desinfeccao',
    icon: <SprayCan className="h-12 w-12" />,
    title: 'Desinfecção',
    description: 'Serviços especializados de desinfecção para eliminar vírus, bactérias e outros microrganismos.',
    fullDescription: `Utilizamos produtos de alta qualidade e equipamentos modernos para garantir a eliminação de vírus, 
    bactérias e outros microrganismos. Ideal para escritórios, clínicas, escolas e residências.`,
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: 'protecao-continua',
    icon: <Shield className="h-12 w-12" />,
    title: 'Proteção Contínua',
    description: 'Programas de manutenção preventiva para manter seu espaço protegido constantemente.',
    fullDescription: `Desenvolvemos programas de manutenção preventiva personalizados para garantir a proteção contínua do seu ambiente. 
    Inclui visitas regulares, monitoramento e ações preventivas.`,
    image: 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: 'sanitizacao-residencial',
    icon: <Home className="h-12 w-12" />,
    title: 'Sanitização Residencial',
    description: 'Limpeza profunda e sanitização de ambientes residenciais para maior segurança.',
    fullDescription: `Serviço completo de sanitização para residências, garantindo um ambiente mais seguro e saudável para sua família. 
    Utilizamos produtos específicos para cada tipo de superfície.`,
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: 'controle-de-virus',
    icon: <Virus className="h-12 w-12" />,
    title: 'Controle de Vírus',
    description: 'Tratamento especializado para eliminação de vírus em ambientes fechados.',
    fullDescription: `Serviço especializado em eliminar e prevenir a proliferação de vírus em ambientes fechados. 
    Ideal para períodos de maior risco de contaminação.`,
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
];

export default function Servicos() {
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
            <h1 className="text-4xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços de pulverização e desinfecção
              para garantir a segurança e bem-estar em qualquer ambiente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                id={service.id}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 text-[#75B53F] flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-gray-600 mb-4">{service.fullDescription}</p>
                    <Link href="/orcamento">
                      <Button className="w-full bg-[#75B53F] hover:bg-green-600">
                        Solicitar Serviço
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
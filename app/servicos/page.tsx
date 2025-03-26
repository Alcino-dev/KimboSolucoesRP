'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bug, Flower, ThermometerSun, SprayCan as Spray, ArrowRight } from 'lucide-react';

// Define TypeScript interfaces for type safety
interface ServiceDetail {
  title: string;
  description: string;
  image: string;
  details: string[];
}

interface ServiceCategory {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  services: ServiceDetail[];
}

const categories: ServiceCategory[] = [
  {
    id: 'limpeza',
    icon: <Spray className="h-12 w-12" />,
    title: 'Limpeza',
    description: 'Eliminação eficaz de sujeira e detritos, garantindo ambientes limpos e higienizados.',
    image: '/images/services/limpeza.jpg',
    services: [
      {
        title: 'Higienização e Sanitização',
        description: 'Serviços especializados para garantir a higienização e sanitização de ambientes.',
        image: '/images/services/serv1.jpg',
        details: [
          'Desinfecção de superfícies',
          'Sanitização de ambientes',
          'Tratamento anti-bacteriano',
          'Controle de odores'
        ]
      },
      {
        title: 'Limpeza Comercial',
        description: 'Serviços completos de limpeza para estabelecimentos comerciais.',
        image: '/images/services/serv2.jpg',
        details: [
          'Limpeza de escritórios',
          'Manutenção de áreas comuns',
          'Limpeza de vidros e fachadas',
          'Conservação de pisos'
        ]
      },
      {
        title: 'Limpeza Residencial',
        description: 'Serviços personalizados de limpeza para sua residência.',
        image: '/images/services/serv3.jpg',
        details: [
          'Limpeza geral',
          'Limpeza de carpetes e estofados',
          'Limpeza de janelas',
          'Organização de ambientes'
        ]
      }
    ]
  },
  {
    id: 'jardinagem',
    icon: <Flower className="h-12 w-12" />,
    title: 'Jardinagem',
    description: 'Serviços completos de jardinagem para manter seus espaços verdes bonitos e saudáveis.',
    image: '/images/services/jardinagem.jpg',
    services: [
      {
        title: 'Projeto e Implantação',
        description: 'Criação e execução de projetos paisagísticos personalizados.',
        image: '/images/services/serv4.jpg',
        details: [
          'Design de jardins',
          'Seleção de plantas',
          'Sistemas de irrigação',
          'Iluminação paisagística'
        ]
      },
      {
        title: 'Manutenção de Jardins',
        description: 'Cuidados regulares para manter seu jardim sempre bonito.',
        image: '/images/services/serv5.jpg',
        details: [
          'Poda de plantas',
          'Controle de pragas',
          'Adubação',
          'Corte de grama'
        ]
      }
    ]
  },
  {
    id: 'climatizacao',
    icon: <ThermometerSun className="h-12 w-12" />,
    title: 'Climatização',
    description: 'Soluções completas em climatização para seu conforto térmico.',
    image: '/images/services/climatizacao.jpg',
    services: [
      {
        title: 'Instalação de Sistemas',
        description: 'Instalação profissional de equipamentos de climatização.',
        image: '/images/services/serv6.jpg',
        details: [
          'Instalação de ar-condicionado',
          'Dimensionamento de sistemas',
          'Instalação de dutos',
          'Configuração de controles'
        ]
      },
      {
        title: 'Manutenção Preventiva',
        description: 'Serviços regulares para prevenir problemas e maximizar eficiência.',
        image: '/images/services/serv7.jpg',
        details: [
          'Limpeza de filtros',
          'Verificação de gás',
          'Limpeza de componentes',
          'Ajustes de performance'
        ]
      },
      {
        title: 'Manutenção Corretiva',
        description: 'Soluções rápidas para problemas de climatização.',
        image: '/images/services/serv8.jpg',
        details: [
          'Diagnóstico de falhas',
          'Reparo de componentes',
          'Substituição de peças',
          'Correção de vazamentos'
        ]
      }
    ]
  },
  {
    id: 'desinfestacao',
    icon: <Bug className="h-12 w-12" />,
    title: 'Desinfestação',
    description: 'Controle eficaz de pragas para um ambiente seguro e saudável.',
    image: '/images/services/desinfestacao.jpg',
    services: [
      {
        title: 'Controle de Roedores',
        description: 'Eliminação e prevenção contra ratos e outros roedores.',
        image: '/images/services/serv9.jpg',
        details: [
          'Identificação de focos',
          'Instalação de barreiras',
          'Controle químico',
          'Monitoramento contínuo'
        ]
      },
      {
        title: 'Controle de Insetos',
        description: 'Combate eficaz a diferentes tipos de insetos.',
        image: '/images/services/serv10.jpg',
        details: [
          'Controle de baratas',
          'Eliminação de formigas',
          'Combate a cupins',
          'Prevenção de infestações'
        ]
      },
      {
        title: 'Sanitização Ambiental',
        description: 'Tratamento completo para ambientes mais saudáveis.',
        image: '/images/services/serv11.jpg',
        details: [
          'Desinfecção de ambientes',
          'Controle de microorganismos',
          'Tratamento preventivo',
          'Certificação sanitária'
        ]
      }
    ]
  }
];

export default function Servicos() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSelectedCategory(categoryId);
    }
  };

  return (     
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative text-white py-28 -top-20"
        style={{
          backgroundImage: "url('/fundoSection.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 top-10">
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
              Nossos Serviços
            </h1>
            <p
              className="text-xl max-w-xl text-left ml-4"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Nossos serviços são pensados para atender a diferentes necessidades e orçamentos, sempre com qualidade, eficiência e inovação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Navigation */}
      <div className="container mx-auto px-4 mb-10">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button 
              key={category.id}
              variant="outline" 
              onClick={() => scrollToCategory(category.id)}
              className={`
                ${selectedCategory === category.id 
                  ? 'bg-[#75B53F] text-white' 
                  : 'bg-white text-[#75B53F] hover:bg-[#75B53F]/10'
                }
              `}
            >
              {category.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <section className="-py-28">
        <div className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 gap-16">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                id={category.id}
                className="space-y-8"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-[#75B53F]">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-center">{category.title}</h2>
                </div>
                <p className="text-xl text-gray-600 text-center">{category.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service) => (
                    <Card 
                      key={service.title} 
                      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.details.map((detail, detailIndex) => (
                            <li 
                              key={detailIndex} 
                              className="flex items-center text-gray-600 hover:text-[#75B53F] transition-colors"
                            >
                              <span className="w-2 h-2 bg-[#75B53F] rounded-full mr-2"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link href={`/orcamento?service=${category.id}`} className="flex-1">
                            <Button className="w-full bg-[#75B53F] hover:bg-[#e2ba00] transition-colors">
                              Pedir Orçamento
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
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
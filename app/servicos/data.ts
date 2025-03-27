import { Bug, Flower, ThermometerSun, SprayCan as Spray, ArrowRight } from 'lucide-react';

import { ServiceCategory } from './types';
import React from 'react';

export const categories: ServiceCategory[] = [
  {
    id: 'limpeza',
    icon: React.createElement(Spray, { className: "h-12 w-12" }),
    title: 'Limpeza',
    description: 'Eliminação eficaz de sujeira e detritos, garantindo ambientes limpos e higienizados.',
    image: '/limpeza.webp',
    services: [
      {
        title: 'Higienização e Sanitização',
        description: 'Serviços especializados para garantir a higienização e sanitização de ambientes.',
        image: '/serv1.webp',
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
        image: '/serv2.webp',
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
        image: '/serv3.webp',
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
    icon: React.createElement(Flower, { className: "h-12 w-12" }),
    title: 'Jardinagem',
    description: 'Serviços completos de jardinagem para manter seus espaços verdes bonitos e saudáveis.',
    image: '/jardinagem.webp',
    services: [
      {
        title: 'Projeto e Implantação',
        description: 'Criação e execução de projetos paisagísticos personalizados.',
        image: '/serv4.webp',
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
        image: '/serv5.webp',
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
    icon: React.createElement(ThermometerSun, { className: "h-12 w-12" }),
    title: 'Climatização',
    description: 'Soluções completas em climatização para seu conforto térmico.',
    image: '/climatizacao.webp',
    services: [
      {
        title: 'Instalação de Sistemas',
        description: 'Instalação profissional de equipamentos de climatização.',
        image: '/serv6.webp',
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
        image: '/serv7.webp',
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
        image: '/serv8.webp',
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
    icon: React.createElement(Bug, { className: "h-12 w-12" }),
    title: 'Desinfestação',
    description: 'Controle eficaz de pragas para um ambiente seguro e saudável.',
    image: '/desinfestacao.webp',
    services: [
      {
        title: 'Controle de Roedores',
        description: 'Eliminação e prevenção contra ratos e outros roedores.',
        image: '/serv9.webp',
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
        image: '/serv10.webp',
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
        image: '/serv11.webp',
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

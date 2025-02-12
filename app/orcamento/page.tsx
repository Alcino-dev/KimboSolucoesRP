'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const services = [
  { id: 'controle-pragas', label: 'Controle de Pragas' },
  { id: 'desinfeccao', label: 'Desinfecção' },
  { id: 'protecao-continua', label: 'Proteção Contínua' },
  { id: 'sanitizacao-residencial', label: 'Sanitização Residencial' },
  { id: 'controle-virus', label: 'Controle de Vírus' },
];

export default function Orcamento() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      toast.error('Por favor, selecione pelo menos um serviço.');
      return;
    }
    toast.success('Orçamento solicitado com sucesso! Entraremos em contato em breve.');
  };

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
            <h1 className="text-4xl font-bold mb-6">Solicitar Orçamento</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Preencha o formulário abaixo para receber um orçamento personalizado
              para os serviços que você precisa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Informações Pessoais</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" required />
                  </div>
                  <div>
                    <Label htmlFor="address">Endereço</Label>
                    <Input id="address" required />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Selecione os Serviços</h2>
                <div className="space-y-3">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={service.id}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={(checked) => {
                          setSelectedServices(
                            checked
                              ? [...selectedServices, service.id]
                              : selectedServices.filter((id) => id !== service.id)
                          );
                        }}
                      />
                      <Label htmlFor={service.id}>{service.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="details">Detalhes Adicionais</Label>
                <Textarea
                  id="details"
                  placeholder="Descreva mais detalhes sobre sua necessidade..."
                  className="min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full bg-[#75B53F] hover:bg-green-600">
                Solicitar Orçamento
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
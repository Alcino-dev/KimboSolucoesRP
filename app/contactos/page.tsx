'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contactos() {
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
            <h1 className="text-4xl font-bold mb-6">Entre em Contacto</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Estamos aqui para ajudar. Entre em contacto conosco para mais informações
              sobre nossos serviços ou para agendar uma visita.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h2>
              <form className="space-y-6">
                <div>
                  <Input placeholder="Nome Completo" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
                <div>
                  <Input placeholder="Telefone" />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-[#75B53F] hover:bg-green-600">
                  Enviar Mensagem
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações de Contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-[#75B53F]" />
                    <div>
                      <p className="font-semibold">Telefone</p>
                      <p className="text-gray-600">+244 923 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-[#75B53F]" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@kimbo.co.ao</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-[#75B53F]" />
                    <div>
                      <p className="font-semibold">Endereço</p>
                      <p className="text-gray-600">Luanda, Angola</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[300px] bg-gray-200 rounded-lg">
                {/* Add your map component here */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Mapa será carregado aqui
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
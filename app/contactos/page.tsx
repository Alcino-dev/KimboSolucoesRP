"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section
        className="-top-20 relative text-white py-32"
        style={{
          backgroundImage: "url('/fundoSectionContacto.jpg')",
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
              Entre em Contacto Connosco
            </h1>
            <p
              className="text-xl max-w-xl text-left ml-4"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
             Nossa equipa está sempre disposta a atender qualquer questão ou interesse, sinta-se livre. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Envie-nos uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#75B53F] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#75B53F] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#75B53F] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#75B53F] focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#75B53F] text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#68a238] transition-colors"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensagem</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Informações de Contacto</h2>
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-[#75B53F]/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#75B53F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Telefone</p>
                      <p className="text-gray-600">+244 944 070 757</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-[#75B53F]/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-[#75B53F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">servicoskimbo@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-[#75B53F]/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#75B53F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Endereço</p>
                      <p className="text-gray-600">Luanda, Angola</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="bg-[#75B53F]/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-[#75B53F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Horário de Funcionamento</p>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 17h</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Map */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-[300px] rounded-2xl overflow-hidden shadow-lg"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.760793501198!2d13.1931343!3d-8.9007494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f4dd95d20e63%3A0x76dce0bab8363255!2sR.%20D%20do%20Morro%20Bento%2C%20Luanda%2C%20Angola!5e0!3m2!1sen!2sus!4v1697041234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Localização"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
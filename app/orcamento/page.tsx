"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Bug,
  Flower,
  ThermometerSun,
  SprayCan as Spray,
  Send,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";
import Modal from "react-modal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

const services = [
  {
    id: "Limpeza",
    label: "Limpeza",
    icon: <Spray className="h-12 w-12" />,
  },
  {
    id: "Jardinagem",
    label: "Jardinagem",
    icon: <Flower className="h-12 w-12" />,
  },
  {
    id: "Desinfestacao",
    label: "Desinfestação",
    icon: <ThermometerSun className="h-12 w-12" />,
  },
  {
    id: "Climatizacao",
    label: "Climatização",
    icon: <Bug className="h-12 w-12" />,
  },
];

function App() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    const isOutside = Object.values(cardRefs.current).every(
      (ref) => ref && !ref.contains(target)
    );
    if (isOutside) {
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      toast.error("Por favor, selecione pelo menos um serviço.");
      return;
    }

    setLoading(true);
    setModalIsOpen(true);

    const emailData = {
      ...formData,
      services: selectedServices,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setSuccess(true);
        toast.success("Email enviado com sucesso!");
      } else {
        const errorData = await response.json();
        toast.error(`Erro ao enviar email: ${errorData.message}`);
      }
    } catch (error) {
      toast.error("Erro ao enviar email.");
    } finally {
      setLoading(false);
      setTimeout(() => setModalIsOpen(false), 4000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceClick = (serviceId: string) => {
    setSelectedServices((prevSelectedServices) =>
      prevSelectedServices.includes(serviceId)
        ? prevSelectedServices.filter((id) => id !== serviceId)
        : [...prevSelectedServices, serviceId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <section
        className="-top-20 relative text-white py-28"
        style={{
          backgroundImage: "url('/fundoOrcamento.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="fixed bottom-8 right-8 z-50">
          <WhatsAppButton phoneNumber="+244944070757" />

          <ScrollToTopButton />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 top-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Solicite seu Orçamento</h1>
            <p className="text-xl opacity-90">
              Transforme seu ambiente em um espaço mais seguro e saudável com
              nossos serviços especializados
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Selecione o Serviço
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <motion.div
                  key={service.id}
                  ref={(el) => (cardRefs.current[service.id] = el)}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-colors ${
                    isSelected
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                  onClick={() => handleServiceClick(service.id)}
                >
                  {service.icon}
                  <h3 className="text-xl font-bold mt-4">{service.label}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Informações de Contato
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Endereço
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Detalhes Adicionais
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[120px]"
                  placeholder="Descreva mais detalhes sobre sua necessidade..."
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  "Processando..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Solicitar Orçamento
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Processing Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          {loading ? (
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="mb-4"
              >
                <Send className="w-12 h-12 text-green-500" />
              </motion.div>
              <p className="text-lg font-semibold">Processando...</p>
            </div>
          ) : success ? (
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <p className="text-lg font-semibold">
                Email enviado com sucesso! <br />
            Responderemos seu email assim que possível.
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold">Erro ao enviar email.</p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default App;

"use client";

import { Phone, Mail, MapPin, Clock, Building2, Users2, Trophy, Target } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

const stats = [
  {
    icon: <Building2 className="h-8 w-8" />,
    value: "1000+",
    label: "Projetos Concluídos",
  },
  {
    icon: <Users2 className="h-8 w-8" />,
    value: "500+",
    label: "Clientes Satisfeitos",
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    value: "5",
    label: "Anos de Experiência",
  },
  {
    icon: <Target className="h-8 w-8" />,
    value: "100%",
    label: "Comprometimento",
  },
];

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="fixed bottom-8 right-8 z-50 space-y-4">
        <WhatsAppButton phoneNumber="+244944070757" />
        <ScrollToTopButton />
      </div>

      <section className="relative h-[500px] -mt-20">
        <div className="absolute inset-0">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full"
          >
          <Image
            src="/fundoSectionContacto.webp"
            alt="Contacto KIMBO Soluções"
            fill
            className="object-cover brightness-[0.7]"
            priority
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjQ4OEQ4LjE1REVHS1NTW1xfXkVnaWVsbUVbW1v/2wBDARUXFx4aHR4eHVtTQlNbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </motion.div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10 top-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white pl-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Entre em Contacto
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Nossa equipe está sempre disposta a atender suas necessidades e proporcionar as melhores soluções para seu ambiente.
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
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-wrap md:flex-nowrap">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className={`flex-1 p-8 text-center ${
                    index < stats.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''
                  } border-gray-100`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="bg-[#75B53F]/10 text-[#75B53F] rounded-full p-4 inline-flex mb-4"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.3 }}
                    className="text-4xl font-bold mb-2 text-gray-900"
                  >
                    {stat.value}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.4 }}
                    className="text-gray-600"
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-8 space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                  Informações de Contacto
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
                  >
                    <div className="bg-[#75B53F]/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-[#75B53F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefone</p>
                      <p className="text-gray-600">+244 944 070 757</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
                  >
                    <div className="bg-[#75B53F]/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-[#75B53F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">servicoskimbo@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
                  >
                    <div className="bg-[#75B53F]/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-[#75B53F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Endereço</p>
                      <p className="text-gray-600">Luanda, Angola</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
                  >
                    <div className="bg-[#75B53F]/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-[#75B53F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Horário</p>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 17h</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.760793501198!2d13.1931343!3d-8.9007494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f4dd95d20e63%3A0x76dce0bab8363255!2sR.%20D%20do%20Morro%20Bento%2C%20Luanda%2C%20Angola!5e0!3m2!1sen!2sus!4v1697041234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Localização KIMBO Soluções"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#75B53F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KIMBO Soluções</h3>
            <p className="text-sm">
              Especialistas em pulverização e desinfetação, garantindo ambientes livres de pragas,
              bactérias e vírus.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-yellow-300 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-yellow-300 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-yellow-300 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="hover:text-yellow-300 transition-colors">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contactos</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+244 923 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@kimbo.co.ao</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Luanda, Angola</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300 transition-colors"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t bg-yellow-400 text-center">
          <p>&copy; {new Date().getFullYear()} KIMBO Soluções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
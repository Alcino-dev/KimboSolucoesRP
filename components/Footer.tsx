"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, X, Linkedin, Mail, ChevronUp, Phone, MapPin } from 'lucide-react';

const privacyPolicyText = `
Política de Privacidade

Bem-vindo à KIMBO Soluções. Estamos comprometidos em proteger sua privacidade. Esta política de privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais.

1. Coleta de Informações
   - Coletamos informações pessoais que você nos fornece diretamente, como nome, endereço de e-mail e número de telefone.
   - Também coletamos informações automaticamente quando você usa nossos serviços, como endereço IP, tipo de navegador e páginas visitadas.

2. Uso das Informações
   - Utilizamos suas informações pessoais para fornecer e melhorar nossos serviços, responder às suas solicitações e enviar comunicações relevantes.
   - Podemos usar suas informações para fins de marketing, mas você pode optar por não receber essas comunicações a qualquer momento.

3. Compartilhamento de Informações
   - Não compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para fornecer nossos serviços ou conforme exigido por lei.
   - Podemos compartilhar informações agregadas e anônimas para fins de análise e marketing.

4. Segurança das Informações
   - Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
   - No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro, e não podemos garantir a segurança absoluta.

5. Seus Direitos
   - Você tem o direito de acessar, corrigir ou excluir suas informações pessoais que mantemos.
   - Você também pode se opor ao processamento de suas informações pessoais ou solicitar a restrição do processamento.

6. Alterações a Esta Política
   - Podemos atualizar esta política de privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política em nosso site.

Se você tiver alguma dúvida sobre nossa política de privacidade, entre em contato conosco em servicoskimbo@gmail.com.

Última atualização: 24/03/2025
`;

const termsOfUseText = `
Termos de Uso

Bem-vindo à KIMBO Soluções. Ao acessar e usar nossos serviços, você concorda em cumprir os seguintes termos de uso.

1. Aceitação dos Termos
   - Ao usar nossos serviços, você concorda com estes termos de uso. Se você não concorda com algum termo, não use nossos serviços.

2. Uso dos Serviços
   - Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes termos.
   - Você não pode usar nossos serviços para qualquer atividade ilegal, fraudulenta ou prejudicial.

3. Propriedade Intelectual
   - Todo o conteúdo e materiais disponíveis em nossos serviços, incluindo textos, gráficos, logotipos e imagens, são de propriedade da KIMBO Soluções ou de seus licenciadores.
   - Você não pode reproduzir, distribuir ou criar trabalhos derivados de qualquer conteúdo sem nossa permissão expressa por escrito.

4. Limitação de Responsabilidade
   - Nossos serviços são fornecidos "como estão" e "conforme disponíveis". Não garantimos que nossos serviços serão ininterruptos, livres de erros ou seguros.
   - Não seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou incapacidade de usar nossos serviços.

5. Modificações aos Termos
   - Podemos modificar estes termos de uso a qualquer momento. Notificaremos você sobre quaisquer alterações publicando os novos termos em nosso site.
   - Seu uso continuado de nossos serviços após a publicação das alterações constitui sua aceitação dos novos termos.

6. Lei Aplicável
   - Estes termos de uso serão regidos e interpretados de acordo com as leis de [País/Estado], sem considerar seus conflitos de disposições legais.

Se você tiver alguma dúvida sobre nossos termos de uso, entre em contato conosco em servicoskimbo@gmail.com.

Última atualização: 24/03/2025
`;

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [modalText, setModalText] = useState<string>('');

  const socialLinks: [React.ComponentType<{ className?: string }>, string][] = [
    [Facebook, 'https://www.facebook.com/profile.php?id=100076839086708'], 
    [Instagram, 'https://www.instagram.com/servicoskimbo/'], 
    [X, 'https://x.com/KimboServicos?t=eWJjrer1wnXHbcLJvBrl0Q&s=09'], 
    [Linkedin, 'https://www.linkedin.com/in/kimbo-solu%C3%A7%C3%B5es-246b4a27b/']
  ];

  const contactInfo: [React.ComponentType<{ className?: string }>, string][] = [
    [Phone, '+244 944 070 757'], 
    [Mail, 'servicoskimbo@gmail.com'], 
    [MapPin, 'Luanda, Angola']
  ];

  const openModal = (content: string) => {
    setModalContent(content);
    if (content === 'Política de Privacidade') {
      setModalText(privacyPolicyText);
    } else if (content === 'Termos de Uso') {
      setModalText(termsOfUseText);
    }
  };

  const closeModal = () => {
    setModalContent(null);
    setModalText('');
  };

  return (
    <footer className="relative bg-black text-white">
      {/* Texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Green gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #75B53F 0%, #2D5A27 100%)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-[#75B53F]">KIMBO Soluções</h3>
            <p className="text-gray-300 leading-relaxed">
              Especialistas em pulverização e desinfetação, garantindo ambientes livres de pragas,
              bactérias e vírus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[['Início', '/'], ['Sobre', '/sobre'], ['Serviços', '/servicos'], ['Contactos', '/contactos']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-300 hover:text-[#75B53F] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contactos</h3>
            <ul className="space-y-2">
              {contactInfo.map(([Icon, text], index) => (
                <li key={index} className="flex items-center gap-3 text-gray-50">
                  <Icon className="h-5 w-5 text-[#75B53F]" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {socialLinks.map(([Icon, href], index) => (
                <a 
                  key={index} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#75B53F] transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-6 w-6 text-[#75B53F]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="mt-12 pt-8 border-t border-gray-500">
          <div className="text-center mb-4">
            <button onClick={() => setShowPrivacy(!showPrivacy)} className="flex items-center gap-2 mx-auto text-gray-400 hover:text-white transition-colors">
              Políticas e Termos
              <ChevronUp className={`transition-transform duration-300 ${showPrivacy ? 'rotate-180' : ''}`} size={16} />
            </button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden transition-all duration-500 ease-in-out ${showPrivacy ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-2">
              <h4 className="text-white font-semibold">Política de Privacidade</h4>
              <p className="text-sm">Nossa política de privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.</p>
              <button onClick={() => openModal('Política de Privacidade')} className="text-[#0095DA] hover:underline text-sm">Ler mais</button>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-semibold">Termos de Uso</h4>
              <p className="text-sm">Nossos termos de uso estabelecem as regras e condições para utilização dos nossos serviços.</p>
              <button onClick={() => openModal('Termos de Uso')} className="text-[#0095DA] hover:underline text-sm">Ler mais</button>
            </div>
          </div>
          <p className="text-center text-sm mt-8">© {new Date().getFullYear()} KIMBO Soluções. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white p-8 rounded-lg max-w-lg w-full max-h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">{modalContent}</h2>
            <pre className="text-gray-700 whitespace-pre-wrap">{modalText}</pre>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-[#75B53F] text-white rounded hover:bg-[#2D5A27] transition-colors">Fechar</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
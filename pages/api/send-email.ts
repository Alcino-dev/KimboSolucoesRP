import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const servicesList = [
  { 
    id: 'Limpeza', 
    label: 'Limpeza',
    subServices: [
      { id: 'HigienizacaoSanitizacao', label: 'Higienização e Sanitização' },
      { id: 'LimpezaComercial', label: 'Limpeza Comercial' },
      { id: 'LimpezaResidencial', label: 'Limpeza Residencial' }
    ]
  },
  { 
    id: 'Jardinagem', 
    label: 'Jardinagem',
    subServices: [
      { id: 'ProjetoImplantacao', label: 'Projeto e Implantação' },
      { id: 'ManutencaoJardins', label: 'Manutenção de Jardins' }
    ]
  },
  { 
    id: 'Desinfestacao', 
    label: 'Desinfestação',
    subServices: [
      { id: 'ControleRoedores', label: 'Controle de Roedores' },
      { id: 'ControleInsetos', label: 'Controle de Insetos' },
      { id: 'SanitizacaoAmbiental', label: 'Sanitização Ambiental' }
    ]
  },
  { 
    id: 'Climatizacao', 
    label: 'Climatização',
    subServices: [
      { id: 'InstalacaoSistemas', label: 'Instalação de Sistemas' },
      { id: 'ManutencaoPreventiva', label: 'Manutenção Preventiva' },
      { id: 'ManutencaoCorretiva', label: 'Manutenção Corretiva' }
    ]
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, address, details, services } = req.body;

    const formattedServices = services
      .map((serviceId: string) => {
        const serviceData = servicesList.find(s => s.id === serviceId);
        return serviceData ? `• ${serviceData.label}` : null;
      })
      .filter(Boolean)
      .join('\n');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'alcinojaimefernandes@gmail.com',
        pass: 'xxmz dfap expx pwyb' 
      }
    });

    const mailOptions = {
      to: 'kimbopedidos@gmail.com',
      subject: 'Solicitação de Orçamento',
      text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Endereço: ${address}
        
        --Serviços Selecionados-------------------------------

        ${formattedServices ? formattedServices : 'Nenhum serviço selecionado.'}

        --Detalhes--------------------------------------------
        
        ${details}
      `
    };

    try {
      console.log('Sending email with options:', mailOptions);
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email enviado com sucesso' });
    } catch (error) {
      console.error('Error sending email:', error); 
      res.status(500).json({ message: 'Erro ao enviar email', error: (error as any).message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}

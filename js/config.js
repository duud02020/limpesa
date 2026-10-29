/**
 * Brilho Total Limpeza - Arquivo de Configuração Centralizada
 * 
 * Informações reais de atendimento, contatos e serviços da empresa.
 */

const SITE_CONFIG = {
  // Informações da Empresa
  company: {
    name: "Brilho Total Limpeza",
    tagline: "Limpeza Predial, Organização de Closet e Limpeza Pós-Obra",
    description: "Serviços especializados em limpeza predial para condomínios, organização profissional de closets e higienização técnica pós-obra com alto padrão de qualidade e pontualidade.",
    isDemo: false
  },

  // Configurações de Contato e WhatsApp
  contact: {
    // WhatsApp Principal da Empresa
    whatsappRaw: "5511961816663",
    whatsappFormatted: "(11) 96181-6663",
    
    // Telefone / WhatsApp de Emergência
    emergencyRaw: "5511986412651",
    emergencyFormatted: "(11) 98641-2651",
    
    // E-mail de Contato
    email: "marcelaingridy@hotmail.com",
    
    // Horário de atendimento
    businessHours: "Segunda a Sábado, das 07:30 às 19:00 (Plantão de Emergência Disponível)",
    
    // Região de atendimento
    serviceArea: "São Paulo - Capital, Região Metropolitana, Alphaville e Grande ABC",
    
    // Endereço / Referência de Atendimento
    addressReference: "São Paulo - SP (Atendimento presencial em condomínios, residências e obras)",

    // Mensagem padrão ao clicar no WhatsApp principal
    defaultMessage: "Olá! Gostaria de solicitar um orçamento com a Brilho Total Limpeza."
  },

  // Serviços Oferecidos
  services: [
    {
      id: "predial",
      title: "Limpeza Predial",
      badge: "Condomínios & Edifícios",
      shortDescription: "Higienização completa e conservação de áreas comuns para condomínios residenciais e comerciais.",
      image: "assets/images/predial.jpg",
      items: [
        "Halls de entrada, portarias e recepções",
        "Corredores, escadarias e elevadores",
        "Salões de festas, academias e áreas de lazer",
        "Garagens, vidros de fachada e rotinas de manutenção"
      ],
      whatsappPrefill: "Olá! Gostaria de solicitar um orçamento para Limpeza Predial."
    },
    {
      id: "closet",
      title: "Organização de Closet",
      badge: "Personal Organizer",
      shortDescription: "Otimização de espaço, categorização e praticidade para closets, armários e guarda-roupas.",
      image: "assets/images/closet.jpg",
      items: [
        "Descarte consciente e triagem de peças com o cliente",
        "Categorização por cor, tipo e estação do ano",
        "Padronização de dobras e disposição de cabides",
        "Organização de calçados, bolsas, acessórios e roupas de cama"
      ],
      whatsappPrefill: "Olá! Gostaria de solicitar um orçamento para Organização de Closet."
    },
    {
      id: "pos-obra",
      title: "Limpeza Pós-Obra",
      badge: "Técnica & Pesada",
      shortDescription: "Remoção técnica de poeira fina de gesso, resíduos de rejunte, tintas e acabamentos pós-reforma.",
      image: "assets/images/pos-obra.jpg",
      items: [
        "Limpeza detalhada de vidros, esquadrias e trilhos",
        "Remoção de respingos de tinta e resíduos de argamassa",
        "Aspiração profunda de poeira em todos os cantos e móveis",
        "Ambiente 100% pronto e limpo para você morar ou inaugurar"
      ],
      whatsappPrefill: "Olá! Gostaria de solicitar um orçamento para Limpeza Pós-Obra."
    }
  ],

  // Diferenciais Competitivos
  differentials: [
    {
      icon: "file-text",
      title: "Orçamento Transparente e Sem Surpresas",
      description: "Você sabe exatamente o escopo e os valores antes do início do serviço, sem taxas imprevistas."
    },
    {
      icon: "calendar-clock",
      title: "Plantão e Atendimento Ágil",
      description: "Linha direta de emergência e horários flexíveis para atender às necessidades urgentes do seu prédio ou imóvel."
    },
    {
      icon: "shield-check",
      title: "Cuidado e Respeito com Seus Bens",
      description: "Profissionais qualificados com métodos seguros para não danificar tecidos finos, pisos nobres e acabamentos recentes."
    },
    {
      icon: "sparkles",
      title: "Produtos e Equipamentos Profissionais",
      description: "Aspiradores de alta potência, produtos específicos para cada superfície e materiais de organização modernos."
    }
  ],

  // Etapas de "Como Funciona"
  howItWorks: [
    {
      step: "01",
      title: "Contato e Briefing Rápido",
      description: "Envie uma mensagem pelo WhatsApp ou formulário informando se precisa de Limpeza Predial, Closet ou Pós-Obra."
    },
    {
      step: "02",
      title: "Avaliação da Necessidade",
      description: "Entendemos as particularidades do seu espaço, metragem, número de armários ou tamanho do condomínio."
    },
    {
      step: "03",
      title: "Orçamento e Agendamento",
      description: "Você recebe a proposta detalhada no WhatsApp e confirma o agendamento no dia e horário mais convenientes."
    }
  ],

  // Perguntas Frequentes (FAQ)
  faq: [
    {
      question: "Como funciona a contratação da Limpeza Predial?",
      answer: "Atendemos condomínios residenciais e prédios comerciais com cronogramas personalizados: diários, semanais ou pontuais para eventos e manutenções especiais. Fornecemos proposta formal detalhada para síndicos e administradoras."
    },
    {
      question: "Como funciona o serviço de Organização de Closet?",
      answer: "Nossa especialista (Personal Organizer) avalia o volume de roupas, acessórios e o espaço disponível. Realizamos a triagem junto com você, aplicamos técnicas de dobras funcionais, padronizamos a distribuição e deixamos o dia a dia muito mais prático e elegante."
    },
    {
      question: "A Limpeza Pós-Obra retira toda a poeira de gesso e tinta?",
      answer: "Sim! Utilizamos aspiradores profissionais de alta sucção com filtros especiais para reter poeira ultrafina de gesso e alvenaria, além de produtos e raspadores adequados para remoção de respingos de tinta sem arranhar pisos ou vidros."
    },
    {
      question: "Qual o canal para atendimento urgente ou de emergência?",
      answer: "Para situações urgentes que precisam de resolução imediata em condomínios ou imóveis, utilize nosso telefone/WhatsApp de emergência no número (11) 98641-2651."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos Pix, transferência bancária e cartões de crédito/débito. Para condomínios e contratos corporativos, também disponibilizamos faturamento via boleto bancário."
    }
  ]
};

if (typeof Object.freeze === 'function') {
  Object.freeze(SITE_CONFIG);
}

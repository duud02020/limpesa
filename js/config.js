/**
 * Miss Clean - Arquivo de Configuração Centralizada
 * 
 * Informações reais de atendimento, contatos e serviços da empresa.
 */

const SITE_CONFIG = {
  // Informações da Empresa
  company: {
    name: "Miss Clean",
    tagline: "Limpeza Predial, Organização de Closet e Limpeza Pós-Obra",
    description: "Serviços especializados em limpeza predial para condomínios, organização profissional de closets (Personal Organizer) e higienização técnica pós-obra em toda a cidade de São Paulo.",
    isDemo: false
  },

  // Configurações de Contato e WhatsApp
  contact: {
    // WhatsApp Principal da Empresa (para onde vão todos os orçamentos e mensagens)
    whatsappRaw: "5511961816663",
    whatsappFormatted: "(11) 96181-6663",
    
    // Contato Pessoal / Emergência
    emergencyRaw: "5511986412651",
    emergencyFormatted: "(11) 98641-2651",
    
    // E-mail de Contato
    email: "marcelaingridy@hotmail.com",
    
    // Horário de atendimento
    businessHours: "Segunda a Sábado, das 08:00 às 18:00",
    
    // Região de atendimento
    serviceArea: "Atendimento em Toda a Cidade de São Paulo e Região Metropolitana",
    
    // Endereço / Referência de Atendimento
    addressReference: "São Paulo - SP (Atendimento em toda a capital, condomínios e residências)",

    // Mensagem padrão ao clicar no WhatsApp da empresa
    defaultMessage: "Olá! Gostaria de solicitar um orçamento com a Miss Clean."
  },

  // Serviços Oferecidos
  services: [
    {
      id: "predial",
      title: "Limpeza Predial",
      badge: "Condomínios & Edifícios",
      shortDescription: "Higienização completa e conservação de áreas comuns para condomínios residenciais e comerciais em São Paulo.",
      image: "assets/images/predial.jpg",
      items: [
        "Halls de entrada, portarias e recepções",
        "Corredores, escadarias e elevadores",
        "Salões de festas, academias e áreas de lazer",
        "Garagens, vidros de fachada e rotinas de manutenção"
      ],
      whatsappPrefill: "Olá! Gostaria de solicitar um orçamento para Limpeza Predial com a Miss Clean."
    },
    {
      id: "closet",
      title: "Organização de Closet",
      badge: "Personal Organizer",
      shortDescription: "Otimização de espaço, categorização e praticidade para closets, armários e guarda-roupas com método profissional.",
      image: "assets/images/closet.jpg",
      items: [
        "Descarte consciente e triagem de peças com o cliente",
        "Categorização por cor, tipo e estação do ano",
        "Padronização de dobras e disposição de cabides",
        "Organização de calçados, bolsas, acessórios e roupas de cama"
      ],
      whatsappPrefill: "Olá! Gostaria de solicitar um orçamento para Organização de Closet com a Miss Clean."
    },
    {
      id: "pos-obra",
      title: "Limpeza Pós-Obra",
      badge: "Técnica & Pesada",
      shortDescription: "Remoção técnica de poeira fina de gesso, resíduos de argamassa, tintas e acabamentos pós-reforma.",
      image: "assets/images/pos-obra.jpg",
      items: [
        "Limpeza detalhada de vidros, esquadrias e trilhos",
        "Remoção de respingos de tinta e resíduos de argamassa",
        "Aspiração profunda de poeira em todos os cantos e móveis",
        "Ambiente 100% pronto e limpo para você morar ou inaugurar"
      ],
      whatsappPrefill: "Olá! Gostaria de solicitar um orçamento para Limpeza Pós-Obra com a Miss Clean."
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
      title: "Pontualidade e Atendimento Ágil",
      description: "Horários rigorosamente cumpridos de segunda a sábado das 08:00 às 18:00 em qualquer região de São Paulo."
    },
    {
      icon: "shield-check",
      title: "Cuidado e Respeito com Seus Bens",
      description: "Métodos seguros para proteger tecidos nobres em closets, pisos finos e acabamentos novos pós-obra."
    },
    {
      icon: "sparkles",
      title: "Produtos e Equipamentos Profissionais",
      description: "Aspiradores de alta potência, produtos específicos para cada superfície e técnicas modernas de Personal Organizer."
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
      description: "Entendemos as particularidades do seu espaço, metragem, número de armários ou porte do condomínio."
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
      question: "Quais regiões de São Paulo a Miss Clean atende?",
      answer: "Atendemos São Paulo inteiro: Zona Sul, Zona Oeste, Zona Norte, Zona Leste, Centro expandido, além de cidades da Região Metropolitana como Alphaville, Barueri e Grande ABC."
    },
    {
      question: "Qual o horário de atendimento e funcionamento?",
      answer: "Nosso atendimento é de segunda a sábado, das 08:00 às 18:00. Você pode agendar serviços pontuais ou recorrentes dentro deste período."
    },
    {
      question: "Como funciona a contratação da Limpeza Predial?",
      answer: "Atendemos condomínios residenciais e prédios comerciais com cronogramas personalizados: diários, semanais ou pontuais para eventos e manutenções especiais. Fornecemos proposta formal detalhada para síndicos e administradoras."
    },
    {
      question: "Como funciona o serviço de Organização de Closet (Personal Organizer)?",
      answer: "Avaliamos o volume de roupas, sapatos, acessórios e o espaço disponível. Realizamos a triagem junto com você, aplicamos técnicas de dobras funcionais, padronizamos a distribuição e deixamos seu armário muito mais prático e elegante."
    },
    {
      question: "A Limpeza Pós-Obra retira toda a poeira fina de gesso e respingos de tinta?",
      answer: "Sim! Utilizamos aspiradores industriais de alta sucção com filtros especiais para reter poeira ultrafina de gesso e alvenaria, além de produtos e raspadores adequados para remoção de respingos de tinta sem arranhar pisos, esquadrias ou vidros."
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

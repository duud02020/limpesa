/**
 * Brilho Total Limpeza - Arquivo de Configuração Centralizada
 * 
 * Modifique as informações abaixo para personalizar o site rapidamente
 * com os dados reais de qualquer empresa ou cliente.
 */

const SITE_CONFIG = {
  // Informações da Empresa
  company: {
    name: "Brilho Total Limpeza",
    tagline: "Seu ambiente limpo, sua tranquilidade garantida",
    description: "Serviços especializados de limpeza residencial, comercial e pós-obra com alto padrão de qualidade, pontualidade e transparência.",
    isDemo: true, // Indica claramente que o projeto é uma demonstração comercial
    demoNotice: "Projeto de Demonstração Comercial - Empresa Fictícia"
  },

  // Configurações de Contato e WhatsApp
  contact: {
    // Apenas números com DDI e DDD (exemplo: 5511999990000 para São Paulo)
    whatsappRaw: "5511999990000",
    
    // Telefone formatado para exibição visual
    whatsappFormatted: "(11) 99999-0000",
    phoneSecondaryFormatted: "(11) 3333-0000",
    
    // E-mail de contato
    email: "contato@brilhototallimpeza.exemplo.com",
    
    // Horário de atendimento
    businessHours: "Segunda a Sábado, das 07:30 às 18:30",
    
    // Região de atendimento
    serviceArea: "São Paulo - Capital, Região Metropolitana e Cidades Vizinhas",
    
    // Endereço fictício de referência
    addressReference: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP (Atendimento sob demanda em domicílio e empresas)",

    // Mensagem padrão ao clicar nos botões gerais de WhatsApp
    defaultMessage: "Olá! Conheci o site da Brilho Total Limpeza e gostaria de solicitar um orçamento para o meu ambiente."
  },

  // Serviços Oferecidos (Exemplos editáveis)
  services: [
    {
      id: "residencial",
      title: "Limpeza Residencial",
      badge: "Mais Procurado",
      shortDescription: "Cuidado minucioso para casas e apartamentos, com planos avulsos ou recorrentes.",
      image: "assets/images/residencial.jpg",
      items: [
        "Higienização completa de quartos, salas e banheiros",
        "Limpeza de cozinhas, pias e bancadas",
        "Aspiração e lavagem de pisos com produtos adequados",
        "Remoção de pó em móveis e superfícies acessíveis"
      ],
      whatsappPrefill: "Olá! Gostaria de um orçamento para Limpeza Residencial."
    },
    {
      id: "comercial",
      title: "Limpeza Comercial & Escritórios",
      badge: "Corporativo",
      shortDescription: "Ambientes de trabalho higienizados, organizados e prontos para receber clientes e colaboradores.",
      image: "assets/images/comercial.jpg",
      items: [
        "Salas de reunião, estações de trabalho e recepção",
        "Sanitização de banheiros de alto fluxo",
        "Higienização de copas e áreas de convivência",
        "Horários flexíveis (antes ou após o expediente)"
      ],
      whatsappPrefill: "Olá! Gostaria de um orçamento para Limpeza Comercial/Escritório."
    },
    {
      id: "pos-obra",
      title: "Limpeza Pós-Obra",
      badge: "Especializada",
      shortDescription: "Remoção técnica de poeira fina, resíduos de gesso, rejunte e tintas após reformas e construções.",
      image: "assets/images/pos-obra.jpg",
      items: [
        "Limpeza minuciosa de vidros, esquadrias e trilhos",
        "Remoção de respingos de tinta e resíduos de rejunte",
        "Aspiração profissional de poeira de gesso e alvenaria",
        "Ambiente 100% pronto para morar ou inaugurar"
      ],
      whatsappPrefill: "Olá! Gostaria de um orçamento para Limpeza Pós-Obra."
    },
    {
      id: "estofados",
      title: "Higienização de Estofados",
      badge: "Saúde & Conforto",
      shortDescription: "Extração profunda de sujeiras, ácaros e odores em sofás, cadeiras, colchões e tapetes.",
      image: "assets/images/estofados.jpg",
      items: [
        "Sofás de tecido, linho, veludo e couro",
        "Colchões e cabeceiras estofadas",
        "Cadeiras de jantar e poltronas corporativas",
        "Secagem acelerada e produtos dermatologicamente seguros"
      ],
      whatsappPrefill: "Olá! Gostaria de um orçamento para Higienização de Estofados."
    }
  ],

  // Diferenciais Competitivos (Foco em clareza e credibilidade sem promessas não verificadas)
  differentials: [
    {
      icon: "file-text",
      title: "Orçamento Detalhado e Sem Surpresas",
      description: "Você sabe exatamente o que está incluso antes do início dos trabalhos, sem cobranças ocultas ou custos imprevistos."
    },
    {
      icon: "calendar-clock",
      title: "Pontualidade e Flexibilidade",
      description: "Agendamento ágil respeitando sua rotina, com opções para serviços pontuais, semanais, quinzenais ou mensais."
    },
    {
      icon: "shield-check",
      title: "Cuidado e Respeito com Seu Espaço",
      description: "Equipes preparadas seguindo checklists rigorosos para proteger pisos nobres, móveis delicados e seus pertences."
    },
    {
      icon: "sparkles",
      title: "Produtos e Materiais Adequados",
      description: "Utilização de produtos de limpeza eficientes e seguros para crianças e animais domésticos (pet-friendly)."
    }
  ],

  // Etapas de "Como Funciona"
  howItWorks: [
    {
      step: "01",
      title: "Contato e Briefing Rápido",
      description: "Você clica no botão do WhatsApp ou preenche o formulário informando a sua cidade, bairro e o tipo de limpeza necessária."
    },
    {
      step: "02",
      title: "Avaliação da Necessidade",
      description: "Alinhamos detalhes como metragem aproximada, quantidade de cômodos, estado do ambiente e horário de sua preferência."
    },
    {
      step: "03",
      title: "Orçamento e Agendamento",
      description: "Você recebe a proposta clara no WhatsApp com escopo, valor e datas disponíveis para confirmação imediata."
    }
  ],

  // Perguntas Frequentes (FAQ)
  faq: [
    {
      question: "Os produtos e materiais de limpeza estão inclusos no orçamento?",
      answer: "Sim, para a grande maioria dos serviços (especialmente pós-obra e estofados) levamos todos os equipamentos e insumos profissionais. Para limpezas residenciais de rotina, podemos utilizar nossos insumos ou os de preferência do cliente, conforme alinhado previamente no orçamento."
    },
    {
      question: "Com quanto tempo de antecedência devo agendar o atendimento?",
      answer: "Recomendamos um prazo de 24 a 48 horas de antecedência para garantir a melhor data e horário. No entanto, sempre consulte nossa equipe pelo WhatsApp para verificar possíveis encaixes de emergência no mesmo dia."
    },
    {
      question: "Preciso estar presente no imóvel durante a limpeza?",
      answer: "Apenas na chegada da equipe para liberação do acesso e repasse de orientações, e ao final para conferência do serviço. Caso prefira acompanhar todo o processo, você é muito bem-vindo."
    },
    {
      question: "Como é calculado o valor do serviço?",
      answer: "O orçamento é personalizado considerando a metragem do espaço, número de cômodos, tipo de limpeza (rotina, pesada ou pós-obra) e a frequência desejada (avulsa ou recorrente)."
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos Pix, transferência bancária e cartões de crédito/débito. O pagamento pode ser realizado mediante a conclusão e aprovação dos serviços."
    },
    {
      question: "Este site é uma empresa ativa ou uma demonstração?",
      answer: "Este site é um projeto de demonstração comercial e portfólio para a marca fictícia 'Brilho Total Limpeza'. Todas as funcionalidades de cálculo e geração de orçamento para o WhatsApp estão 100% operacionais para testes e apresentações comerciais."
    }
  ]
};

// Congela o objeto para evitar mutações acidentais em tempo de execução
if (typeof Object.freeze === 'function') {
  Object.freeze(SITE_CONFIG);
}

/**
 * Brilho Total Limpeza - Script Principal de Interatividades
 * Compatível com todos os navegadores modernos, sem dependências externas.
 */

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  applyConfigData();
  initHeader();
  initMobileMenu();
  initFaqAccordion();
  initQuoteForm();
  initModals();
  initScrollSpy();
}

/**
 * Aplica os dados do SITE_CONFIG aos elementos correspondentes do HTML
 */
function applyConfigData() {
  if (typeof SITE_CONFIG === "undefined") {
    console.warn("SITE_CONFIG não foi encontrado. Usando valores padrões do HTML.");
    return;
  }

  // Preenche dados da empresa e contatos
  document.querySelectorAll("[data-bind='companyName']").forEach(el => {
    el.textContent = SITE_CONFIG.company.name;
  });

  document.querySelectorAll("[data-bind='whatsappFormatted']").forEach(el => {
    el.textContent = SITE_CONFIG.contact.whatsappFormatted;
  });

  document.querySelectorAll("[data-bind='emergencyFormatted']").forEach(el => {
    el.textContent = SITE_CONFIG.contact.emergencyFormatted;
  });

  document.querySelectorAll("[data-bind='phoneSecondary']").forEach(el => {
    el.textContent = SITE_CONFIG.contact.emergencyFormatted;
  });

  document.querySelectorAll("[data-bind='email']").forEach(el => {
    el.textContent = SITE_CONFIG.contact.email;
    if (el.tagName === "A") {
      el.href = `mailto:${SITE_CONFIG.contact.email}`;
    }
  });

  document.querySelectorAll("[data-bind='businessHours']").forEach(el => {
    el.textContent = SITE_CONFIG.contact.businessHours;
  });

  document.querySelectorAll("[data-bind='serviceArea']").forEach(el => {
    el.textContent = SITE_CONFIG.contact.serviceArea;
  });

  document.querySelectorAll("[data-bind='addressReference']").forEach(el => {
    el.textContent = SITE_CONFIG.contact.addressReference;
  });

  document.querySelectorAll("[data-bind='companyTagline']").forEach(el => {
    el.textContent = SITE_CONFIG.company.tagline;
  });

  // Atualiza links genéricos do WhatsApp Principal
  const defaultWhatsAppUrl = buildWhatsAppLink(SITE_CONFIG.contact.defaultMessage);
  document.querySelectorAll("[data-whatsapp-general]").forEach(link => {
    link.href = defaultWhatsAppUrl;
  });

  // Atualiza links de Emergência / Plantão
  const emergencyWhatsAppUrl = buildWhatsAppLink("Olá! Preciso de atendimento ou orçamento de emergência com a Brilho Total Limpeza.", true);
  document.querySelectorAll("[data-whatsapp-emergency]").forEach(link => {
    link.href = emergencyWhatsAppUrl;
  });

  // Atualiza links específicos de cada serviço
  if (SITE_CONFIG.services && Array.isArray(SITE_CONFIG.services)) {
    document.querySelectorAll("[data-service-whatsapp]").forEach(link => {
      const sId = link.getAttribute("data-service-whatsapp");
      const sItem = SITE_CONFIG.services.find(s => s.id === sId);
      if (sItem && sItem.whatsappPrefill) {
        link.href = buildWhatsAppLink(sItem.whatsappPrefill);
      }
    });
  }

  // Atualiza link de consulta de bairro na seção de contato
  const coverageMsg = "Olá! Gostaria de consultar a disponibilidade de atendimento para o meu condomínio/imóvel na minha região.";
  document.querySelectorAll("[data-whatsapp-coverage]").forEach(link => {
    link.href = buildWhatsAppLink(coverageMsg);
  });
}

/**
 * Constrói o link oficial do WhatsApp com a mensagem codificada
 */
function buildWhatsAppLink(message, isEmergency = false) {
  let phone = "5511961816663";
  if (isEmergency && typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.contact?.emergencyRaw) {
    phone = SITE_CONFIG.contact.emergencyRaw;
  } else if (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.contact?.whatsappRaw) {
    phone = SITE_CONFIG.contact.whatsappRaw;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Gerencia a barra de navegação com sombra ao rolar
 */
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * Menu mobile acessível com trava de rolagem
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector(".menu-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  const drawerLinks = document.querySelectorAll(".mobile-menu-link, .mobile-drawer .btn");

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    toggleBtn.classList.add("active");
    toggleBtn.setAttribute("aria-expanded", "true");
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    toggleBtn.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  // Fecha ao clicar em um link
  drawerLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  // Fecha ao clicar no backdrop (fora do conteúdo do menu)
  drawer.addEventListener("click", (e) => {
    if (e.target === drawer) {
      closeDrawer();
    }
  });

  // Fecha com a tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

/**
 * Seção de Perguntas Frequentes (FAQ) com efeito sanfona acessível
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");

    if (!trigger || !content) return;

    trigger.addEventListener("click", () => {
      const isAlreadyActive = item.classList.contains("active");

      // Fecha todos os itens para manter a página limpa e focada
      faqItems.forEach(otherItem => {
        otherItem.classList.remove("active");
        const otherTrigger = otherItem.querySelector(".faq-trigger");
        if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
      });

      // Abre o clicado se não estava aberto
      if (!isAlreadyActive) {
        item.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * Gerencia a Calculadora e Gerador de Mensagens do WhatsApp
 */
function initQuoteForm() {
  const form = document.getElementById("quoteForm");
  const previewBubble = document.getElementById("previewContent");
  const btnSubmitWhatsApp = document.getElementById("btnSendWhatsApp");
  const btnSimulate = document.getElementById("btnSimulateQuote");

  // Campos do formulário
  const inputName = document.getElementById("quoteName");
  const inputPhone = document.getElementById("quotePhone");
  const selectService = document.getElementById("quoteService");
  const inputProperty = document.getElementById("quoteProperty");
  const selectFrequency = document.getElementById("quoteFrequency");
  const inputNotes = document.getElementById("quoteNotes");

  if (!form || !previewBubble) return;

  // Atualiza a visualização em tempo real conforme o usuário digita
  const updatePreview = () => {
    const name = inputName.value.trim() || "[Seu Nome]";
    const phone = inputPhone.value.trim() || "[Seu Telefone]";
    const serviceName = selectService.options[selectService.selectedIndex]?.text || "Limpeza Residencial";
    const property = inputProperty.value.trim() || "[Não informado]";
    const frequency = selectFrequency.options[selectFrequency.selectedIndex]?.text || "Serviço Avulso";
    const notes = inputNotes.value.trim();

    let messageText = `✨ *Solicitação de Orçamento*\n`;
    messageText += `*Empresa:* ${SITE_CONFIG.company.name}\n\n`;
    messageText += `*Nome:* ${name}\n`;
    messageText += `*Contato:* ${phone}\n`;
    messageText += `*Serviço:* ${serviceName}\n`;
    messageText += `*Imóvel/Espaço:* ${property}\n`;
    messageText += `*Frequência:* ${frequency}\n`;
    
    if (notes) {
      messageText += `*Observações:* ${notes}\n`;
    }

    messageText += `\n_Olá! Gostaria de receber uma estimativa de orçamento e verificar a disponibilidade de agenda._`;

    previewBubble.textContent = messageText;
    return messageText;
  };

  // Escuta mudanças nos campos
  [inputName, inputPhone, selectService, inputProperty, selectFrequency, inputNotes].forEach(input => {
    if (input) {
      input.addEventListener("input", updatePreview);
      input.addEventListener("change", updatePreview);
    }
  });

  // Inicializa o preview logo na montagem
  updatePreview();

  // Função para validar campos obrigatórios
  const validateForm = () => {
    let isValid = true;
    const requiredInputs = [inputName, inputPhone];

    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add("is-invalid");
        input.style.borderColor = "#ef4444";
        isValid = false;
      } else {
        input.classList.remove("is-invalid");
        input.style.borderColor = "";
      }
    });

    if (!isValid) {
      showToast("Por favor, preencha seu nome e telefone para prosseguir.");
      if (!inputName.value.trim()) inputName.focus();
      else if (!inputPhone.value.trim()) inputPhone.focus();
    }

    return isValid;
  };

  // Botão 1: Enviar direto para o WhatsApp
  if (btnSubmitWhatsApp) {
    btnSubmitWhatsApp.addEventListener("click", (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const finalMessage = updatePreview();
      const whatsappUrl = buildWhatsAppLink(finalMessage);
      
      // Abre o WhatsApp em nova aba
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }

  // Botão 2: Simular envio e exibir modal demonstrativo
  if (btnSimulate) {
    btnSimulate.addEventListener("click", (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const finalMessage = updatePreview();
      openSimulationModal(finalMessage);
    });
  }

  // Ação de botões nos cards de serviços: "Pedir este serviço"
  document.querySelectorAll("[data-service-select]").forEach(button => {
    button.addEventListener("click", (e) => {
      const targetServiceId = button.getAttribute("data-service-select");
      if (selectService && targetServiceId) {
        selectService.value = targetServiceId;
        updatePreview();
      }

      // Rola suavemente até o formulário de orçamento
      const quoteSection = document.getElementById("orcamento");
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          inputName.focus();
        }, 500);
      }
    });
  });
}

/**
 * Gerencia Modais do Projeto
 */
function initModals() {
  const modalOverlays = document.querySelectorAll(".modal-overlay");

  modalOverlays.forEach(overlay => {
    const closeButtons = overlay.querySelectorAll("[data-close-modal]");

    closeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        closeAllModals();
      });
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  // Botão para abrir o Guia de Personalização
  const customizeBtn = document.getElementById("btnOpenCustomizer");
  const customizeModal = document.getElementById("modalCustomizer");
  if (customizeBtn && customizeModal) {
    customizeBtn.addEventListener("click", () => {
      customizeModal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(modal => {
    modal.classList.remove("open");
  });
  document.body.style.overflow = "";
}

/**
 * Abre o modal demonstrativo exibindo a mensagem gerada
 */
function openSimulationModal(messageText) {
  const simModal = document.getElementById("modalSimulation");
  const simContent = document.getElementById("simulatedMessageDisplay");
  const btnCopyMessage = document.getElementById("btnCopySimMessage");
  const btnOpenWhatsappFromModal = document.getElementById("btnOpenWhatsappFromModal");

  if (!simModal || !simContent) return;

  simContent.textContent = messageText;

  if (btnCopyMessage) {
    btnCopyMessage.onclick = () => {
      navigator.clipboard.writeText(messageText).then(() => {
        showToast("Mensagem copiada para a área de transferência!");
      }).catch(() => {
        showToast("Não foi possível copiar automaticamente.");
      });
    };
  }

  if (btnOpenWhatsappFromModal) {
    btnOpenWhatsappFromModal.onclick = () => {
      const whatsappUrl = buildWhatsAppLink(messageText);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      closeAllModals();
    };
  }

  simModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

/**
 * Notificação flutuante leve (Toast)
 */
function showToast(message) {
  let toast = document.querySelector(".toast-notice");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/**
 * Destaca o link ativo na barra de navegação conforme a rolagem
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, {
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}

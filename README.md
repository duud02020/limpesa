# Brilho Total Limpeza - Site Comercial Demonstrativo

Este projeto é um website profissional, moderno e responsivo desenvolvido para a empresa fictícia **Brilho Total Limpeza**, projetado para servir como **demonstração comercial e portfólio**.

---

## 🎯 Objetivo
Apresentar serviços especializados de limpeza e converter visitantes em solicitações qualificadas de orçamento via **WhatsApp**.

---

## 🎨 Identidade Visual e Design System

- **Paleta de Cores:**
  - **Azul-Marinho Profundo:** `#0A192F` / `#0F2744` (Confiança, solidez e sofisticação corporativa).
  - **Verde-Água / Teal:** `#0D9488` / `#14B8A6` / `#2DD4BF` (Sensação de frescor, higiene e limpeza impecável).
  - **Branco Puro e Slate Claro:** `#FFFFFF` / `#F8FAFC` / `#F1F5F9` (Clareza visual, leveza e contraste legível).
  - **Verde WhatsApp:** `#25D366` (Botões de ação e conversão direta).
- **Tipografia:** Tipografia do sistema moderna (`-apple-system`, `Segoe UI`, `Roboto`), garantindo carregamento instantâneo sem dependência de fontes externas pesadas.
- **Ícones:** Vetores SVG inline integrados, leves e nítidos em qualquer resolução de tela (Retina/4K).
- **Imagens:** Fotografias em alta resolução de ambientes limpos e materiais profissionais (armazenadas localmente em `assets/images/`).

---

## 🏗️ Estrutura do Site

1. **Barra de Aviso Superior:** Identificação clara de projeto demonstrativo comercial e horário de atendimento.
2. **Cabeçalho Fixo (Sticky Header):** Logotipo textual estilizado com efeito de brilho, navegação com ScrollSpy e botão de orçamento.
3. **Menu Mobile Responsivo:** Gaveta com animação suave, trava de scroll e fechamento via botão, toque no fundo ou tecla `ESC`.
4. **Hero Section:**
   - Título impactante: *"Seu ambiente limpo, sua tranquilidade garantida"*.
   - Subtítulo e botões de ação direta (*"Solicitar Orçamento"* e *"Ver Serviços"*).
   - Card visual com fotografia de alta qualidade e selo de padrão de higiene.
5. **Seção de Serviços (Cards Editáveis):**
   - Limpeza Residencial.
   - Limpeza Comercial & Escritórios.
   - Limpeza Pós-Obra.
   - Higienização de Estofados.
   - Cada card possui botão que preenche automaticamente o serviço no formulário.
6. **Seção de Diferenciais:**
   - Orçamento transparente e sem surpresas.
   - Flexibilidade e pontualidade.
   - Cuidado com o patrimônio e superfícies nobres.
   - Produtos e insumos seguros para crianças e animais (pet-friendly).
   - Identificação transparente de conteúdo demonstrativo.
7. **Seção "Como Funciona":**
   - 01: Contato e briefing rápido.
   - 02: Avaliação da necessidade.
   - 03: Orçamento e agendamento sem complicação.
8. **Calculadora e Formulário de Orçamento WhatsApp:**
   - Campos de formulário com validação inteligente de dados.
   - Simulador de tela de smartphone com prévia da mensagem gerada em tempo real.
   - Botão para abrir o WhatsApp diretamente com o texto montado.
   - Botão de simulação no site com modal informativo e opção de copiar o texto.
9. **Perguntas Frequentes (FAQ):** Accordion interativo e acessível com 6 dúvidas essenciais.
10. **Área de Atendimento e Contato:**
    - Telefones, WhatsApp, horários e e-mail.
    - Card de cobertura regional da Grande São Paulo e cidades vizinhas.
11. **Rodapé Completo:** Identificação explícita de empresa fictícia, navegação rápida, guia de customização e copyright.
12. **Botão Flutuante do WhatsApp:** Fixado com animação de pulso e tooltip informativo.

---

## 📁 Estrutura de Arquivos

```
limpesa/
├── index.html           # Documento principal com semântica HTML5 e acessibilidade
├── css/
│   └── style.css        # Folha de estilo responsiva com variáveis CSS modernas
├── js/
│   ├── config.js        # CONFIGURAÇÃO CENTRALIZADA (WhatsApp, dados, serviços, FAQs)
│   └── main.js          # Lógica do menu, formulário WhatsApp, accordion e modais
├── assets/
│   └── images/          # Fotografias de alta resolução otimizadas para a web
│       ├── hero.jpg
│       ├── residencial.jpg
│       ├── comercial.jpg
│       ├── pos-obra.jpg
│       ├── estofados.jpg
│       └── diferenciais.jpg
└── README.md            # Este manual de instruções
```

---

## 🚀 Como Executar e Testar Localmente

O projeto foi construído **sem necessidade de compilação ou dependências externas pesadas**, podendo ser executado de várias maneiras simples:

### Opção 1: Abrir Diretamente no Navegador (Mais Rápido)
1. Dê um duplo clique no arquivo `index.html` ou clique com o botão direito e selecione **"Abrir com" -> Google Chrome / Microsoft Edge / Firefox**.
2. O site funcionará imediatamente com todas as fotos, estilos e interações de WhatsApp.

### Opção 2: Servidor Local com Node.js (Recomendado)
Como você possui o Node.js instalado, você pode executar um servidor HTTP local simples:
```powershell
# No terminal na pasta do projeto:
node -e "const http = require('http'), fs = require('fs'), path = require('path'); const mime = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml'}; http.createServer((req, res) => { let file = path.join('.', req.url === '/' ? 'index.html' : req.url); fs.readFile(file, (err, data) => { if(err) { res.writeHead(404); res.end('Not Found'); } else { res.writeHead(200, {'Content-Type': mime[path.extname(file)] || 'text/plain'}); res.end(data); } }); }).listen(3000, () => console.log('Site disponível em http://localhost:3000'));"
```
Abra seu navegador em `http://localhost:3000`.

### Opção 3: Extensão "Live Server" do VS Code
Se estiver usando o Visual Studio Code, instale a extensão **Live Server**, clique com o botão direito no `index.html` e selecione **"Open with Live Server"**.

---

## ⚙️ Como Personalizar os Dados da Empresa

Toda a personalização do site é feita em **um único arquivo central**: [`js/config.js`](file:///c:/Users/dudu/Documents/limpesa/js/config.js).

### 1. Alterar o Número de WhatsApp
Edite as chaves `whatsappRaw` e `whatsappFormatted` no arquivo `js/config.js`:
```javascript
contact: {
  // Número internacional (DDI 55 + DDD + 9 dígitos)
  whatsappRaw: "5511999990000",
  
  // Como o número aparece visualmente na tela
  whatsappFormatted: "(11) 99999-0000",
  
  // E-mail e horários
  email: "contato@suaempresa.com.br",
  businessHours: "Segunda a Sábado, das 08:00 às 18:00"
}
```

### 2. Alterar o Nome da Empresa
Modifique `company.name` e `company.tagline` em `js/config.js`:
```javascript
company: {
  name: "Nome da Sua Empresa",
  tagline: "Seu slogan aqui",
  isDemo: false
}
```

### 3. Alterar ou Adicionar Serviços
Você pode adicionar, renomear ou trocar os tópicos dos serviços no array `services` em `js/config.js` e substituir as imagens na pasta `assets/images/`.

---

## 🌐 Como Publicar na Internet Gratuitamente

Este projeto é um site estático, o que significa que ele tem **custo zero de hospedagem** em plataformas profissionais:

1. **Vercel / Netlify (Arrastar e Soltar):**
   - Acesse [netlify.com](https://www.netlify.com/) ou [vercel.com](https://vercel.com/).
   - Arraste a pasta `limpesa` diretamente na área de upload ("Deploy").
   - O site estará no ar em segundos com certificado SSL (HTTPS) gratuito.

2. **GitHub Pages:**
   - Crie um repositório no GitHub.
   - Envie os arquivos do projeto (`git push`).
   - Acesse **Settings > Pages** e selecione a branch `main` e a pasta `/ (root)`.
   - O site estará publicado em `https://seu-usuario.github.io/limpesa/`.

---

## 🧪 Checklist de Testes Realizados

- [x] **Acessibilidade e Semântica:** Uso correto de tags `<header>`, `<main>`, `<section>`, `<article>`, `<nav>` e `<footer>`, além de atributos `aria-expanded` e `aria-label`.
- [x] **Responsividade Total:** Testado com sucesso em resoluções mobile (360px a 480px), tablets (768px a 1024px) e desktops widescreen.
- [x] **Links de Ação do WhatsApp:** Todos os botões montam URLs válidas (`https://wa.me/...`) com parâmetros codificados e mensagens personalizadas.
- [x] **Formulário com Validação:** Checagem de campos obrigatórios com feedback visual e opção de simulação sem falhas.
- [x] **Performance:** Zero dependências de CDNs pesados ou frameworks lentos; imagens comprimidas para carregamento instantâneo.

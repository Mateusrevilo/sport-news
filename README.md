# 🏆 Sports News - Portal de Notícias Esportivas

Um portal moderno de notícias esportivas construído com Next.js 14, TypeScript e Tailwind CSS, oferecendo uma experiência responsiva e otimizada para todos os dispositivos.

## 🚀 Tecnologias Utilizadas

- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Imagens:** Next.js Image (otimização automática)
- **Ícones:** SVG inline
- **Responsividade:** Mobile-first design

## 📁 Estrutura do Projeto

```
my-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Card/
│   │   │   │   └── CardArtigo.tsx      # Componente de card de notícia
│   │   │   ├── Footer/
│   │   │   │   └── index.tsx           # Rodapé do site
│   │   │   ├── Grid/
│   │   │   │   └── ArtigoIndex.tsx     # Grid responsivo de notícias
│   │   │   ├── Header/
│   │   │   │   └── index.tsx           # Cabeçalho com navegação
│   │   │   └── Title/
│   │   │       └── index.tsx           # Componente de título
│   │   ├── noticias/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx            # Página dinâmica de notícia
│   │   │   ├── ligas/
│   │   │   │   └── page.tsx            # Página de ligas
│   │   │   ├── campeonatos/
│   │   │   │   └── page.tsx            # Página de campeonatos
│   │   │   └── sport/
│   │   │       └── page.tsx            # Página Sport+
│   │   ├── globals.css                 # Estilos globais
│   │   ├── layout.tsx                  # Layout principal
│   │   └── page.tsx                    # Página inicial
│   ├── lib/
│   │   └── reportagens.js              # Dados das notícias
│   └── types/
│       └── Artigos.ts                  # Tipos TypeScript
├── public/
│   └── videos/
│       └── hero-video.mp4             # Vídeo de fundo da home
└── README.md
```

## 🎯 Funcionalidades

### 🏠 Página Inicial
- **Hero Section:** Vídeo de fundo com overlay e conteúdo sobreposto
- **Título dinâmico:** "As Melhores Notícias do Mundo dos Sports"
- **Call-to-action:** Botão "Ver Notícias"
- **Indicador de scroll:** Animação para indicar mais conteúdo
- **Grid de notícias:** Cards responsivos com imagens otimizadas

### 📰 Sistema de Notícias
- **Cards clicáveis:** Navegação para páginas individuais
- **Imagens reais:** URLs do Unsplash com alta qualidade
- **Responsividade:** Adaptação perfeita a todas as telas
- **Hover effects:** Animações suaves e profissionais

### 📄 Páginas de Notícia Individual
- **Layout profissional:** Design tipo artigo
- **Breadcrumbs:** Navegação "Início > Notícias > Título"
- **Imagem principal:** Destaque com otimização
- **Conteúdo expandido:** Texto completo com citações
- **Notícias relacionadas:** Grid com 3 notícias similares
- **Navegação:** Botões "Voltar" e "Compartilhar"

### 🧭 Navegação
- **Header responsivo:** Menu adaptativo
- **Links funcionais:** Rotas para todas as seções
- **Sticky navigation:** Header fixo ao rolar
- **Menu mobile:** Botão hamburger para dispositivos pequenos

### 📱 Páginas de Categoria
- **Ligas:** Notícias sobre ligas esportivas
- **Campeonatos:** Cobertura de campeonatos
- **Sport+:** Conteúdo premium com recursos especiais

## 🎨 Design System

### 🎨 Cores
- **Primária:** Azul (blue-600 a blue-800)
- **Secundária:** Verde (green-600 a green-800)
- **Premium:** Roxo (purple-600 a purple-800)
- **Neutras:** Cinza (gray-50 a gray-900)

### 📐 Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** 1024px - 1280px
- **Large:** 1280px - 1536px
- **XL:** > 1536px

### 🖼️ Imagens
- **Fonte:** Unsplash (alta qualidade)
- **Otimização:** Next.js Image component
- **Formato:** JPG otimizado
- **Resolução:** 800x600 pixels
- **Lazy loading:** Automático

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd my-app

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint
```

## 📊 Performance

### ✅ Otimizações Implementadas
- **Next.js Image:** Carregamento otimizado de imagens
- **Lazy loading:** Imagens carregadas sob demanda
- **Code splitting:** JavaScript dividido por rota
- **Static generation:** Páginas pré-renderizadas
- **Responsive images:** Diferentes tamanhos para cada dispositivo

### 📈 Métricas
- **First Load JS:** ~122 kB
- **Build time:** ~16.8s
- **Lighthouse Score:** 90+ (estimado)

## 🔧 Configurações

### 📁 Arquivos de Configuração
- `next.config.ts` - Configurações do Next.js
- `tailwind.config.js` - Configurações do Tailwind
- `tsconfig.json` - Configurações do TypeScript
- `eslint.config.mjs` - Configurações do ESLint

### 🌐 Variáveis de Ambiente
```env
# Adicione ao .env.local se necessário
NEXT_PUBLIC_API_URL=https://sua-api.com
```

## 📱 Responsividade

### 📱 Mobile (< 640px)
- Grid: 1 coluna
- Cards: Compactos
- Navegação: Menu hamburger
- Texto: Tamanhos reduzidos

### 💻 Tablet (640px - 1024px)
- Grid: 2 colunas
- Cards: Tamanho médio
- Navegação: Menu horizontal
- Texto: Tamanhos intermediários

### 🖥️ Desktop (> 1024px)
- Grid: 3-4 colunas
- Cards: Tamanho completo
- Navegação: Menu completo
- Texto: Tamanhos grandes

## 🎯 SEO

### 🔍 Otimizações
- **Meta tags:** Títulos e descrições únicos
- **Structured data:** Dados estruturados
- **Alt text:** Imagens com descrições
- **URLs semânticas:** Rotas amigáveis
- **Sitemap:** Geração automática

### 📊 Analytics
- **Google Analytics:** Preparado para integração
- **Search Console:** Configuração recomendada
- **Core Web Vitals:** Otimizado

## 🚧 Funcionalidades em Desenvolvimento

### 🔄 API de Notícias
- **Integração com APIs externas:** Implementação de sistema para buscar notícias atualizadas em tempo real
- **Fonte de dados dinâmica:** Substituição dos dados estáticos por uma API REST/GraphQL
- **Cache inteligente:** Sistema de cache para otimizar performance e reduzir chamadas desnecessárias
- **Webhooks:** Notificações automáticas para novas notícias
- **Rate limiting:** Controle de requisições para evitar sobrecarga

### 📄 Páginas em Construção
- **Sistema de busca:** Funcionalidade de pesquisa avançada de notícias
- **Filtros por categoria:** Filtros dinâmicos por esporte, data, relevância
- **Página de perfil:** Área do usuário com preferências e histórico
- **Sistema de comentários:** Interação da comunidade com as notícias
- **Newsletter:** Sistema de assinatura para receber notícias por email
- **Páginas de estatísticas:** Dashboards com dados dos esportes
- **Seção de vídeos:** Player integrado para vídeos relacionados às notícias

### 🔧 Melhorias Planejadas
- **PWA (Progressive Web App):** Funcionalidades offline e instalação no dispositivo
- **Dark mode:** Tema escuro para melhor experiência noturna
- **Internacionalização (i18n):** Suporte a múltiplos idiomas
- **Acessibilidade:** Melhorias para usuários com necessidades especiais
- **Performance:** Otimizações adicionais para carregamento mais rápido

## 🚧 Funcionalidades em Desenvolvimento

### 🔄 API de Notícias
- **Integração com APIs externas:** Implementação de sistema para buscar notícias atualizadas em tempo real
- **Fonte de dados dinâmica:** Substituição dos dados estáticos por uma API REST/GraphQL
- **Cache inteligente:** Sistema de cache para otimizar performance e reduzir chamadas desnecessárias
- **Webhooks:** Notificações automáticas para novas notícias
- **Rate limiting:** Controle de requisições para evitar sobrecarga

### 📄 Páginas em Construção
- **Sistema de busca:** Funcionalidade de pesquisa avançada de notícias
- **Filtros por categoria:** Filtros dinâmicos por esporte, data, relevância
- **Página de perfil:** Área do usuário com preferências e histórico
- **Sistema de comentários:** Interação da comunidade com as notícias
- **Newsletter:** Sistema de assinatura para receber notícias por email
- **Páginas de estatísticas:** Dashboards com dados dos esportes
- **Seção de vídeos:** Player integrado para vídeos relacionados às notícias

### 🔧 Melhorias Planejadas
- **PWA (Progressive Web App):** Funcionalidades offline e instalação no dispositivo
- **Dark mode:** Tema escuro para melhor experiência noturna
- **Internacionalização (i18n):** Suporte a múltiplos idiomas
- **Acessibilidade:** Melhorias para usuários com necessidades especiais
- **Performance:** Otimizações adicionais para carregamento mais rápido

 
## 🛠️ Desenvolvimento

### 📝 Convenções
- **Componentes:** PascalCase
- **Arquivos:** kebab-case
- **Props:** camelCase
- **CSS:** Tailwind classes

### 🧪 Testes
```bash
# Executar testes (quando implementados)
npm test

# Testes de integração
npm run test:integration
```

## 📦 Deploy

### 🚀 Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### 🌐 Outras Plataformas
- **Netlify:** Compatível
- **AWS:** S3 + CloudFront
- **DigitalOcean:** App Platform

## 🤝 Contribuição

### 📋 Como Contribuir
1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

### 🐛 Reportar Bugs
- Use o sistema de Issues do GitHub
- Inclua screenshots se possível
- Descreva os passos para reproduzir

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Desenvolvido com ❤️ para a comunidade esportiva**

---

## 🎉 Agradecimentos

- **Unsplash** pelas imagens de alta qualidade
- **Next.js** pela excelente framework
- **Tailwind CSS** pelo sistema de design
- **TypeScript** pela tipagem estática

---

**🏆 Sports News - Onde a paixão pelo esporte encontra a tecnologia!**

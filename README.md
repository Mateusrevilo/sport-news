# 🏆 Sports News - Portal de Notícias Esportivas

Um portal moderno de notícias esportivas construído com Next.js 15, TypeScript e Tailwind CSS, com arquitetura inspirada em MVC, integração com API de notícias e páginas temáticas para ligas e campeonatos.

## 🚀 O que foi implementado

### 🧠 Arquitetura
- Estrutura organizada com separação entre modelos, controladores e serviços.
- Lógica de notícias centralizada para facilitar manutenção e expansão.
- Rotas de API internas consumidas pelo frontend com Next.js App Router.

### 📰 Integração com API de notícias
- Consumo de notícias externas via News API.
- Filtro para exibir apenas conteúdos relacionados a esportes.
- Fallback para conteúdo local quando a API não retorna dados.
- Endpoint interno em `/api/news` para abastecer a interface.

### 🏠 Página inicial
- Hero section com vídeo de fundo e CTA para visualizar notícias.
- Grid responsivo de notícias com cards interativos.
- Atualização manual das notícias via botão de refresh.

### 🏅 Páginas de categorias
- Página de ligas com seleção interativa por clube/competição.
- Página de campeonatos com layout dedicado.
- Páginas temáticas para explorar notícias por contexto esportivo.

### 🎨 Experiência visual
- Interface responsiva e moderna.
- Estilização com Tailwind CSS.
- Cards com melhor hierarquia visual e destaque para categorias.

## 🛠️ Tecnologias utilizadas

- **Framework:** Next.js 15
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **API:** News API + Axios
- **Arquitetura:** MVC simplificada em pastas `models`, `controllers` e `services`

## 📁 Estrutura do projeto

```text
src/
├── app/
│   ├── api/
│   │   └── news/
│   │       └── route.ts
│   ├── components/
│   ├── noticias/
│   ├── page.tsx
│   └── layout.tsx
├── controllers/
├── models/
├── services/
├── types/
└── public/videos
```

## ▶️ Como executar

### Pré-requisitos
- Node.js 18+
- npm

### Instalação
```bash
git clone <url-do-repositorio>
cd sport-news
npm install
npm run dev
```

### Scripts disponíveis
```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 🌐 Variáveis de ambiente

Crie um arquivo `.env` com:

```env
NEWS_API_KEY=sua_chave_da_news_api
```

## ✅ Próximos passos sugeridos

- Adicionar busca por palavra-chave.
- Implementar cache para reduzir chamadas à API.
- Criar páginas detalhadas de cada notícia com conteúdo completo.
- Integrar mais fontes de notícias esportivas.


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

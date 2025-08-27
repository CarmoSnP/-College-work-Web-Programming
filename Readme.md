# Trabalho 1 – Programação Web 🔐

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

---

## Descrição

Este projeto é um **sistema web simples com autenticação**, desenvolvido para a disciplina de **Programação Web**.  
O sistema possui:

- **Tela de Login** (frontend)
- **Tela de Acesso Restrito** (backend)
- **Autenticação com cookies** (manter usuário conectado por até 3 dias)
- **Logout com limpeza de sessão e cookies**

---

## Requisitos Implementados

1. **Tela de login** com autenticação via backend (`Node.js/Express`).

   - Credenciais fixas no código (sem banco de dados externo).
   - Usuário autenticado é redirecionado para **Acesso Restrito**.

2. **Opção “manter conectado”** salva cookie por **3 dias**.

3. Se o cookie for válido, usuário é redirecionado automaticamente para **Acesso Restrito** sem passar pela tela de login.

4. **Logout** remove a sessão e cookies, redirecionando para a tela de login.

---

## Estrutura do Projeto

```python
project-root/
├── backend/                  # Tudo relacionado ao servidor
│   ├── src/
│   │   ├── controllers/      # Controladores das rotas
│   │   ├── services/         # Regras de negócio / lógica
│   │   ├── models/           # Modelos de dados (ex: Mongoose, Sequelize)
│   │   ├── routes/           # Definição das rotas da API
│   │   ├── middlewares/      # Middlewares de autenticação, validação, etc
│   │   ├── config/           # Configurações do servidor
│   │   └── app.js            # Arquivo principal do Express
│   ├── .env                  # Variáveis de ambiente
│   └── package.json          # Dependências do backend
│
├── frontend/                 # Tudo relacionado à interface
│   ├── public/               # Arquivos estáticos acessados pelo navegador
│   │   ├── assets/
│   │   │   ├── images/       # Imagens
│   │   │   ├── audio/        # Áudios
│   │   │   └── video/        # Vídeos
│   │   └── index.html        # Página principal
│   ├── src/                  # Código-fonte da interface
│   │   ├── styles/           # Estilos (CSS, SCSS, etc)
│   │   ├── scripts/          # Scripts JS
│   │   ├── components/       # Componentes reutilizáveis
│   │   └── pages/            # Páginas da aplicação
│   └── package.json          # Dependências do frontend (Vite, Webpack, etc)
│
├── README.md                 # Documentação do projeto
└── .gitignore                # Arquivos a serem ignorados pelo Git
```

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/
cd project-root
```

### BackEnd

```bash
cd backend
npm install
npm start
```

### FrontEnd

```bash
cd frontend
npm install
npm run dev
```

### Aplicação será iniciada em:

```bash
http://localhost:
```

# Agendei Web 💻

![Badge](https://img.shields.io/badge/Platform-Web-brightgreen)
![Badge](https://img.shields.io/badge/Framework-React-blue)
![Badge](https://img.shields.io/badge/License-MIT-green)

---

<div align="center">

![Agendei Logo](./src/assets/images/Logo.png)

### Sistema de Agendamento de Consultas Médicas - Painel Admin

</div>

---

## 📱Sobre o Sistema

O **Agendei Web** é um painel administrativo para gerenciamento de agendamentos de consultas médicas. Desenvolvido com React, permite que administradores gerenciem médicos, serviços, pacientes e agendamentos de forma eficiente.

---

## 🚀Funcionalidades

### ✨Principais
- 🔐 **Autenticação** - Login seguro de administradores
- 👨‍⚕️ **Gerenciamento de Médicos** - Cadastro, edição e exclusão
- 🏥 **Serviços/Especialidades** - Cadastro de especialidades médicas
- 👥 **Pacientes** - Gerenciamento de usuários cadastrados
- 📅 **Agendamentos** - Visualização e gerenciamento de consultas
- 📊 **Dashboard** - Visão geral das atividades

### 📱Telas
- **Login** - Acesso ao sistema
- **Cadastro** - Registro de novos administradores
- **Agendamentos** - Lista de todos os agendamentos
- **Médicos** - CRUD de médicos
- **Serviços** - CRUD de especialidades
- **Pacientes** - Lista de pacientes
- **Perfil** - Edição de perfil do admin

---

## 🛠️Tecnologias

| Tecnologia | Descrição |
|------------|-----------|
| **React** | Biblioteca JavaScript para interface |
| **Vite** | Build tool moderno |
| **Axios** | Cliente HTTP |
| **React Router** | Gerenciamento de rotas |
| **React Bootstrap** | Componentes UI |
| **Netlify** | Hospedagem |

---

## 📁Estrutura do Projeto

```
agendei-web/
├── public/                  # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos
│   │   └── images/        # Logo e imagens
│   ├── components/        # Componentes reutilizáveis
│   │   └── navbar/        # Barra de navegação
│   ├── constantes/        # Configurações
│   │   └── api.js         # API client
│   ├── pages/             # Páginas do sistema
│   │   ├── login/         # Login
│   │   ├── register/       # Cadastro
│   │   ├── appointments/   # Agendamentos
│   │   ├── doctors/        # Médicos
│   │   ├── services/       # Serviços
│   │   ├── users/          # Pacientes
│   │   └── profile/        # Perfil
│   ├── styles/            # Estilos globais
│   │   └── global.css     # CSS global
│   ├── rotas.jsx          # Rotas do sistema
│   └── main.jsx           # Entry point
├── index.html             # HTML principal
├── package.json          # Dependências
└── vite.config.js        # Configuração Vite
```

---

## ⚙️Configuração

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/jairalvarengapereira/Agendei-WEB.git

# Entre no diretório
cd Agendei-WEB

# Instale as dependências
npm install

# Inicie o projeto
npm run dev
```

### Build para Produção

```bash
npm run build
```

---

## 🔗APIs e Integrações

- **API Principal**: https://agendei-api-53h2.onrender.com
- **Frontend**: https://agendeiweb.netlify.app

---

## 🗄️Estrutura do Banco de Dados

### Tabelas Principais

| Tabela | Descrição |
|--------|-----------|
| `admins` | Administradores do sistema |
| `doctors` | Médicos cadastrados |
| `services` | Especialidades médicas |
| `users` | Pacientes |
| `doctors_services` | Serviços por médico |
| `appointments` | Agendamentos |

---

## 📄Licença

MIT License © 2026 Jair Alvarenga Pereira

---

## 👨‍💻Autor

**Jair Alvarenga Pereira**

- GitHub: [@jairalvarengapereira](https://github.com/jairalvarengapereira)

---

## 🔄Projetos Relacionados

- 📱 **Agendei Mobile**: https://github.com/jairalvarengapereira/Agendei-MOBILE
- 🔧 **Agendei API**: https://github.com/jairalvarengapereira/Agendei-API

---

<div align="center">

**Made with ❤️ for healthcare**

</div>
# Agendei - Sistema de Agendamento de Consultas Médicas

Sistema completo para gerenciamento de agendamentos de consultas médicas, com interface web e API REST.

## 📋 Descrição

O **Agendei** é uma aplicação web que permite o gerenciamento de consultas médicas, médicos, serviços e pacientes. Ideal para clínicas e consultórios que precisam organizar sua agenda de atendimentos.

## 🏗️ Arquitetura

```
├── agendei-web/          # Frontend (React + Vite)
│   └── Interface de usuário
│
└── agendei-API/          # Backend (Express.js + PostgreSQL)
    └── API RESTful
```

## 🚀 Tecnologias

### Frontend
- **React** - Biblioteca JavaScript para interface
- **Vite** - Build tool moderno
- **Axios** - Cliente HTTP
- **React Router** - Gerenciamento de rotas
- **React Confirm Alert** - Confirmações de ações
- **Netlify** - Hospedagem

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação por tokens
- **Render** - Hospedagem da API
- **Neon** - Banco de dados PostgreSQL na nuvem

## 📦 Instalação

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Backend (agendei-API)
```bash
cd agendei-API
npm install
npm start
```

### Frontend (agendei-web)
```bash
cd agendei-web
npm install
npm run dev
```

## 🔧 Variáveis de Ambiente

### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@host/neondb?sslmode=require
PORT=3001
```

## 📡 Endpoints da API

### Autenticação
- `POST /admin/login` - Login de administrador
- `POST /admin/register` - Registro de administrador
- `POST /users/login` - Login de usuário
- `POST /users` - Registro de usuário

### Médicos
- `GET /doctors` - Listar médicos (requer token)
- `GET /doctors/:id` - Detalhes do médico
- `POST /doctors` - Cadastrar médico
- `PUT /doctors/:id` - Atualizar médico
- `DELETE /doctors/:id` - Excluir médico

### Serviços/Especialidades
- `GET /services` - Listar serviços (público)
- `POST /services` - Cadastrar serviço (requer token)
- `PUT /services/:id` - Atualizar serviço
- `DELETE /services/:id` - Excluir serviço

### Agendamentos
- `GET /appointments` - Listar agendamentos do usuário
- `POST /appointments` - Criar agendamento
- `DELETE /appointments/:id` - Cancelar agendamento

### Admin
- `GET /admin/appointments` - Todos os agendamentos
- `GET /admin/users` - Listar usuários
- `POST /admin/appointments` - Criar agendamento (admin)

## 🗄️ Estrutura do Banco de Dados

### Tabelas

#### admins
| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id_admin | SERIAL | ID único |
| name | VARCHAR(50) | Nome |
| email | VARCHAR(100) | Email |
| password | VARCHAR(100) | Senha criptografada |

#### doctors
| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id_doctor | SERIAL | ID único |
| name | VARCHAR(50) | Nome do médico |
| specialty | VARCHAR(50) | Especialidade |
| icon | VARCHAR(10) | Ícone (M/F) |

#### services
| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id_service | SERIAL | ID único |
| description | VARCHAR(50) | Descrição do serviço |

#### users
| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id_user | SERIAL | ID único |
| name | VARCHAR(50) | Nome |
| email | VARCHAR(100) | Email |
| password | VARCHAR(100) | Senha |
| fone | VARCHAR(20) | Telefone |
| cep, logr, num, compl, bairro, cidade, uf | VARCHAR/TEXT | Endereço |

#### doctors_services
| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id_doctor_service | SERIAL | ID único |
| id_doctor | INTEGER | FK médicos |
| id_service | INTEGER | FK serviços |
| price | NUMERIC(9,2) | Preço |

#### appointments
| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id_appointment | SERIAL | ID único |
| id_doctor | INTEGER | FK médico |
| id_service | INTEGER | FK serviço |
| id_user | INTEGER | FK usuário |
| booking_date | DATE | Data |
| booking_hour | VARCHAR(5) | Hora |

## 🌐 Links de Produção

- **Frontend**: https://agendeiweb.netlify.app
- **API**: https://agendei-api-53h2.onrender.com

## 📱 Funcionalidades

1. **Login/Registro** - Autenticação de usuários e administradores
2. **Gerenciamento de Médicos** - CRUD de médicos e especialidades
3. **Gerenciamento de Serviços** - Cadastro de serviços médicos
4. **Agendamento** - Criar, listar e cancelar consultas
5. **Perfil** - Edição de dados do usuário
6. **Dashboard Admin** - Visão geral de todos os agendamentos

## 📝 Scripts Disponíveis

### Backend
```bash
npm start          # Iniciar servidor
npm run dev        # Desenvolvimento (se disponível)
```

### Frontend
```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build de produção
npm run preview    # Preview do build
npm run lint       # Verificar código
```

## 📄 Licença

Este projeto está sob licença MIT.

## 👤 Autor

Jair Alvarenga Pereira

## 🔄 Repositórios

- **Frontend**: https://github.com/jairalvarengapereira/Agendei-WEB
- **Backend**: https://github.com/jairalvarengapereira/Agendei-API

---

Made with ❤️ for healthcare management
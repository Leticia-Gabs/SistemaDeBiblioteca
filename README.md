<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-11.0.1-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS Version" />
  <img src="https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Version" />
  <img src="https://img.shields.io/badge/MySQL-3.15.2-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Version" />
  <img src="https://img.shields.io/badge/TypeORM-0.3.27-262627?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM Version" />
</p>

<h1 align="center">📚 Sistema de Biblioteca</h1>

<p align="center">
  <strong>Um sistema completo de gerenciamento de biblioteca construído com NestJS</strong>
</p>

<p align="center">
  Sistema moderno para controle de empréstimos, usuários, livros e administradores de biblioteca
</p>

## 🚀 Funcionalidades

### 📖 Gestão de Livros
- Cadastro e edição de livros
- Controle de autor, título e ano de publicação
- Busca e listagem de livros

### 👥 Gestão de Usuários
- Cadastro de usuários com dados completos
- Controle de CPF e email únicos
- Status ativo/inativo dos usuários

### 📚 Sistema de Empréstimos
- Registro de empréstimos com datas
- Controle de devolução prevista e real
- Sistema de multas por atraso
- Observações personalizadas

### 👨‍💼 Administração
- Módulo dedicado para administradores
- Controle de acesso e permissões

## 🏗️ Arquitetura

O sistema é construído seguindo os princípios do NestJS com uma arquitetura modular:

```
src/
├── administrador/     # Módulo de administradores
├── autor/            # Módulo de autores
├── emprestimo/       # Módulo de empréstimos
├── Livro/           # Módulo de livros
├── usuario/         # Módulo de usuários
└── app.module.ts    # Módulo principal
```

## 🛠️ Tecnologias Utilizadas

- **NestJS 11.0.1** - Framework Node.js
- **TypeScript 5.7.3** - Linguagem de programação
- **TypeORM 0.3.27** - ORM para banco de dados
- **MySQL 3.15.2** - Banco de dados
- **Jest** - Framework de testes

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- MySQL (versão 8.0 ou superior)
- npm ou yarn

## ⚙️ Configuração do Ambiente

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd SistemaDeBiblioteca
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
MYSQL_DB_HOST=localhost
MYQSL_DB_PORT=3306
MYSQL_DB_USERNAME=seu_usuario
MYSQL_DB_PASSWORD=sua_senha
MYSQL_DB_DATABASE=nome_do_banco
```

### 4. Execute o projeto

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run start:prod
```

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 📊 Estrutura do Banco de Dados

### Tabelas Principais:
- **usuarios** - Dados dos usuários da biblioteca
- **livros** - Catálogo de livros
- **emprestimos** - Registro de empréstimos
- **administradores** - Usuários administrativos
- **autores** - Autores dos livros

## 🔧 Scripts Disponíveis

```bash
npm run start          # Inicia o servidor
npm run start:dev      # Inicia em modo desenvolvimento
npm run start:debug    # Inicia em modo debug
npm run start:prod     # Inicia em modo produção
npm run build          # Compila o projeto
npm run test           # Executa testes unitários
npm run test:e2e       # Executa testes e2e
npm run test:cov       # Executa testes com cobertura
npm run lint           # Executa o linter
npm run format         # Formata o código
```

## 📝 API Endpoints

### Usuários
- `GET /usuario` - Lista todos os usuários
- `POST /usuario` - Cria um novo usuário
- `GET /usuario/:id` - Busca usuário por ID
- `PUT /usuario/:id` - Atualiza usuário
- `DELETE /usuario/:id` - Remove usuário

### Livros
- `GET /livro` - Lista todos os livros
- `POST /livro` - Cadastra novo livro
- `GET /livro/:id` - Busca livro por ID
- `PUT /livro/:id` - Atualiza livro
- `DELETE /livro/:id` - Remove livro

### Empréstimos
- `GET /emprestimo` - Lista todos os empréstimos
- `POST /emprestimo` - Registra novo empréstimo
- `PUT /emprestimo/:id` - Atualiza empréstimo
- `DELETE /emprestimo/:id` - Remove empréstimo

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


<p align="center">
  Feito com ❤️ usando <a href="https://nestjs.com">NestJS</a>
</p>

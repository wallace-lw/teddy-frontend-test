## Teddy Front-end Teste - Aplicação com React, Vite e TypeScript

Deploy - **https://teddy-frontend-test.vercel.app/**

Este repositório contém uma aplicação web desenvolvida com **React**, **Vite** e **TypeScript**, utilizando **Tailwind CSS** para estilização e seguindo os padrões de componentização. A aplicação foi dockerrizada e implantada na **Vercel**. Além disso, a biblioteca **shadcn** foi usada para acelerar o desenvolvimento da interface, e **React Hook Form** junto com **Zod** foram implementados para lidar com formulários e validação.

---

### 🛠️ Tecnologias e Ferramentas

- **React** + **Vite** + **TypeScript**: Estrutura principal da aplicação, com o Vite para um bundling rápido e eficiente.
- **Tailwind CSS**: Framework de CSS para estilização rápida e responsiva.
- **ShadCN**: Biblioteca de componentes que ajudou a agilizar o desenvolvimento da interface.
- **React Hook Form**: Gerenciamento de formulários com alta performance.
- **Zod**: Biblioteca de validação de esquemas para validação de dados dos formulários.
- **Docker**: Aplicação dockerizada para facilidade de configuração e deploy.
- **Vercel**: Plataforma de deploy onde a aplicação está hospedada.

---

## 🚀 Instalação e Execução

### Rodando Localmente

Para rodar a aplicação localmente, execute os seguintes comandos:

1. Instale as dependências:
   ```bash
    npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
    npm run dev
   ```
A aplicação estará disponível em https://localhost:5173.
   
### Rodando com Docker
Para rodar a aplicação usando Docker, siga os passos abaixo:

1. Construa a imagem Docker:
    ```bash
    docker build -t teddy-test .
   ```
2. Construa a imagem Docker:
    ```bash
    docker run -p 80:80 teddy-test
   ```
A aplicação estará acessível em https://localhost quando executada em Docker.

### 🌐 Proxy para API REST e Resolução de CORS
Para resolver problemas de bloqueio de CORS (Cross-Origin Resource Sharing), foi implementado um proxy usando uma server function na Vercel. Essa função server atua como intermediária, recebendo as requisições da aplicação e redirecionando-as para a API REST. Essa solução permite contornar restrições de CORS ao manter a comunicação com a API de forma segura e eficaz.

O deploy do proxy também foi feito na Vercel, garantindo integração contínua com o frontend.


### 📂 Estrutura de Componentes
O projeto foi estruturado seguindo os padrões de componentização para garantir um código modular e fácil de manter. Utilizamos o shadcn para componentes reutilizáveis e estilização rápida, mantendo um estilo visual consistente em toda a aplicação.

### 📋 Formulários e Validação
A aplicação utiliza React Hook Form para o gerenciamento eficiente dos formulários, enquanto Zod é usado para a validação de dados. Essa combinação permite uma validação poderosa, garantindo que apenas dados válidos sejam enviados.


### 🌐 Deploy na Vercel
A aplicação foi implantada na Vercel, permitindo um deploy rápido e fácil, além de uma integração contínua. A Vercel oferece uma infraestrutura altamente escalável e otimizada para aplicações web modernas.
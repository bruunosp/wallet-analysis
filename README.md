# 💳 Gastos no Cartão de Crédito por Categoria

Projeto em fase de desenvolvimento com o objetivo de criar uma aplicação web que permite aos usuários fazer login via **OAuth2 no Mercado Pago** e gerar **relatórios de gastos no cartão de crédito**, incluindo:

- Comparativos **Ano a Ano (Y/Y)** e **Mês a Mês (MoM)**
- Gráficos interativos por categoria de gasto
- Insights financeiros personalizados

---

## 🆕 Atualizações mais recentes

- Criado a [base de dados](./backend/data/mockTransactions.json) mockada no site [Mokaroo](https://mockaroo.com/)
- Criado uma conexão API no backend [Server](./backend/routes/transactions.js)
- Consumindo a [API](./frontend//src/services/transactionsAPI.js) no frontend
- Adicionado visualizações de Resumo Geral, Gráfico de Gastos por Mês e Transações recentes na página principal (dashboard)

---

## ✅ Funcionalidades já implementadas

- Página inicial com:
  - Imagem de fundo
  - Cabeçalho
  - Campo de login (simples, armazena variável do nome do usuário)

- Página principal do dashboard:
  - Da as boas vindas para o usuário
  - Altera a imagem de fundo
  - Sobe o texto de boas vindas para o canto superior esquerdo
  - Apresenta o Resumo Geral, Gráfico de Gastos por Mês e as Transações Recentes

---

## ⚙️ Tecnologias e Dependências

### Frontend
- [Vite](https://vitejs.dev/) + React (JavaScript)
- [React Router Dom](https://reactrouter.com/)


### Backend
- Node.js (Express)
- `dotenv` para variáveis de ambiente
- `cors`, `crypto`, `node-fetch` para futura integração com APIs

---

## 🛠️ Como rodar o projeto localmente

> ⚠️ O backend ainda está em desenvolvimento. Os comandos abaixo configuram o ambiente completo.

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/wallet-flow.git
cd wallet-flow
```

### 2. Instalar as dependências do frontend
```bash
cd frontend
npm install
npm install react-router-dom
npm install recharts
```

### 3. Instalar as dependências do backend
```bash
cd ../backend
npm init -y
npm install express dotenv node-fetch cors crypto
```

### 4. Clonar o .env do backend
```bash
cp .env.example .env
```

### 5. Rodar o frontend
```bash
cd ../frontend
npm run dev
```

### 6. Rodar o backend
```bash
cd ../backend
node ./server/server.js
```
---

## Estrutura de Pastas

```
wallet-flow/
│
├── backend/
│   ├── node_modules/
│   ├── server/
│   │   └─ index.js
│   ├── .env
│   ├── .env.example
│   ├── package-lock.json
│   └── package.json
│
├── frontend/             
│   ├── node_modules/
│   ├── src/
│   │   ├─ assets/
│   │   │  ├─ database/
│   │   │  │  └─ transacoes_ficticias.csv
│   │   │  │
│   │   │  └─ images/
│   │   │     ├─ bg-financas.jpg
│   │   │     ├─ carta-de-credito-control.jpg
│   │   │     ├─ logo.png
│   │   │     └─ mercado-pago.png
│   │   │
│   │   ├─ components/
│   │   │  ├─ Header.jsx
│   │   │  ├─ Login.jsx
│   │   │  └─ Main.jsx
│   │   │
│   │   ├─ context/
│   │   │  └─ UserContext.jsx
│   │   │
│   │   ├─ pages/
│   │   │  ├─ Dashboard.jsx
│   │   │  └─ Home.jsx
│   │   │
│   │   ├─ utils/
│   │   │  └─ utils.js
│   │   │
│   │   ├─ App.jsx
│   │   ├─ index.css
│   │   └─ main.jsx
│   │
│   ├── .env
│   ├── .gitignore
│   ├── .eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── package-lock.json 
└── README.md

```

---

## 🧠 Melhorias Futuras

- 🔐 Autenticação via OAuth2 (inicialmente com Mercado Pago)
- 🏦 Integração com múltiplos bancos
- 📊 Dashboard completo com gráficos dinâmicos (D3.js, Chart.js ou Recharts)
- 🤖 Aplicação de Machine Learning para prever e classificar gastos
- 🌐 Publicação em domínio gratuito para acesso público

## 🙋‍♂️ Author

- Criado por Bruno Felipe Passareli, com apoio do ChatGPT.
- Objetivo: aprimorar habilidades em engenharia de prompt, full stack web development e APIs financeiras.

---

## 🤝 Contribuições
Sinta-se à vontade para:
- Fazer um fork do projeto
- Criar pull requests
- Reportar bugs ou sugerir melhorias
Se achou útil, deixe uma ⭐ no repositório!

---

Sinta-se livre para contribuir ou deixar uma ⭐ se achou útil!
import express from 'express';
import cors from 'cors';
import transactionsRoute from '../routes/transactions.js';

const app = express();
const PORT = 3000;

app.use(cors());          // Essencial para o frontend acessar a API
app.use(express.json());

app.use('/api/transactions', transactionsRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

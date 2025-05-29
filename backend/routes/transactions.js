import { Router } from 'express';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();

// Caminho absoluto para o JSON
const __filename = fileURLToPath(import.meta.url);                          // Encontra o caminho da pasta atual (onde está o script atual)
const __dirname = path.dirname(__filename);                                 // Pega apenas o nome do diretório (sem considerar o nome do script atual)
const filePath = path.join(__dirname, '../data/mockTransactions.json');     // Cria o caminho + o nome do arquivo com os dados

router.get('/', async (req, res) => {
    try {
      const data = await readFile(filePath, 'utf-8');
      const transactions = JSON.parse(data);
      res.json(transactions);
    } 
    
    catch (err) {
      console.error('Erro ao ler arquivo JSON:', err);
      res.status(500).json({ error: 'Erro ao ler dados.' });
    }
  }
);

export default router;

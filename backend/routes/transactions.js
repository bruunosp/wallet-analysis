import { Router } from 'express';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();

// Caminho absoluto para o JSON
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../data/mockTransactions.json');

router.get('/', async (req, res) => {
  try {
    const data = await readFile(filePath, 'utf-8');
    const transactions = JSON.parse(data);
    res.json(transactions);
  } catch (err) {
    console.error('Erro ao ler arquivo JSON:', err);
    res.status(500).json({ error: 'Erro ao ler dados.' });
  }
});

export default router;

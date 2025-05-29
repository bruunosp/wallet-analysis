import API_BASE_URL from './api';

export const fetchTransactions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/transactions`);
    if (!response.ok) {
      throw new Error('Erro ao buscar transações');
    }
    return await response.json();
  } 
  
  catch (err) {
    console.error('Erro na API:', err);
    throw err;
  }
};
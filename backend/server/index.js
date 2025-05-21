import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';
import crypto from 'crypto';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

// 1. Rota que redireciona para o login do Mercado Pago
app.get('/auth/login', (req, res) => {
  const redirectUri = process.env.MP_REDIRECT_URI;
  const clientId = process.env.MP_CLIENT_ID;
  const state = crypto.randomUUID(); // prevenção CSRF

  const authUrl = `https://auth.mercadopago.com.br/authorization?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&state=${state}`;

  res.redirect(authUrl);
});

// 2. Rota que recebe o code e troca por access_token
app.get('/auth/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const response = await fetch('https://api.mercadopago.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: process.env.MP_CLIENT_ID,
        client_secret: process.env.MP_CLIENT_SECRET,
        code,
        redirect_uri: process.env.MP_REDIRECT_URI,
      }),
    });

    const data = await response.json();

    if (data.access_token) {
      console.log('✅ Access token recebido com sucesso.');
      res.json({
        message: 'Autenticação realizada com sucesso!',
        access_token: data.access_token,
        user_id: data.user_id,
        expires_in: data.expires_in,
      });
    } else {
      console.error('❌ Erro ao obter access_token:', data);
      res.status(400).json({ error: 'Erro ao autenticar com Mercado Pago.', details: data });
    }
  } catch (err) {
    console.error('❌ Erro interno na autenticação:', err);
    res.status(500).send('Erro interno ao autenticar.');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

// Carrega variáveis de ambiente do arquivo .env
require("dotenv").config({ path: '../../.env' });

const express = require('express');
const cors = require('cors');

// Cria a aplicação Express
const app = express();

// Middleware para permitir JSON no corpo das requisições
app.use(express.json());

// Configuração do CORS (permite requisições de diferentes origens)
const corsOptions = {
  origin: process.env.CORS_ORIGIN, // Define a origem permitida para requisições
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
};

console.log('CORS_ORIGIN:', process.env.CORS_ORIGIN);
app.use(cors(corsOptions));

// Importa as rotas de diferentes entidades
const microorganismosRoutes = require('./routes/microorganismosRoutes');
const pontosAvaliadosRoutes = require('./routes/pontosAvaliadosRoutes');
const limitesContagemRoutes = require('./routes/limitesContagemRoutes');
const resultadosRoutes = require('./routes/resultadosRoutes');

// Define os caminhos base para cada grupo de rotas
app.use('/api/pontosavaliados', pontosAvaliadosRoutes);
app.use('/api/microorganismos', microorganismosRoutes);
app.use('/api/limitescontagem', limitesContagemRoutes);
app.use('/api/resultados', resultadosRoutes);

// Rota principal para testar se o servidor está rodando
app.get('/', (req, res) => {
  res.send("Está funcionando!");
});

// Exporta a aplicação para ser usada no servidor principal
module.exports = app;

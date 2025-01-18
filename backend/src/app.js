// Importa o módulo Express, que é um framework para construir aplicativos web e APIs no Node.js
const express = require('express');

// Cria uma instância da aplicação Express
const app = express();

// Middleware para parsing de JSON:
// Este middleware integrado ao Express é usado para analisar o corpo das requisições (request body) como JSON.
// Ele transforma o corpo da requisição em um objeto JavaScript acessível via req.body.
// Exemplo: uma requisição com um JSON no body será transformada em um objeto para fácil manipulação.
app.use(express.json());

// Importa as rotas relacionadas a "microorganismos" do arquivo de rotas
// Este arquivo define todas as rotas e lógicas para manipular dados de microorganismos (ex.: criar, listar, etc.).
const microorganismosRoutes = require('./routes/microorganismosRoutes');

// Associa as rotas importadas ao caminho base "/api/microorganismos"
// Todas as rotas definidas no arquivo microorganismosRoutes serão acessíveis a partir deste caminho base.
// Exemplo: uma rota GET definida como "/" no arquivo microorganismosRoutes será acessada como "/api/microorganismos".
app.use('/api/microorganismos', microorganismosRoutes);

// Exporta a instância do aplicativo Express para que ela possa ser utilizada em outro arquivo
// Geralmente, este arquivo é importado no "server.js" para inicializar o servidor.
module.exports = app;

// Importa o módulo `app` do arquivo app.js, que contém a configuração do servidor Express e as rotas definidas.
const app = require('./app');

// Define a porta em que o servidor irá rodar.
// Primeiro verifica se a variável de ambiente `PORT` está definida (útil em produção, como em serviços na nuvem).
// Caso contrário, utiliza a porta padrão `3000`.
const PORT = process.env.PORT || 5000;

// Inicia o servidor, fazendo com que ele escute as requisições na porta definida.
// O método `listen` aceita dois parâmetros: a porta e uma função de callback que será executada assim que o servidor estiver rodando.
app.listen(PORT, () => {
  // Exibe no console uma mensagem informando que o servidor está rodando e em qual porta.
  console.log(`Servidor rodando na porta ${PORT}`);
});
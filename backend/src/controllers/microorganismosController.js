// Importa o Prisma Client configurado no arquivo database.js
const { get } = require('../app');
const prisma = require('../utils/database');

// Função assíncrona para criar um microorganismo no banco de dados
const createMicroorganismo = async (req, res) => {
  try {
    // Desestrutura os campos esperados do corpo da requisição (req.body)
    const { nome, descricao, ativo, data_cadastro, data_desativacao } = req.body;

    // Validação básica para garantir que campos obrigatórios estão preenchidos
    if (!nome || ativo === undefined || !data_cadastro) {
      // Retorna um erro 400 (Bad Request) se os campos obrigatórios não forem fornecidos
      return res.status(400).json({ error: 'Os campos nome, ativo e data_cadastro são obrigatórios.' });
    }

    // Cria um novo registro de microorganismo no banco de dados
    const novoMicroorganismo = await prisma.microorganismos.create({
      data: {
        nome, // Nome do microorganismo (obrigatório)
        descricao, // Descrição do microorganismo (opcional)
        ativo, // Indica se o microorganismo está ativo ou não (obrigatório)
        data_cadastro: new Date(data_cadastro), // Converte a data de cadastro para o formato Date
        data_desativacao: data_desativacao ? new Date(data_desativacao) : null, // Converte a data de desativação, se fornecida, ou define como null
      },
    });

    // Retorna a resposta com o status 201 (Created) e o registro criado no banco
    res.status(201).json(novoMicroorganismo);
  } catch (error) {
    // Captura qualquer erro durante o processo e exibe no console
    console.error('Erro ao criar microorganismo:', error);

    // Retorna uma resposta 500 (Internal Server Error) com uma mensagem de erro
    res.status(500).json({ error: 'Erro ao criar microorganismo.' });
  }
};

// Função assíncrona para buscar todos os microorganismos no banco de dados
const getMicroorganismos = async (req, res) => {
  try {
    // Busca todos os registros da tabela 'microorganismos'
    const microorganismos = await prisma.microorganismos.findMany();

    // Retorna os microorganismos encontrados em formato JSON
    res.status(200).json(microorganismos);
  } catch (error) {
    // Em caso de erro, exibe o erro no console e retorna um erro 500 (Internal Server Error)
    console.error('Erro ao buscar microorganismos:', error);
    res.status(500).json({ error: 'Erro ao buscar microorganismos.' });
  }
};

// Exporta a função para ser usada em outros módulos (como nas rotas)
module.exports = { createMicroorganismo, getMicroorganismos };

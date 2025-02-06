// Importa o Prisma Client configurado no arquivo database.js
const { get } = require('../app');
const prisma = require('../utils/database');

// Função assíncrona para criar um microorganismo no banco de dados
const createMicroorganismo = async (req, res) => {
  try {
    const { nome, descricao } = req.body;
    // Validação de campos obrigatórios
    if (!nome) {
      return res.status(400).json({ error: 'O campo nome é obrigatório.' });
    }

    // Verifica se o microrganismo já existe
    const existingMicroorganismo = await prisma.microorganismos.findFirst({
      where: { nome },
    });

    if (existingMicroorganismo) {
      if (!existingMicroorganismo.ativo) {
        // Reativa o microrganismo se ele estiver inativo
        const updatedMicroorganismo = await prisma.microorganismos.update({
          where: { id: existingMicroorganismo.id },
          data: { ativo: true, data_desativacao: null },
        });
        return res.status(200).json(updatedMicroorganismo);
      } else {
        return res.status(400).json({ error: 'Microorganismo já está cadastrado.' });
      }
    }

    // Criação de um novo microrganismo
    const novoMicroorganismo = await prisma.microorganismos.create({
      data: {
        nome,
        descricao,
        ativo: true, // Define como ativo por padrão
        data_cadastro: new Date(), // Define a data atual
      },
    });

    res.status(201).json(novoMicroorganismo);
  } catch (error) {
    console.error('Erro ao criar microorganismo:', error);
    res.status(500).json({ error: 'Erro ao criar microorganismo.' });
  }
};

// Função assíncrona para buscar todos os microorganismos ativos no banco de dados
const getMicroorganismos = async (req, res) => {
  try {
    // Busca apenas os microorganismos que estão ativos
    const microorganismos = await prisma.microorganismos.findMany({
      where: {
        ativo: true, // Filtra apenas os registros com ativo = true
      },
    });

    // Retorna os microorganismos encontrados em formato JSON
    res.status(200).json(microorganismos);
  } catch (error) {
    // Em caso de erro, exibe o erro no console e retorna um erro 500 (Internal Server Error)
    console.error('Erro ao buscar microorganismos:', error);
    res.status(500).json({ error: 'Erro ao buscar microorganismos.' });
  }
};

// Função assíncrona para editar um microrganismo no banco de dados
const updateMicroorganismo = async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID da requisição
    const { nome, descricao, ativo } = req.body; // Obtém os dados da requisição

    // Busca o microrganismo pelo ID
    const existingMicroorganismo = await prisma.microorganismos.findUnique({
      where: { id: parseInt(id) }, // Converte o ID para inteiro
    });

    // Retorna erro se o microrganismo não for encontrado
    if (!existingMicroorganismo) {
      return res.status(404).json({ error: 'Microrganismo não encontrado.' });
    }

    // Gerencia a data de desativação
    let data_desativacao = existingMicroorganismo.data_desativacao;
    if (ativo === false && existingMicroorganismo.ativo === true) {
      data_desativacao = new Date(); // Define a data atual
    }

    // Atualiza o microrganismo no banco de dados
    const updatedMicroorganismo = await prisma.microorganismos.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        descricao,
        ativo,
        data_desativacao, // Atualiza ou mantém a data de desativação
      },
    });

    // Retorna o microrganismo atualizado
    res.status(200).json(updatedMicroorganismo);
  } catch (error) {
    console.error('Erro ao editar microrganismo:', error);
    res.status(500).json({ error: 'Erro ao editar microrganismo.' });
  }
};

// Exporta a função para ser usada em outros módulos (como nas rotas)
module.exports = { createMicroorganismo, getMicroorganismos, updateMicroorganismo};

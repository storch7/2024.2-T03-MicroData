// Importa o Prisma Client configurado no arquivo database.js
const { get } = require('../app');
const prisma = require('../utils/database');

// Função assíncrona para criar um microorganismo no banco de dados
const createMicroorganismo = async (req, res) => {
  try {
    const { nome, descricao, ativo, data_cadastro, data_desativacao } = req.body;

    if (!nome || ativo === undefined || !data_cadastro) {
      return res.status(400).json({ error: 'Os campos nome, ativo e data_cadastro são obrigatórios.' });
    }

    // Verifica se o microrganismo já existe
    const existingMicroorganismo = await prisma.microorganismos.findFirst({ where: { nome } });

    if (existingMicroorganismo) {
      if (!existingMicroorganismo.ativo) {
        // Atualiza o microrganismo para ativo
        const updatedMicroorganismo = await prisma.microorganismos.update({
          where: { id: existingMicroorganismo.id },
          data: { ativo: true },
        });
        return res.status(200).json(updatedMicroorganismo);
      } else {
        return res.status(400).json({ error: 'Microorganismo já está cadastrado.' });
      }
    }

    const novoMicroorganismo = await prisma.microorganismos.create({
      data: {
        nome,
        descricao,
        ativo,
        data_cadastro: new Date(data_cadastro),
        data_desativacao: data_desativacao ? new Date(data_desativacao) : null,
      },
    });

    res.status(201).json(novoMicroorganismo);
  } catch (error) {
    console.error('Erro ao criar microorganismo:', error);
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

// Função assíncrona para editar um microorganismo no banco de dados
const updateMicroorganismo = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao, ativo, data_desativacao } = req.body;

    const updatedMicroorganismo = await prisma.microorganismos.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        descricao,
        ativo,
        data_desativacao: data_desativacao ? new Date(data_desativacao) : null,
      },
    });

    res.status(200).json(updatedMicroorganismo);
  } catch (error) {
    console.error('Erro ao editar microorganismo:', error);
    res.status(500).json({ error: 'Erro ao editar microorganismo.' });
  }
};

// Exporta a função para ser usada em outros módulos (como nas rotas)
module.exports = { createMicroorganismo, getMicroorganismos, updateMicroorganismo};

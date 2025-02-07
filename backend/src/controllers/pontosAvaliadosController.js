// Importa o Prisma Client configurado no arquivo database.js
const prisma = require('../utils/database');

// Função assíncrona para criar um ponto avaliado no banco de dados
const createPontoAvaliado = async (req, res) => {
    try {
      const {
        sala,
        area,
        local_processo,
        metodo,
        frequencia,
        zona_proximidade,
        zona_higienico,
        data_desativacao,
      } = req.body;
  
      // Validação básica para campos obrigatórios
      if (
        !sala ||
        !area ||
        !local_processo ||
        !metodo ||
        !frequencia ||
        !zona_higienico ||
        !zona_proximidade
      ) {
        return res.status(400).json({
          error:
            'Os campos sala, area, local_processo, metodo, frequencia, zona_higienico e zona_proximidade são obrigatórios.',
        });
      }
  
      // Verifica se o ponto avaliado já existe pelo par (sala, área)
      const existingPonto = await prisma.pontosAvaliados.findFirst({
        where: { sala, area },
      });
  
      if (existingPonto) {
        if (!existingPonto.ativo) {
          // Reativa o ponto avaliado se ele estiver inativo
          const updatedPonto = await prisma.pontosAvaliados.update({
            where: { id: existingPonto.id },
            data: { ativo: true },
          });
          return res.status(200).json(updatedPonto);
        } else {
          // Retorna erro se o ponto já está cadastrado e ativo
          return res
            .status(400)
            .json({ error: 'Ponto avaliado já está cadastrado.' });
        }
      }
  
      // Criação de um novo ponto avaliado com valores padrão
      const novoPonto = await prisma.pontosAvaliados.create({
        data: {
          sala,
          area,
          local_processo,
          metodo,
          frequencia: frequencia.toUpperCase(), // Converte para maiúsculas antes de salvar
          zona_proximidade: zona_proximidade.toUpperCase(), // Converte para maiúsculas antes de salvar
          zona_higienico: zona_higienico.toUpperCase(), // Converte para maiúsculas antes de salvar
          ativo: true, // Definindo ativo como true por padrão
          data_cadastro: new Date(), // Gerando automaticamente a data atual
          data_desativacao: data_desativacao ? new Date(data_desativacao) : null,
        },
      });
  
      res.status(201).json(novoPonto);
    } catch (error) {
      console.error('Erro ao criar ponto avaliado:', error);
      res.status(500).json({ error: 'Erro ao criar ponto avaliado.' });
    }
};
  
// Função assíncrona para buscar todos os pontos avaliados com ativo = true
const getPontoAvaliado = async (req, res) => {
    try {
      // Recupera apenas os pontos avaliados que estão ativos
      const pontos = await prisma.pontosAvaliados.findMany({
        where: {
          ativo: true, // Filtra apenas os pontos com ativo = true
        },
      });
  
      res.status(200).json(pontos);
    } catch (error) {
      console.error('Erro ao buscar pontos avaliados:', error);
      res.status(500).json({ error: 'Erro ao buscar pontos avaliados.' });
    }
};

// Função assíncrona para editar um ponto avaliado
const updatePontoAvaliado = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        sala,
        area,
        local_processo,
        metodo,
        frequencia,
        zona_proximidade,
        zona_higienico,
        ativo,
      } = req.body;
  
      // Busca o ponto avaliado pelo ID para validar alterações
      const existingPonto = await prisma.pontosAvaliados.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (!existingPonto) {
        // Retorna erro se o ponto avaliado não for encontrado
        return res.status(404).json({ error: 'Ponto avaliado não encontrado.' });
      }
  
      // Atualiza data de desativação se o campo ativo mudar de true para false
      let data_desativacao = existingPonto.data_desativacao;
      if (ativo === false && existingPonto.ativo === true) {
        data_desativacao = new Date(); // Define a data atual
      }
  
      // Atualiza o ponto avaliado no banco de dados
      const updatedPonto = await prisma.pontosAvaliados.update({
        where: { id: parseInt(id) },
        data: {
          sala,
          area,
          local_processo,
          metodo,
          frequencia,
          zona_proximidade,
          zona_higienico,
          ativo,
          data_desativacao,
        },
      });
  
      res.status(200).json(updatedPonto);
    } catch (error) {
      console.error('Erro ao editar ponto avaliado:', error);
      res.status(500).json({ error: 'Erro ao editar ponto avaliado.' });
    }
};

  
  
  // Exporta as funções
  module.exports = {
    createPontoAvaliado,
    getPontoAvaliado,
    updatePontoAvaliado,
  };
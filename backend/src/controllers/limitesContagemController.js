// Importa o Prisma Client configurado no arquivo database.js
const prisma = require('../utils/database');

// Função assíncrona para criar um limite de contagem no banco de dados
const createLimiteContagem = async (req, res) => {
    try {
        const { limites_contagem, pontos_avaliados_id, microorganismos_id } = req.body;

        // Validação de campos obrigatórios
        if (limites_contagem === undefined || !pontos_avaliados_id || !microorganismos_id) {
            return res.status(400).json({
                error: 'Os campos limites_contagem, pontos_avaliados_id e microorganismos_id são obrigatórios.',
            });
        }

        // Convertendo para Float
        const limiteConvertido = parseFloat(limites_contagem);
        if (isNaN(limiteConvertido)) {
            return res.status(400).json({ error: 'O campo limites_contagem deve ser um número válido.' });
        }

        // Verifica se o ponto avaliado existe e está ativo
        const pontoAvaliado = await prisma.pontosAvaliados.findUnique({
            where: { id: pontos_avaliados_id },
        });

        if (!pontoAvaliado || !pontoAvaliado.ativo) {
            return res.status(404).json({ error: 'Ponto avaliado não encontrado ou inativo.' });
        }

        // Verifica se o microrganismo existe e está ativo
        const microorganismo = await prisma.microorganismos.findUnique({
            where: { id: microorganismos_id },
        });

        if (!microorganismo || !microorganismo.ativo) {
            return res.status(404).json({ error: 'Microorganismo não encontrado ou inativo.' });
        }

        // Verifica se já existe um limite de contagem ativo para esse ponto e microrganismo
        const existingLimite = await prisma.limitesContagem.findFirst({
            where: { pontos_avaliados_id, microorganismos_id, ativo: true },
        });

        if (existingLimite) {
            return res.status(400).json({ error: 'Já existe um limite de contagem ativo para este ponto avaliado e microrganismo.' });
        }

        // Criação do novo limite de contagem
        const novoLimiteContagem = await prisma.limitesContagem.create({
            data: {
                limites_contagem: limiteConvertido, // Agora armazenamos como Float
                pontos_avaliados_id,
                microorganismos_id,
                ativo: true,
                data_cadastro: new Date(),
            },
        });

        res.status(201).json(novoLimiteContagem);
    } catch (error) {
        console.error('Erro ao criar limite de contagem:', error);
        res.status(500).json({ error: 'Erro ao criar limite de contagem.' });
    }
};


// Função assíncrona para buscar todos os limites de contagem ativos
const getLimiteContagem = async (req, res) => {
    try {
        // Recupera apenas os limites de contagem que estão ativos (ativo = true)
        const limites = await prisma.limitesContagem.findMany({
            where: {
                ativo: true, // Filtra apenas os registros ativos
            },
            include: {
                pontos_avaliados: true, // Inclui informações do ponto avaliado relacionado
                microorganismos: true, // Inclui informações do microorganismo relacionado
            },
        });

        // Retorna os limites encontrados em formato JSON
        res.status(200).json(limites);
    } catch (error) {
        // Em caso de erro, exibe o erro no console e retorna um erro 500 (Internal Server Error)
        console.error('Erro ao buscar limites de contagem:', error);
        res.status(500).json({ error: 'Erro ao buscar limites de contagem.' });
    }
};

// Função assíncrona para atualizar um limite de contagem
const updateLimiteContagem = async (req, res) => {
    try {
        const { id } = req.params;
        const { limites_contagem, ativo } = req.body;

        // Busca o limite de contagem pelo ID
        const existingLimite = await prisma.limitesContagem.findUnique({
            where: { id: parseInt(id) },
        });

        if (!existingLimite) {
            return res.status(404).json({ error: 'Limite de contagem não encontrado.' });
        }

        // Se o limite já estiver inativo, não pode ser modificado
        if (!existingLimite.ativo) {
            return res.status(400).json({ error: 'Não é possível modificar um limite de contagem inativo.' });
        }

        // Validação e conversão para Float
        let limiteConvertido = existingLimite.limites_contagem;
        if (limites_contagem !== undefined) {
            limiteConvertido = parseFloat(limites_contagem);
            if (isNaN(limiteConvertido)) {
                return res.status(400).json({ error: 'O campo limites_contagem deve ser um número válido.' });
            }
        }

        // Atualiza a data de desativação se o usuário definir ativo = false
        let data_desativacao = existingLimite.data_desativacao;
        if (ativo === false && existingLimite.ativo === true) {
            data_desativacao = new Date();
        }

        // Atualiza os campos permitidos
        const updatedLimite = await prisma.limitesContagem.update({
            where: { id: parseInt(id) },
            data: {
                limites_contagem: limiteConvertido,
                ativo: ativo !== undefined ? ativo : existingLimite.ativo,
                data_desativacao,
            },
        });

        res.status(200).json(updatedLimite);
    } catch (error) {
        console.error('Erro ao atualizar limite de contagem:', error);
        res.status(500).json({ error: 'Erro ao atualizar limite de contagem.' });
    }
};


// Exporta a função para ser utilizada nas rotas
module.exports = { createLimiteContagem, getLimiteContagem, updateLimiteContagem };
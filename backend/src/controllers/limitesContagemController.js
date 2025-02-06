// Importa o Prisma Client configurado no arquivo database.js
const prisma = require('../utils/database');

// Função assíncrona para criar um limite de contagem no banco de dados
const createLimiteContagem = async (req, res) => {
    try {
        const { limites_contagem, pontos_avaliados_id, microorganismos_id } = req.body;

        // Validação básica para campos obrigatórios
        if (!limites_contagem || !pontos_avaliados_id || !microorganismos_id) {
            return res.status(400).json({
                error: 'Os campos limites_contagem, pontos_avaliados_id e microorganismos_id são obrigatórios.',
            });
        }

        // Valida se o pontos_avaliados_id existe e está ativo
        const pontoAvaliado = await prisma.pontosAvaliados.findUnique({
            where: { id: pontos_avaliados_id },
        });

        if (!pontoAvaliado || !pontoAvaliado.ativo) {
            return res.status(404).json({ error: 'Ponto avaliado não encontrado ou inativo.' });
        }

        // Valida se o microorganismos_id existe e está ativo
        const microorganismo = await prisma.microorganismos.findUnique({
            where: { id: microorganismos_id },
        });

        if (!microorganismo || !microorganismo.ativo) {
            return res.status(404).json({ error: 'Microorganismo não encontrado ou inativo.' });
        }

        // Verifica se já existe um limite de contagem ativo para o mesmo ponto avaliado e microrganismo
        const existingLimite = await prisma.limitesContagem.findFirst({
            where: { pontos_avaliados_id, microorganismos_id, ativo: true },
        });

        if (existingLimite) {
            return res.status(400).json({ error: 'Já existe um limite de contagem ativo para este ponto avaliado e microrganismo.' });
        }

        // Criação do limite de contagem no banco de dados
        const novoLimiteContagem = await prisma.limitesContagem.create({
            data: {
                limites_contagem,
                pontos_avaliados_id,
                microorganismos_id,
                ativo: true, // Sempre cria o limite de contagem como ativo por padrão
                data_cadastro: new Date(), // Define a data atual
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
        const { id } = req.params; // Obtém o ID do limite de contagem a ser atualizado
        const { limites_contagem, ativo } = req.body; // Obtém os dados da requisição

        // Busca o limite de contagem pelo ID
        const existingLimite = await prisma.limitesContagem.findUnique({
            where: { id: parseInt(id) }, // Converte o ID para inteiro
        });

        // Retorna erro se o limite de contagem não for encontrado
        if (!existingLimite) {
            return res.status(404).json({ error: 'Limite de contagem não encontrado.' });
        }

        // Se o limite já estiver inativo (ativo = false), não pode ser modificado
        if (!existingLimite.ativo) {
            return res.status(400).json({ error: 'Não é possível modificar um limite de contagem inativo.' });
        }

        // Atualiza a data de desativação se o usuário definir ativo = false
        let data_desativacao = existingLimite.data_desativacao;
        if (ativo === false && existingLimite.ativo === true) {
            data_desativacao = new Date(); // Define a data de desativação como a data atual
        }

        // Atualiza apenas os campos permitidos
        const updatedLimite = await prisma.limitesContagem.update({
            where: { id: parseInt(id) },
            data: {
                limites_contagem: limites_contagem || existingLimite.limites_contagem, // Mantém o valor atual se não for enviado
                ativo: ativo !== undefined ? ativo : existingLimite.ativo, // Mantém o estado atual se não for enviado
                data_desativacao, // Atualiza apenas se for desativado
            },
        });

        // Retorna o limite de contagem atualizado
        res.status(200).json(updatedLimite);
    } catch (error) {
        console.error('Erro ao atualizar limite de contagem:', error);
        res.status(500).json({ error: 'Erro ao atualizar limite de contagem.' });
    }
};

// Exporta a função para ser utilizada nas rotas
module.exports = { createLimiteContagem, getLimiteContagem, updateLimiteContagem };
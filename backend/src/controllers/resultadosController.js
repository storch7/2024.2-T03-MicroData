// Importa o Prisma Client configurado no arquivo database.js
const prisma = require('../utils/database');

// Função assíncrona para criar um resultado no banco de dados
const createResultado = async (req, res) => {
    try {
        const { resultado_coleta, limites_contagem_id } = req.body;

        // Validação de campos obrigatórios
        if (resultado_coleta === undefined || !limites_contagem_id) {
            return res.status(400).json({
                error: 'Os campos resultado_coleta e limites_contagem_id são obrigatórios.',
            });
        }

        // Converter resultado_coleta para Float
        const resultadoValor = parseFloat(resultado_coleta);
        if (isNaN(resultadoValor)) {
            return res.status(400).json({ error: 'O campo resultado_coleta deve ser um número válido.' });
        }

        // Verifica se o limite de contagem existe e está ativo
        const limiteContagem = await prisma.limitesContagem.findUnique({
            where: { id: limites_contagem_id },
        });

        if (!limiteContagem || !limiteContagem.ativo) {
            return res.status(404).json({ error: 'Limite de contagem não encontrado ou inativo.' });
        }

        // O campo limites_contagem agora é Float, então a comparação será direta
        const limiteValor = limiteContagem.limites_contagem;

        // Verifica se o resultado ultrapassa o limite de contagem
        let alerta = null;
        if (resultadoValor > limiteValor) {
            alerta = `⚠️ Alerta: O resultado ${resultadoValor} ultrapassa o limite de ${limiteValor}.`;
            console.warn(alerta);
        }

        // Criação do resultado no banco de dados
        const novoResultado = await prisma.resultados.create({
            data: {
                resultado_coleta: resultadoValor,
                limites_contagem_id,
                ativo: true, // Sempre cria como ativo
                data_cadastro: new Date(),
                data_desativacao: null,
            },
        });

        // Retorna o resultado cadastrado com alerta (caso haja)
        res.status(201).json({ novoResultado, alerta });
    } catch (error) {
        console.error('Erro ao criar resultado:', error);
        res.status(500).json({ error: 'Erro ao criar resultado.' });
    }
};

// Função assíncrona para buscar todos os resultados ativos
const getResultado = async (req, res) => {
    try {
        // Recupera apenas os resultados que estão ativos (ativo = true)
        const resultados = await prisma.resultados.findMany({
            where: {
                ativo: true, // Filtra apenas os registros ativos
            },
            include: {
                limites_contagem: {
                    include: {
                        pontos_avaliados: true, // Inclui informações do ponto avaliado relacionado
                        microorganismos: true, // Inclui informações do microorganismo relacionado
                    }
                }
            },
        });

        // Retorna os resultados encontrados em formato JSON
        res.status(200).json(resultados);
    } catch (error) {
        // Em caso de erro, exibe o erro no console e retorna um erro 500 (Internal Server Error)
        console.error('Erro ao buscar resultados:', error);
        res.status(500).json({ error: 'Erro ao buscar resultados.' });
    }
};

// Função assíncrona para atualizar um resultado (permitindo atualização de resultado_coleta, acao_corretiva e ativação/desativação)
const updateResultado = async (req, res) => {
    try {
        const { id } = req.params;
        const { resultado_coleta, acao_corretiva, ativo } = req.body;

        // Busca o resultado pelo ID
        const existingResultado = await prisma.resultados.findUnique({
            where: { idresultados: parseInt(id) },
            include: { limites_contagem: true } // Inclui a relação com LimitesContagem para validar
        });

        if (!existingResultado) {
            return res.status(404).json({ error: 'Resultado não encontrado.' });
        }

        // Se o resultado estiver inativo, não pode ser alterado a não ser para reativação
        if (!existingResultado.ativo && ativo !== true) {
            return res.status(400).json({ error: 'Não é possível modificar um resultado inativo.' });
        }

        let alerta = null;

        // Se `resultado_coleta` for atualizado, verificar se ultrapassa o limite
        let novoResultadoColeta = existingResultado.resultado_coleta;
        if (resultado_coleta !== undefined) {
            const resultadoValor = parseFloat(resultado_coleta);
            if (isNaN(resultadoValor)) {
                return res.status(400).json({ error: 'O campo resultado_coleta deve ser um número válido.' });
            }

            // Verifica se o novo resultado ultrapassa o limite de contagem
            const limiteValor = existingResultado.limites_contagem.limites_contagem;
            if (resultadoValor > limiteValor) {
                alerta = `⚠️ Alerta: O resultado ${resultadoValor} ultrapassa o limite de ${limiteValor}.`;
                console.warn(alerta);
            }

            novoResultadoColeta = resultadoValor;
        }

        // Atualiza a data de desativação se o usuário definir ativo = false
        let data_desativacao = existingResultado.data_desativacao;
        if (ativo === false && existingResultado.ativo === true) {
            data_desativacao = new Date(); // Define a data atual
        }

        // Atualiza apenas os campos permitidos
        const updatedResultado = await prisma.resultados.update({
            where: { idresultados: parseInt(id) },
            data: {
                resultado_coleta: novoResultadoColeta,
                acao_corretiva: acao_corretiva !== undefined ? acao_corretiva : existingResultado.acao_corretiva,
                ativo: ativo !== undefined ? ativo : existingResultado.ativo,
                data_desativacao,
            },
        });

        res.status(200).json({ updatedResultado, alerta });
    } catch (error) {
        console.error('Erro ao atualizar resultado:', error);
        res.status(500).json({ error: 'Erro ao atualizar resultado.' });
    }
};

module.exports = { createResultado, getResultado, updateResultado };

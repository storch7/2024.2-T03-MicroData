// Importa o Prisma Client configurado no arquivo database.js
const prisma = require('../utils/database');

// Função assíncrona para criar um resultado no banco de dados
const createResultado = async (req, res) => {
    try {
        const { resultado_coleta, pontos_avaliados_id, microorganismos_id, data_cadastro } = req.body;

        // Validação de campos obrigatórios
        if (resultado_coleta === undefined || !pontos_avaliados_id || !microorganismos_id || !data_cadastro) {
            return res.status(400).json({
                error: 'Os campos resultado_coleta, pontos_avaliados_id, microorganismos_id e data_cadastro são obrigatórios.',
            });
        }

        // Converter resultado_coleta para Float
        const resultadoValor = parseFloat(resultado_coleta);
        if (isNaN(resultadoValor)) {
            return res.status(400).json({ error: 'O campo resultado_coleta deve ser um número válido.' });
        }

        // Verifica se a data_cadastro é válida
        const dataCadastroValida = new Date(data_cadastro);
        if (isNaN(dataCadastroValida.getTime())) {
            return res.status(400).json({ error: 'O campo data_cadastro deve ser uma data válida.' });
        }

        // Busca o limite de contagem correspondente aos IDs fornecidos
        const limiteContagem = await prisma.limitesContagem.findFirst({
            where: {
                pontos_avaliados_id,
                microorganismos_id,
                ativo: true, // Apenas limites ativos
            },
        });

        if (!limiteContagem) {
            return res.status(404).json({
                error: 'Nenhum limite de contagem ativo encontrado para os IDs fornecidos.',
            });
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
                limites_contagem_id: limiteContagem.id,
                ativo: true, // Sempre cria como ativo
                data_cadastro: dataCadastroValida,
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

// Função assíncrona para atualizar um resultado
const updateResultado = async (req, res) => {
    try {
        const { id } = req.params;
        const { resultado_coleta, acao_corretiva, ativo, data_cadastro } = req.body;

        // Busca o resultado pelo ID
        const existingResultado = await prisma.resultados.findUnique({
            where: { idresultados: parseInt(id) },
            include: { 
                limites_contagem: {
                    include: {
                        pontos_avaliados: true,
                        microorganismos: true
                    }
                }
            }
        });

        if (!existingResultado) {
            return res.status(404).json({ error: 'Resultado não encontrado.' });
        }

        // Se o resultado estiver inativo, não pode ser alterado a não ser para reativação
        if (!existingResultado.ativo && ativo !== true) {
            return res.status(400).json({ error: 'Não é possível modificar um resultado inativo.' });
        }

        let alerta = null;

        // Verifica e atualiza resultado_coleta, se fornecido
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

        // Verifica e atualiza data_cadastro, se fornecida
        let novaDataCadastro = existingResultado.data_cadastro;
        if (data_cadastro !== undefined) {
            const dataCadastroValida = new Date(data_cadastro);
            if (isNaN(dataCadastroValida.getTime())) {
                return res.status(400).json({ error: 'O campo data_cadastro deve ser uma data válida.' });
            }
            novaDataCadastro = dataCadastroValida;
        }

        // Atualiza a data de desativação se o usuário definir ativo = false
        let data_desativacao = existingResultado.data_desativacao;
        if (ativo === false && existingResultado.ativo === true) {
            data_desativacao = new Date(); // Define a data atual
        }

        // Atualiza os campos permitidos
        const updatedResultado = await prisma.resultados.update({
            where: { idresultados: parseInt(id) },
            data: {
                resultado_coleta: novoResultadoColeta,
                acao_corretiva: acao_corretiva !== undefined ? acao_corretiva : existingResultado.acao_corretiva,
                ativo: ativo !== undefined ? ativo : existingResultado.ativo,
                data_cadastro: novaDataCadastro,
                data_desativacao,
            },
            include: {
                limites_contagem: {
                    include: {
                        pontos_avaliados: true,
                        microorganismos: true
                    }
                }
            }
        });

        res.status(200).json({ updatedResultado, alerta });
    } catch (error) {
        console.error('Erro ao atualizar resultado:', error);
        res.status(500).json({ error: 'Erro ao atualizar resultado.' });
    }
};


// Função assíncrona para buscar resultados filtrados para o gráfico
const getResultadosGrafico = async (req, res) => {
    try {
        const { pontos_avaliados_id, microorganismos_id, zona_higienico, data_inicio, data_fim } = req.body;

        // Valida os campos obrigatórios
        if (!pontos_avaliados_id || !microorganismos_id) {
            return res.status(400).json({ error: 'Os campos pontos_avaliados_id e microorganismos_id são obrigatórios.' });
        }

        // Pelo menos uma data deve ser informada
        if (!data_inicio && !data_fim) {
            return res.status(400).json({ error: 'É necessário informar pelo menos uma data (data_inicio ou data_fim).' });
        }

        // Monta a condição de busca dinamicamente
        const whereClause = {
            ativo: true, // Apenas resultados ativos
            limites_contagem: {
                ativo: true, // Apenas limites de contagem ativos
                pontos_avaliados_id,
                microorganismos_id,
                pontos_avaliados: {
                    ativo: true, // Apenas pontos avaliados ativos
                    zona_higienico: zona_higienico || undefined
                },
                microorganismos: {
                    ativo: true // Apenas microrganismos ativos
                }
            },
            data_cadastro: {
                gte: data_inicio ? new Date(data_inicio) : undefined,
                lte: data_fim ? new Date(data_fim) : undefined
            }
        };

        // Busca os resultados aplicando os filtros
        const resultados = await prisma.resultados.findMany({
            where: whereClause,
            include: {
                limites_contagem: true
            },
            orderBy: {
                data_cadastro: 'asc' // Ordena por data para criar a linha do gráfico
            }
        });

        // Formata os dados para o gráfico
        const dadosGrafico = resultados.map((resultado) => ({
            data: resultado.data_cadastro.toISOString().split('T')[0], // Apenas a data (YYYY-MM-DD)
            contagem: resultado.resultado_coleta,
            limite_contagem: resultado.limites_contagem.limites_contagem
        }));

        res.status(200).json(dadosGrafico);
    } catch (error) {
        console.error('Erro ao buscar resultados para gráfico:', error);
        res.status(500).json({ error: 'Erro ao buscar resultados.' });
    }
};

module.exports = { createResultado, getResultado, updateResultado, getResultadosGrafico };

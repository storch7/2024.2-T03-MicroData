import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;
console.log('API_BASE_URL:', API_BASE_URL);

// POST: Criar um novo resultado
export const createResultado = async (data) => {
  try {
    console.log('data:', data);
    const response = await axios.post(API_BASE_URL + "resultados", data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar resultado:', error);
    throw error;
  }
};

// GET: Obter todos os resultados ativos
export const getResultados = async () => {
  try {
    const response = await axios.get(API_BASE_URL + "resultados");
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar resultados:', error);
    throw error;
  }
};

// GET: Obter resultados filtrados para o gráfico
export const getResultadosGrafico = async (filters) => {
  try {
    const response = await axios.post(API_BASE_URL + "resultados/grafico", filters);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar resultados para gráfico:', error);
    throw error;
  }
};

// PUT: Atualizar um resultado existente
export const updateResultado = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}resultados/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar resultado:', error);
    throw error;
  }
};
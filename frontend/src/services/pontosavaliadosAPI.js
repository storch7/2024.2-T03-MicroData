import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;
console.log('API_BASE_URL:', API_BASE_URL);

// POST: Adicionar um novo microorganismo
export const createPontoAvaliado = async (data) => {
  try {
    console.log('data:', data);
    const response = await axios.post(API_BASE_URL + "pontosavaliados", data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar ponto avaliado:', error);
    throw error;
  }
};

// GET: Obter lista de microorganismos
export const getPontosAvaliados = async () => {
  try {
    const response = await axios.get(API_BASE_URL + "pontosavaliados");
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar pontos avaliados:', error);
    throw error;
  }
};

// GET: Obter lista de microorganismos por ID
export const getPontosAvaliadosById = async () => {
  try {
    const response = await axios.get(API_BASE_URL + "pontosavaliados");
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar ponto avaliado:', error);
    throw error;
  }
};

// PUT: Atualizar um microorganismo
export const updatePontoAvaliado = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}pontosavaliados/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
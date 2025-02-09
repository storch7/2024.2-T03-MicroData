import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

// POST: Create a new limite de contagem
export const createLimiteContagem = async (data) => {
  try {
    const response = await axios.post(API_BASE_URL + "limitescontagem", data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar limite de contagem:', error);
    throw error;
  }
};

// GET: Retrieve all active limites de contagem
export const getLimiteContagem = async () => {
  try {
    const response = await axios.get(API_BASE_URL + "limitescontagem");
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar limites de contagem:', error);
    throw error;
  }
};

// PUT: Update a limite de contagem
export const updateLimiteContagem = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}limitescontagem/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar limite de contagem:', error);
    throw error;
  }
};
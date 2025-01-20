import axios from 'axios';

const API_BASE_URL = "http://localhost:5000/api/";

// POST: Adicionar um novo microorganismo
export const createMicroorganism = async (data) => {
  try {
    console.log('data:', data);
    const response = await axios.post(API_BASE_URL + "microorganismos", data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar microorganismo:', error);
    throw error;
  }
};

// GET: Obter lista de microorganismos
export const getMicroorganism = async () => {
  try {
    const response = await axios.get(API_BASE_URL + "microorganismos");
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar microorganismos:', error);
    throw error;
  }
};

// PUT: Atualizar um microorganismo
export const updateMicroorganism = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}microorganismos/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
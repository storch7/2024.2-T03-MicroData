import axios from 'axios';

const API_BASE_URL = "http:localhost:5000";

// POST: Adicionar um novo microorganismo
export const createMicroorganismo = async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/api/microorganismos", data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar microorganismo:', error);
    throw error;
  }
};

// GET: Obter lista de microorganismos
export const getMicroorganismos = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/microorganismos");
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar microorganismos:', error);
    throw error;
  }
};

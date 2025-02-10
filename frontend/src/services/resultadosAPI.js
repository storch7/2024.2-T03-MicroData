import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const createResultado = async (data) => {
    try {
        const response = await axios.post(API_BASE_URL + "resultados", data);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar resultado:', error);
        throw error;
    }
};

export const getResultados = async () => {
    try {
        const response = await axios.get(API_BASE_URL + "resultados");
        console.log("response",response)
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar resultados:', error);
        throw error;
    }
};

export const updateResultado = async (id, data) => {
    try {
        const response = await axios.put(`${API_BASE_URL}resultados/${id}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

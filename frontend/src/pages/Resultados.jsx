import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ResultadosForm from '../components/ResultadosForm';
import ResultadosTable from '../components/ResultadosTable';
import { createResultado, getResultados, updateResultado } from '../services/resultadosAPI';

function ResultadosPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedResultado, setSelectedResultado] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getResultados();
                setData(response);
            } catch (error) {
                console.error('Erro ao buscar resultados:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAdd = async (item) => {
        try {
            const newResultado = await createResultado(item);
            setData([...data, newResultado]);
        } catch (error) {
            console.error('Erro ao criar resultado:', error);
        }
    };

    const handleEdit = (item) => {
        setSelectedResultado(item);
        setIsEditing(true);
    };

    const handleUpdate = async (updatedData) => {
        try {
            const updatedItem = await updateResultado(selectedResultado.id, updatedData);
            setData(data.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
            setIsEditing(false);
            setSelectedResultado(null);
        } catch (error) {
            console.error('Erro ao atualizar resultado:', error);
        }
    };

    const handleDelete = (item) => {
        setData(data.filter((i) => i !== item));
    };

    return (
        <Container sx={{ padding: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Gerenciar Resultados de Coleta
            </Typography>
            <ResultadosForm
                onAdd={handleAdd}
                isEditing={isEditing}
                initialData={selectedResultado}
                onUpdate={handleUpdate}
                onCancel={() => { setIsEditing(false); setSelectedResultado(null); }}
            />
            {loading ? (
                <Typography variant="body1">Carregando...</Typography>
            ) : (
                <ResultadosTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
            )}
        </Container>
    );
}

export default ResultadosPage;
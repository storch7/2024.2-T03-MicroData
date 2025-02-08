import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PontosavaliadosForm from '../components/PontosavaliadosForm';
import PontosavaliadosTable from '../components/PontosavaliadosTable';
import { createPontoAvaliado, getPontosAvaliados, updatePontoAvaliado } from '../services/pontosavaliadosAPI';


function PontosavaliadosPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedPontosAvaliados, setSelectedPontosAvaliados] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPontosAvaliados();
                setData(response);
            } catch (error) {
                console.error('Erro ao buscar Pontos avaliados:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAdd = async (item) => {
        try {
            const newPontosAvaliados = await createPontoAvaliado(item);
            console.log('Ponto avaliado criado:', newPontosAvaliados);
            setData([...data, newPontosAvaliados]);
        } catch (error) {
            console.error('Erro ao criar pontos avaliados:', error);
        }
    };

    const handleEdit = (item) => {
        setSelectedPontosAvaliados(item);
        setIsEditing(true);
    };

    const handleUpdate = async (updatedData) => {
        try {
            const updatedItem = await updatePontoAvaliado(selectedPontosAvaliados.id, updatedData);
            setData(data.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
            setIsEditing(false);
            setSelectedPontosAvaliados(null);
        } catch (error) {
            console.error('Erro ao atualizar pontos avaliados:', error);
        }
    };

    const handleDelete = (item) => {
        setData(data.filter((i) => i !== item));
    };

    return (
        <Container sx={{ padding: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Gerenciar Pontos Avaliados
            </Typography>
            <PontosavaliadosForm
                onAdd={handleAdd}
                isEditing={isEditing}
                initialData={selectedPontosAvaliados}
                onUpdate={handleUpdate}
                onCancel={() => { setIsEditing(false); setSelectedPontosAvaliados(null); }}
            />
            {loading ? (
                <Typography variant="body1">Carregando...</Typography>
            ) : (
                <PontosavaliadosTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
            )}
        </Container>
    );
}

export default PontosavaliadosPage;
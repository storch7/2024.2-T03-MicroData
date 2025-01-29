import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MicroorganismForm from '../components/MicroorganismForm';
import MicroorganismTable from '../components/MicroorganismTable';
import { createMicroorganism, getMicroorganism, updateMicroorganism } from '../services/microorganismAPI';


function MicroorganismPage () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMicroorganism, setSelectedMicroorganism] = useState(null);
    const [isEditing, setIsEditing] = useState(false);


    useEffect(() => {
        const fechtData = async () => {
            try {
                const response = await getMicroorganism();
                setData(response);
            } catch (error) {
                console.error('Erro ao buscar microorganismos:', error);
            } finally {
                setLoading(false);
            }
        };

        fechtData();
    }, []);

    const handleAdd = async (item) => {
        try {
            const newMicroorganism = await createMicroorganism(item);
            setData([...data, newMicroorganism]);
        } catch (error) {
            console.error('Erro ao criar microorganismo:', error);
        }
    };

    const handleEdit = (item) => {
        setSelectedMicroorganism(item);
        setIsEditing(true);
    };

    const handleUpdate = async (updatedData) => {
        await updateMicroorganism(selectedMicroorganism.id, updatedData);
        setIsEditing(false);
        setSelectedMicroorganism(null);
        // Atualize a lista se necessário
      };

    const handleDelete = (item) => {
        setData(data.filter((i) => i !== item));
    };

    return (
        <Container sx={{ padding: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Gerenciar Microorganismos
            </Typography>
            <MicroorganismForm 
                onAdd={handleAdd}
                isEditing={isEditing}
                initialData={selectedMicroorganism}
                onUpdate={handleUpdate}
                onCancel={() => { setIsEditing(false); setSelectedMicroorganism(null); }}
            />
            {loading ? (
                <Typography variant="body1">Carregando...</Typography>
            ) : (
                <MicroorganismTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
            )}
      </Container>
    );
};

export default MicroorganismPage;
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MicroorganismForm from '../components/MicroorganismForm';
import MicroorganismTable from '../components/MicroorganismTable';
import { createMicroorganism, getMicroorganism } from '../services/microorganismAPI';


const MicroorganismPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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
        console.log('Edit:', item);
    };

    const handleDelete = (item) => {
        setData(data.filter((i) => i !== item));
    };

    return (
        <Container sx={{ padding: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Gerenciar Microorganismos
            </Typography>
            <MicroorganismForm onAdd={handleAdd} />
            {loading ? (
                <Typography variant="body1">Carregando...</Typography>
            ) : (
                <MicroorganismTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
            )}
      </Container>
    );
};

export default MicroorganismPage;
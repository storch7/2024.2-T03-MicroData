import React, { useState } from 'react';
import CustomTable from '../components/MicroorganismTable';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MicroorganismForm from '../components/MicroorganismForm';

const MicroorganismPage = () => {
    const [data, setData] = useState([]);

    const handleAdd = (item) => {
        setData([...data, item]);
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
            <CustomTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </Container>
    );
};

export default MicroorganismPage;
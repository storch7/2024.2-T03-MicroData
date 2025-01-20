import React, {useState} from "react";
import CustomButton from '../components/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const MicroorganismForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ name, description });
        setName('');
        setDescription('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2, border: '1px solid #ddd', borderRadius: 2 }}>
            <TextField 
                label="Nome" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                fullWidth
            />
            <TextField 
                label="Descrição" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                multiline 
                rows={4} 
                fullWidth
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CustomButton text="Limpar" type="button" color="#B83226" variant="outlined" onClick={() => {
                    setName('');
                    setDescription('');
                }} />
                <CustomButton text="Cadastrar" type="submit" color="#B83226" variant="contained" />
            </Box>
        </Box>
    );
};

export default MicroorganismForm;
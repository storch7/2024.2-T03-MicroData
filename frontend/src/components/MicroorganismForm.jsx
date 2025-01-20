import React, {useEffect, useState} from "react";
import CustomButton from '../components/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


function MicroorganismForm  ({ isEditing, setIsEditing, initialData, onUpdate, onCancel,  onAdd }) {
    const [name, setName] = useState(initialData?.nome || "");
    const [description, setDescription] = useState(initialData?.descricao || "");

    useEffect(() => {
        if(initialData) {
            setName(initialData.nome);
            setDescription(initialData.descricao);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !description.trim()) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }
        const data = {
            nome: name, 
            descricao: description, 
            ativo: true,
            data_cadastro: new Date().toISOString(), // Enviar a data atual no formato ISO
        };
        if(isEditing) {
            onUpdate(data);
        } else {
            onAdd(data);
        }
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
            {isEditing ? (
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CustomButton text="Cancelar" type="button" color="#B83226" variant="outlined" onClick={() => {
                        onCancel();
                    }} />
                    <CustomButton text="Atualizar" type="submit" color="#B83226" variant="contained" />
                </Box>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CustomButton text="Limpar" type="button" color="#B83226" variant="outlined" onClick={() => {
                        setName('');
                        setDescription('');
                    }} />
                    <CustomButton text="Cadastrar" type="submit" color="#B83226" variant="contained" />
                </Box>
            )}
        </Box>
    );
};

export default MicroorganismForm;
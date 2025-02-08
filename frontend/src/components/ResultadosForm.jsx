import React, { useState } from 'react';
import { TextField, Box } from '@mui/material'; // Remova as importações não utilizadas
import CustomButton from './Button';

function ResultadosForm({ isEditing, setIsEditing, initialData, onUpdate, onCancel, onAdd }) {
    const [localColeta, setLocalColeta] = useState(initialData?.localColeta || "");
    const [microgravismo, setMicrogravismo] = useState(initialData?.microgravismo || "");
    const [corrigem, setCorrigem] = useState(initialData?.corrigem || "");
    const [dataColeta, setDataColeta] = useState(initialData?.dataColeta || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { localColeta, microgravismo, corrigem, dataColeta };
        if (isEditing) {
            onUpdate(data);
        } else {
            onAdd(data);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2, border: '1px solid #ddd', borderRadius: 2 }}>
            <TextField
                label="Local de Coleta"
                value={localColeta}
                onChange={(e) => setLocalColeta(e.target.value)}
                fullWidth
            />
            <TextField
                label="Microgravismo"
                value={microgravismo}
                onChange={(e) => setMicrogravismo(e.target.value)}
                fullWidth
            />
            <TextField
                label="Corrigem"
                value={corrigem}
                onChange={(e) => setCorrigem(e.target.value)}
                fullWidth
            />
            <TextField
                label="Data da Coleta"
                type="date"
                value={dataColeta}
                onChange={(e) => setDataColeta(e.target.value)}
                fullWidth
                InputLabelProps={{ shrink: true }}
            />
            {isEditing ? (
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CustomButton text="Cancelar" type="button" color="#B83226" variant="outlined" onClick={onCancel} />
                    <CustomButton text="Atualizar" type="submit" color="#B83226" variant="contained" />
                </Box>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CustomButton text="Limpar" type="button" color="#B83226" variant="outlined" onClick={() => {
                        setLocalColeta('');
                        setMicrogravismo('');
                        setCorrigem('');
                        setDataColeta('');
                    }} />
                    <CustomButton text="Cadastrar" type="submit" color="#B83226" variant="contained" />
                </Box>
            )}
        </Box>
    );
}

export default ResultadosForm;
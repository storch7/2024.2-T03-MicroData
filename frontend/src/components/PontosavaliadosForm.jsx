import React, { useEffect, useState } from "react";
import CustomButton from '../components/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function PontosavaliadosForm({ isEditing, setIsEditing, initialData, onUpdate, onCancel, onAdd }) {
    const [sala, setSala] = useState(initialData?.sala || "");
    const [area, setArea] = useState(initialData?.area || "");
    const [local, setLocal] = useState(initialData?.local || "");
    const [frequencia, setFrequencia] = useState(initialData?.frequencia || "");
    const [description, setDescription] = useState(initialData?.descricao || "");
    const [zona, setZona] = useState(initialData?.zona || "");
    const [zonahigienica, setZonahigienica] = useState(initialData?.zonahigienica || "");

    useEffect(() => {
        if (initialData) {
            setSala(initialData.sala);
            setArea(initialData.area);
            setLocal(initialData.local);
            setFrequencia(initialData.frequencia);
            setDescription(initialData.descricao);
            setZona(initialData.zona);
            setZonahigienica(initialData.zonahigienica);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!sala.trim() || !description.trim() || !area.trim() || !local.trim() || !frequencia.trim() || !zona.trim() || !zonahigienica.trim()) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }
        const data = {
            sala: sala,
            area: area,
            local: local,
            frequencia: frequencia,
            zona: zona,
            zonahigienica: zonahigienica,
            descricao: description,
            ativo: true,
            data_cadastro: new Date().toISOString(),
        };
        if (isEditing) {
            onUpdate(data);
        } else {
            onAdd(data);
        }
        setSala('');
        setArea('');
        setLocal('');
        setFrequencia('');
        setZona('');
        setZonahigienica('');
        setDescription('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2, border: '1px solid #ddd', borderRadius: 2 }}>
            <TextField
                label="Sala"
                value={sala}
                onChange={(e) => setSala(e.target.value)}
                fullWidth
            />
            <TextField
                label="Área"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                fullWidth
            />
            <TextField
                label="Local"
                value={local}
                onChange={(e) => setLocal(e.target.value)}
                fullWidth
            />
            <TextField
                label="Frequência"
                value={frequencia}
                onChange={(e) => setFrequencia(e.target.value)}
                fullWidth
            />
            <TextField
                label="Zona"
                value={zona}
                onChange={(e) => setZona(e.target.value)}
                fullWidth
            />
            <TextField
                label="Zona Higienica"
                value={zonahigienica}
                onChange={(e) => setZonahigienica(e.target.value)}
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
                        setSala('');
                        setArea('');
                        setLocal('');
                        setFrequencia('');
                        setZona('');
                        setZonahigienica('');
                        setDescription('');
                    }} />
                    <CustomButton text="Cadastrar" type="submit" color="#B83226" variant="contained" />
                </Box>
            )}
        </Box>
    );
}

export default PontosavaliadosForm;
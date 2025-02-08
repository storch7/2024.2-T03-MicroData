import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CustomButton from './Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function PontosavaliadosForm({ isEditing, setIsEditing, initialData, onUpdate, onCancel, onAdd }) {
    // Estados corretamente declarados
    const [sala, setSala] = useState(initialData?.sala || "");
    const [area, setArea] = useState(initialData?.area || "");
    const [local, setLocal] = useState(initialData?.local_processo || ""); // Corrigido para local_processo
    const [frequencia, setFrequencia] = useState(initialData?.frequencia || "");
    const [zona, setZona] = useState(initialData?.zona_proximidade || ""); // Corrigido para zona_proximidade
    const [zonahigienica, setZonahigienica] = useState(initialData?.zona_higienico || ""); // Corrigido para zona_higienico
    const [metodo, setMetodo] = useState(initialData?.metodo || "");
    const [descricao, setDescricao] = useState(initialData?.descricao || ""); // Corrigido para descricao

    // Atualiza os estados quando initialData muda
    useEffect(() => {
        if (initialData) {
            setSala(initialData.sala);
            setArea(initialData.area);
            setLocal(initialData.local_processo); // Corrigido para local_processo
            setFrequencia(initialData.frequencia);
            setZona(initialData.zona_proximidade); // Corrigido para zona_proximidade
            setZonahigienica(initialData.zona_higienico); // Corrigido para zona_higienico
            setMetodo(initialData.metodo);
            setDescricao(initialData.descricao); // Corrigido para descricao
        }
    }, [initialData]);

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validação dos campos obrigatórios
        if (!sala.trim() || !area.trim() || !local.trim() || !frequencia.trim() || !zona.trim() || !zonahigienica.trim() || !metodo.trim()) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }
    
        // Cria o objeto de dados para enviar ao backend
        const data = {
            sala: sala,
            area: area,
            local_processo: local,
            frequencia: frequencia,
            zona_proximidade: zona,
            zona_higienico: zonahigienica,
            metodo: metodo,
            descricao: descricao, // Campo opcional
        };
    
        console.log('Dados enviados:', data); // Verifique os dados aqui
    
        // Chama a função de atualização ou adição, dependendo do modo (edição ou criação)
        if (isEditing) {
            onUpdate(data);
        } else {
            onAdd(data);
        }
    
        // Limpa os campos após o envio
        setSala('');
        setArea('');
        setLocal('');
        setFrequencia('');
        setZona('');
        setZonahigienica('');
        setMetodo('');
        setDescricao('');
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

            <FormControl sx={{ marginTop: '' }} fullWidth>
                <InputLabel>Frequência</InputLabel>
                <Select
                    value={frequencia}
                    onChange={(event) => setFrequencia(event.target.value)}
                >
                    <MenuItem value={"SEMANAL"}>Semanal</MenuItem>
                    <MenuItem value={"QUINZENAL"}>Quinzenal</MenuItem>
                    <MenuItem value={"MENSAL"}>Mensal</MenuItem>
                </Select>
            </FormControl>

           <FormControl sx={{ marginTop: '' }} fullWidth>
                <InputLabel>Zona</InputLabel>
                <Select
                    value={zona}
                    onChange={(event) => setZona(event.target.value)}
                >
                    <MenuItem value={"ZONA_1"}>Zona 1</MenuItem>
                    <MenuItem value={"ZONA_2"}>Zona 2</MenuItem>
                    <MenuItem value={"ZONA_3"}>Zona 3</MenuItem>
                    <MenuItem value={"ZONA_4"}>Zona 4</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ marginTop: '' }} fullWidth>
                <InputLabel>Zona Higiênica</InputLabel>
                <Select
                    value={zonahigienica}
                    onChange={(event) => setZonahigienica(event.target.value)}
                >
                    <MenuItem value={"ALTO_RISCO"}>Alto Risco</MenuItem>
                    <MenuItem value={"MEDIO_RISCO"}>Médio Risco</MenuItem>
                    <MenuItem value={"BAIXO_RISCO"}>Baixo Risco</MenuItem>
                </Select>
            </FormControl>
            
            <TextField
                label="Método"
                value={metodo}
                onChange={(e) => setMetodo(e.target.value)}
                fullWidth
            />
            <TextField
                label="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
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
                        setMetodo('');
                        setDescricao('');
                    }} />
                    <CustomButton text="Cadastrar" type="submit" color="#B83226" variant="contained" />
                </Box>
            )}
        </Box>
    );
}

export default PontosavaliadosForm;
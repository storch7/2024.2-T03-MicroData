import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CustomButton from './Button';
import InputSelect from './InputSelect';

function PontosavaliadosForm({ isEditing, setIsEditing, initialData, onUpdate, onCancel, onAdd }) {
    const [sala, setSala] = useState(initialData?.sala || "");
    const [area, setArea] = useState(initialData?.area || "");
    const [local, setLocal] = useState(initialData?.local_processo || "");
    const [frequencia, setFrequencia] = useState(initialData?.frequencia || "");
    const [zona, setZona] = useState(initialData?.zona_proximidade || "");
    const [zonahigienica, setZonahigienica] = useState(initialData?.zona_higienico || "");
    const [metodo, setMetodo] = useState(initialData?.metodo || "");
    const [descricao, setDescricao] = useState(initialData?.descricao || "");

    // Opções para os campos de seleção
    const frequenciaOptions = [
        { id: 'SEMANAL', label: 'Semanal' },
        { id: 'QUINZENAL', label: 'Quinzenal' },
        { id: 'MENSAL', label: 'Mensal' },
    ];

    const zonaOptions = [
        { id: "ZONA_1", label: "Zona 1" },
        { id: "ZONA_2", label: "Zona 2" },
        { id: "ZONA_3", label: "Zona 3" },
        { id: "ZONA_4", label: "Zona 4" },
    ];

    const zonaHigienicaOptions = [
        { id: "BAIXO_RISCO", label: "Baixo Risco" },
        { id: "MEDIO_RISCO", label: "Médio Risco" },
        { id: "ALTO_RISCO", label: "Alto Risco" },
    ];

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
        if (!sala.trim() || !area.trim() || !local.trim() || !frequencia.trim() || !zona || !zonahigienica || !metodo.trim()) {
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
            <InputSelect
                label="Frequência"
                items={frequenciaOptions} // e.g., [{ id: 'SEMANAL', label: 'Semanal' }, { id: 'QUINZENAL', label: 'Quinzenal' }, { id: 'MENSAL', label: 'Mensal' }]
                value={frequencia}
                onChange={(e) => setFrequencia(e.target.value)}
                displayField="label"
                margin="small"
            />

            <InputSelect
                label="Zona"
                items={zonaOptions}
                value={zona}
                onChange={(e) => setZona(e.target.value)}
                displayField="label"
                margin="small"
            />

            <InputSelect
                label="Zona Higiênica"
                items={zonaHigienicaOptions}
                value={zonahigienica}
                onChange={(e) => setZonahigienica(e.target.value)}
                displayField="label"
                margin="small"
            />

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
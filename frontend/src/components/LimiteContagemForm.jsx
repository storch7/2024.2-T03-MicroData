import React, { useEffect, useState } from "react";
import CustomButton from '../components/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { getMicroorganism } from '../services/microorganismAPI';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function LimiteContagemForm() {
    const [microorganismo, setMicroorganismo] = useState('');
    const [local, setLocal] = useState('');
    const [limiteContagem, setLimiteContagem] = useState("");
    const [dataMicro, setDataMicro] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMicroorganism();
                 // Filtrar microorganismos ativos e formatar os dados corretamente
                 const filteredData = response
                 .filter((item: any) => item.ativo) // Pegando só os ativos
                 .map((item: any) => ({
                     id: String(item.id), // Garantindo que o id seja string
                     nome: item.nome
                 }));

             console.log("Microorganismos ativos:", filteredData);
             setDataMicro(filteredData);
            } catch (error) {
                console.error('Erro ao buscar microorganismos:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log("Estado atualizado - dataMicro:", dataMicro);
    }, [dataMicro]);

    return (
        <div>
            <Box
                component="form"
                sx={{
                    marginTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '1rem',
                    border: '1px solid blue',
                    borderRadius: '1rem'
                }}
            >
                <FormControl sx={{ marginTop: '15px' }} fullWidth>
                    <InputLabel>Microorganismo</InputLabel>
                    <Select
                        value={microorganismo}
                        onChange={(event: SelectChangeEvent) => setMicroorganismo(event.target.value)}
                    >
                        {dataMicro.length > 0 ? (
                            dataMicro.map((micro) => (
                                <MenuItem key={micro.id} value={micro.id}>
                                    {micro.nome}
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem disabled>Nenhum microorganismo disponível</MenuItem>
                        )}
                    </Select>
                </FormControl>

                {/* Select de Local */}
                <FormControl sx={{ marginTop: '15px' }} fullWidth>
                    <InputLabel>Local</InputLabel>
                    <Select
                        value={local}
                        onChange={(event: SelectChangeEvent) => setLocal(event.target.value)}
                    >
                        <MenuItem value="10">TESTE</MenuItem>
                        <MenuItem value="20">TESTE1</MenuItem>
                        <MenuItem value="30">TESTE2</MenuItem>
                    </Select>
                </FormControl>

                {/* Campo de texto para limite de contagem */}
                <TextField
                    label="Limite de Contagem"
                    value={limiteContagem}
                    onChange={(e) => setLimiteContagem(e.target.value)}
                    sx={{ marginTop: '15px' }}
                    fullWidth
                />

                {/* Botões de ação */}
                <Box
                    sx={{
                        marginTop: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}
                >
                    <CustomButton text="Limpar" type="button" color="#B83226" variant="outlined" />
                    <CustomButton text="Cadastrar" type="submit" color="#B83226" variant="contained" />
                </Box>
            </Box>
        </div>
    );
}

export default LimiteContagemForm;

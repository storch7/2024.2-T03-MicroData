import React, {useEffect, useState} from "react";
import CustomButton from '../components/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function LimiteContagemForm() {
    const [microorganismo, setMicroorganismo] = useState('');
    const [local, setLocal] = useState('');
    const [LimiteContagem, setLimiteContagem] = useState("");

    


    return(
        <div>
            <Box component="form" sx={{marginTop: '2rem',display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', border: '1px solid blue', borderRadius: '1rem'}}>
                <Select
                    label="Microorganismo"
                    value={microorganismo}
                    onChange={(event: SelectChangeEvent) => setMicroorganismo(event.target.value)}
                    sx={{marginTop: '15px'}}
                    fullWidth
                >
                    <MenuItem value = {10}>M1</MenuItem>
                    <MenuItem value = {20}>M2</MenuItem>
                    <MenuItem value = {30}>M3</MenuItem>
                </Select>

                <Select
                    label="Local"
                    value={local}
                    onChange={(event: SelectChangeEvent) => setLocal(event.target.value)}
                    sx={{marginTop: '15px'}}
                    fullWidth
                >
                    <MenuItem value = {10}>TESTE</MenuItem>
                    <MenuItem value = {20}>TESTE1</MenuItem>
                    <MenuItem value = {30}>TESTE2</MenuItem>
                </Select>


                <TextField
                    label="Limite de Contagem" 
                    value={LimiteContagem} 
                    onChange={(e) => setLimiteContagem(e.target.value)}
                    sx={{marginTop: '15px'}} 
                    fullWidth
                />

            <Box style = {{marginTop: '15px', display: 'flex',justifyContent: 'space-between', width: '100%' }}>
                <CustomButton text="Limpar" type="submit" color="#B83226" variant="outlined" />
                <CustomButton text="Cadastrar" type="submit" color="#B83226" variant="contained" />
            </Box>

            </Box>
        </div>
    );
};

export default LimiteContagemForm;
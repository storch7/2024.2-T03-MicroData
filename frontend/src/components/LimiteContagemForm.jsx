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
            <Box component="form" >
                <Select
                    label="Microorganismo"
                    value={microorganismo}
                    onChange={(event: SelectChangeEvent) => setMicroorganismo(event.target.value)}
                    fullWidth
                >
                    <MenuItem>M1</MenuItem>
                    <MenuItem>M2</MenuItem>
                    <MenuItem>M3</MenuItem>
                </Select>

                <Select
                    label="Local"
                    value={local}
                    onChange={(event: SelectChangeEvent) => setLocal(event.target.value)}
                    fullWidth
                >
                    <MenuItem>TESTE</MenuItem>
                    <MenuItem>TESTE1</MenuItem>
                    <MenuItem>TESTE2</MenuItem>
                </Select>


                <TextField
                    label="Limite de Contagem" 
                    value={LimiteContagem} 
                    onChange={(e) => setLimiteContagem(e.target.value)} 
                    fullWidth
                />
                
            </Box>
        </div>
    );
};

export default LimiteContagemForm;
import React, {useEffect, useState} from "react";
import CustomButton from '../components/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function LimiteContagemForm() {
    const [LimiteContagem, setLimiteContagem] = useState("");

    return(
        <div>
            <Box component="form">
                
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
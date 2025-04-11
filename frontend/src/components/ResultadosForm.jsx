import React, { useEffect, useState } from "react";
import CustomButton from '../components/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { getMicroorganism } from '../services/microorganismAPI';
import { getPontosAvaliados } from '../services/pontosavaliadosAPI';
import { createLimiteContagem } from '../services/limitecontagemAPI';
import InputSelect from './InputSelect';

function ResultadosForm({ onAdd, onUpdate, isEditing, initialData, onCancel }) {
    const [microorganismo, setMicroorganismo] = useState('');
    const [local, setLocal] = useState('');
    const [dataColeta, setDataColeta] = useState(null);
    const [dataMicro, setDataMicro] = useState([]);
    const [dataLocal, setDataLocal] = useState([]);
    const [contagem, setContagem] = useState("");

    useEffect(() => {
      // Fetch microorganisms data from API
      async function fetchMicroData() {
        const response = await getMicroorganism();
        setDataMicro(response);
      }
      fetchMicroData();
  
      // Fetch local data from API
      async function fetchLocalData() {
        const response = await getPontosAvaliados();
        setDataLocal(response);
      }
      fetchLocalData();
    }, []);
  
    useEffect(() => {
      if (initialData && isEditing) {
          setMicroorganismo(initialData.microorganismos_id);
          setLocal(initialData.pontos_avaliados_id);
          setContagem(initialData.resultado_coleta);
      }
    }, [initialData, isEditing]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = isEditing
            ? { resultado_coleta: contagem,
                data_cadastro: dataColeta,
                
             } // Apenas os campos editáveis
            : {
                resultado_coleta: contagem,
                pontos_avaliados_id: local,
                microorganismos_id: microorganismo,
                data_cadastro: dataColeta,
            };
    
        if(isEditing) {
          onUpdate(data);
        } else {
            if (!microorganismo || !local || !contagem || !dataColeta) {
                alert("Por favor, preencha todos os campos.");
                return;
              }
            onAdd(data);
        }

        setMicroorganismo('');
        setLocal('');
        setContagem('');
      };

    return (
        <div>
             <Box 
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    marginTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '1rem',
                    border: '1px solid #ddd',
                    borderRadius: '1rem'
                }}
            >
                {/* Campos de seleção visíveis apenas no modo de adição */}
                {!isEditing && (
                    <>
                        <InputSelect
                            label="Microorganismo *"
                            value={microorganismo}
                            onChange={(event) => setMicroorganismo(event.target.value)}
                            items={dataMicro}
                            displayField={'nome'}
                        />

                        <InputSelect
                            label="Local da Coleta *"
                            value={local}
                            onChange={(event) => setLocal(event.target.value)}
                            items={dataLocal}
                            displayField={'local_processo'}
                        />

                </>
                )}

                {/* Campo de texto para limite de contagem */}
                <TextField
                    label="Contagem *"
                    value={contagem}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
                        setContagem(value);
                    }}
                    sx={{ marginTop: '15px' }}
                    fullWidth
                />

                <TextField
                    type = "date"
                    label="Data da Coleta *"
                    value={dataColeta}
                    onChange={(e) => setDataColeta(e.target.value)}
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
                    {isEditing ? (
                        <>
                            <CustomButton
                                text="Cancelar"
                                type="button"
                                color="#B83226"
                                variant="outlined"
                                onClick={() => {
                                    onCancel(); // Cancela edição
                                }}
                            />
                            <CustomButton
                                text="Atualizar"
                                type="submit"
                                color="#B83226"
                                variant="contained"
                            />
                        </>
                    ) : (
                        <>
                            <CustomButton
                                text="Limpar"
                                type="button"
                                color="#B83226"
                                variant="outlined"
                                onClick={() => {
                                    setMicroorganismo('');
                                    setLocal('');
                                    setContagem('');
                                }}
                            />
                            <CustomButton
                                text="Cadastrar"
                                type="submit"
                                color="#B83226"
                                variant="contained"
                            />
                        </>
                    )}
                </Box>
            </Box>
        </div>
    );
}

export default ResultadosForm;

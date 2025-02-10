import React, { useState,useEffect } from 'react';
import { TextField, Box } from '@mui/material';
import CustomButton from './Button';
import InputSelect from './InputSelect';
import { getLimiteContagem } from '../services/limitecontagemAPI'; 


function ResultadosForm({ isEditing, setIsEditing, initialData, onUpdate, onCancel, onAdd, microorganismos, pontosAvaliados }) {
    const [localColeta, setLocalColeta] = useState(initialData?.localColeta || "");
    const [microorganismo, setMicroorganismo] = useState(initialData?.microorganismo || "");
    const [contagem, setContagem] = useState(initialData?.contagem || "");
    const [dataColeta, setDataColeta] = useState(initialData?.dataColeta || "");
    const [dataLimite, setDataLimite] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getLimiteContagem();
            setDataLimite(response);
          } catch (error) {
            console.error('Erro ao buscar limites de contagem:', error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, []);

      useEffect(() => {console.log(dataLimite)})

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            pontos_avaliados_id: localColeta,
            microorganismos_id: microorganismo,
        };
        
        function buscarRegistro(date, registros) {
                     
            // Procura o registro que corresponde aos IDs fornecidos
            const registroEncontrado = registros.find(
              (registro) =>
                registro.pontos_avaliados_id === date.pontos_avaliados_id &&
                registro.microorganismos_id === date.microorganismos_id
            );
          
            if (registroEncontrado) {
              return registroEncontrado.id; // Retorna o ID do registro encontrado
            } else {
              alert("É necessário cadastrar um limite de contagem para este ponto e este microorganismo"); // Exibe um alerta se não encontrar
              return null;
            }
          }
          
          // Chamada da função
          const resultadoBusca = buscarRegistro(data, dataLimite);
          
          if(resultadoBusca != null) {
            const dataCreateResultado = {
                resultado_coleta: contagem,    
                limites_contagem_id: resultadoBusca,
            }
            console.log(dataCreateResultado);
            onAdd(dataCreateResultado);
          }
        
        //if (isEditing) {
        //    onUpdate(data);
        //} else {
        //    onAdd(data);
        //}
    };
        
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2, border: '1px solid #ddd', borderRadius: 2 }}>
            {/* Dropdown para Microorganismo */}
            <InputSelect
                label="Microorganismo"
                value={microorganismo}
                onChange={(event) => setMicroorganismo(event.target.value)}
                items={microorganismos}
                displayField={'nome'}
            />

            {/* Dropdown para Local de Coleta */}
            <InputSelect
                label="Local de Coleta"
                value={localColeta}
                onChange={(event) => setLocalColeta(event.target.value)}
                items={pontosAvaliados}
                displayField={'local_processo'}
            />
        
            <TextField
                label="Contagem"
                value={contagem}
                onChange={(event) => setContagem(event.target.value)}
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
                        setMicroorganismo('');
                        setContagem('');
                        setDataColeta('');
                    }} />
                    <CustomButton text="Cadastrar" type="submit" color="#B83226" variant="contained" />
                </Box>
            )}
        </Box>
    );
}

export default ResultadosForm;
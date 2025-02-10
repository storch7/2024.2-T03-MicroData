import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ResultadosForm from '../components/ResultadosForm';
import ResultadosTable from '../components/ResultadosTable';
import { createResultado, getResultados, updateResultado } from '../services/resultadosAPI';
import { getMicroorganism } from '../services/microorganismAPI'; 
import { getPontosAvaliados } from '../services/pontosavaliadosAPI'; 



function Resultados() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedResultado, setSelectedResultado] = useState(null);
    const [microorganismos, setMicroorganismos] = useState([]); 
    const [pontosAvaliados, setPontosAvaliados] = useState([]); 
    const [contagens, setContagens] = useState([]);
    
    // Busca os dados iniciais (resultados, microorganismos e pontos avaliados)
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Busca resultados
                const resultados = await getResultados();
                const mappedData = resultados.map((item) => ({
                    id: item.idresultados,
                    localColeta: item.limites_contagem.pontos_avaliados.nome,
                    microorganismo: item.limites_contagem.microorganismos.nome,
                    contagem: item.limites_contagem.limites_contagem,
                    dataColeta: new Date(item.data_cadastro).toLocaleDateString(),
                }));
                setData(mappedData);

                // Busca microorganismos
                const microorganismosData = await getMicroorganism();
                setMicroorganismos(microorganismosData);

                // Busca pontos avaliados
                const pontosAvaliadosData = await getPontosAvaliados();
                setPontosAvaliados(pontosAvaliadosData);
                
                // Obtendo as contagens únicas a partir dos resultados
                const uniqueContagens = [new Set(resultados.map(item => item.limites_contagem.limites_contagem))];
                setContagens(uniqueContagens.map((value) => ({ value, label: value.toString() })));
          
              
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    const handleAdd = async (item) => {
        try {
            const newResultado = await createResultado(item);
            const mappedResultado = {
                id: newResultado.idresultados,
                localColeta: newResultado.limites_contagem.pontos_avaliados.nome,
                microorganismo: newResultado.limites_contagem.microorganismos.nome,
                contagem:  item.limites_contagem.limites_contagem,
                dataColeta: new Date(newResultado.data_cadastro).toLocaleDateString(),
            };
            setData([...data, mappedResultado]);
        } catch (error) {
            console.error('Erro ao criar resultado:', error);
        }
    };

    const handleEdit = (item) => {
        setSelectedResultado(item);
        setIsEditing(true);
    };

    const handleUpdate = async (updatedData) => {
        try {
            const updatedItem = await updateResultado(selectedResultado.id, updatedData);
            const mappedResultado = {
                id: updatedItem.idresultados,
                localColeta: updatedItem.limites_contagem.pontos_avaliados.nome,
                microorganismo: updatedItem.limites_contagem.microorganismos.nome,
                contagem: updatedItem.resultado_coleta,
                dataColeta: new Date(updatedItem.data_cadastro).toLocaleDateString(),
            };
            setData(data.map((item) => (item.id === mappedResultado.id ? mappedResultado : item)));
            setIsEditing(false);
            setSelectedResultado(null);
        } catch (error) {
            console.error('Erro ao atualizar resultado:', error);
        }
    };

    const handleDelete = (item) => {
        setData(data.filter((i) => i.id !== item.id));
    };

    return (
        <Container sx={{ padding: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Gerenciar Resultados de Coleta
            </Typography>
            <ResultadosForm
                onAdd={handleAdd}
                isEditing={isEditing}
                initialData={selectedResultado}
                onUpdate={handleUpdate}
                onCancel={() => { setIsEditing(false); setSelectedResultado(null); }}
                microorganismos={microorganismos} 
                pontosAvaliados={pontosAvaliados} 
                contagens={contagens}
            />
            {loading ? (
                <Typography variant="body1">Carregando...</Typography>
            ) : (
                <ResultadosTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
            )}
        </Container>
    );
}

export default Resultados;
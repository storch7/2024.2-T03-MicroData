import './index.css'
import {useState, useEffect} from 'react'
import InputSelect from '../../components/InputSelect'
import { getMicroorganism } from '../../services/microorganismAPI';
import { getPontosAvaliados } from '../../services/pontosavaliadosAPI';
import TextField from '@mui/material/TextField';
import CustomButton from '../../components/Button';
import LineChart from '../../components/LineChart';
import { getResultadosGrafico } from '../../services/resultadosAPI';

export default function Dashboard() {
    const [microorganismo, setMicroorganismo] = useState('');
    const [local, setLocal] = useState('');
    const [dataMicro, setDataMicro] = useState([]);
    const [dataLocal, setDataLocal] = useState([]);
    const [zona, setZona] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [chartData, setChartData] = useState();

    const zonas = [
        { nome: "Zona 1", id: "ZONA_1" },
        { nome: "Zona 2", id: "ZONA_2" },
        { nome: "Zona 3", id: "ZONA_3" },
        { nome: "Zona 4", id: "ZONA_4" },
      ];

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

       // Função para buscar os dados do gráfico
    const getDataDash = async (data) => {
        try {
            const dataDash = await getResultadosGrafico(data); // Envia os dados para o backend
            setChartData(dataDash); // Atualiza o estado com os dados do gráfico
            console.log('Dados do gráfico:', dataDash);
        } catch (error) {
            alert("Erro ao buscar dados do gráfico");
            console.error('Erro ao buscar dados do gráfico:', error);
        }
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!local || !microorganismo || !(dataInicio || dataFim)) {
            alert("DADOS OBRIGATÓRIOS PRECISAM ESTAR PREENCHIDOS")
        } else {
        // Cria o objeto com os dados do formulário
        const data = {
            pontos_avaliados_id: parseInt(local),
            microorganismos_id: parseInt(microorganismo),
            zona_higienico: zona,
            data_inicio: dataInicio,
            data_fim: dataFim
        };

        console.log('Dados enviados:', data);

        // Chama a função para buscar os dados do gráfico
        getDataDash(data);
        }
    };

    return(
        <section>
            <div className="title">
                <h1>Dashboard</h1>
            </div>
            <div className='filters-container'>
                <div className='filters'>
                    <div className='select'>
                        <InputSelect
                            label="Microorganismo *"
                            value={microorganismo}
                            onChange={(event) => setMicroorganismo(event.target.value)}
                            items={dataMicro}
                            displayField={'nome'}
                        />
                    </div>

                    <div className='select'>
                        <InputSelect
                            label="Local da Coleta *"
                            value={local}
                            onChange={(event) => setLocal(event.target.value)}
                            items={dataLocal}
                            displayField={'local_processo'}
                        />
                    </div>

                    <div className='select'>
                        <TextField 
                            type = 'date'
                            label="Data de Início"
                            value={dataInicio}
                            onChange={(e) => setDataInicio(e.target.value)}
                            sx={{marginTop: '15px'}}
                            fullWidth
                        />
                    </div>

                    <div className='select'>
                        <TextField 
                            type = 'date'
                            label= "Data Fim"
                            value={dataFim}
                            onChange={(e) => setDataFim(e.target.value)}
                            sx={{marginTop: '15px'}}
                            fullWidth
                        />
                    </div>

                </div>

                <div className='button'>
                    <CustomButton text="Filtrar" type="submit" color="#B83226" variant="contained" onClick={handleSubmit}/>
                </div>
            </div>

            <div className='graph-area'>
            {/* Renderiza o gráfico apenas se chartData estiver definido */}
                {chartData ? (
                    <div className='graph' style={{ marginTop: '20px' }}>
                        <LineChart data={chartData} />
                    </div>
                ) : (
                    <p>Esperando dados...</p>
                )}
            </div>
        </section>
    )
}
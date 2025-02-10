import './index.css'
import {useState, useEffect} from 'react'
import InputSelect from '../../components/InputSelect'
import { getMicroorganism } from '../../services/microorganismAPI';
import { getPontosAvaliados } from '../../services/pontosavaliadosAPI';
import TextField from '@mui/material/TextField';
import CustomButton from '../../components/Button';
import LineChart from '../../components/LineChart';

export default function Dashboard() {
    const [microorganismo, setMicroorganismo] = useState('');
    const [local, setLocal] = useState('');
    const [dataMicro, setDataMicro] = useState([]);
    const [dataLocal, setDataLocal] = useState([]);
    const [zona, setZona] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');

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

        const handleSubmit = (event) =>{
                event.preventDefault();
                const data = {
                    pontos_avaliados_id: local,
                    microorganismos_id: microorganismo,
                    zona_higienico: zona,
                    data_inicio: dataInicio,
                    data_fim: dataFim
                }
                alert("EVENTO DETECTADO");
                console.log(data);

                const mockData = {
                    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
                    values: [65, 59, 80, 81, 56, 55, 40],
                };
                setChartData(mockData);
        }

    return(
        <section>
            <div className="title">
                <h1>Dashboard</h1>
            </div>
            <div className='filters-container'>
                <div className='filters'>
                    <div className='select'>
                        <InputSelect
                            label="Microorganismo"
                            value={microorganismo}
                            onChange={(event) => setMicroorganismo(event.target.value)}
                            items={dataMicro}
                            displayField={'nome'}
                        />
                    </div>

                    <div className='select'>
                        <InputSelect
                            label="Local da Coleta"
                            value={local}
                            onChange={(event) => setLocal(event.target.value)}
                            items={dataLocal}
                            displayField={'local_processo'}
                        />
                    </div>

                    <div className='select'>
                        <InputSelect
                            label="Zona"
                            value={zona}
                            onChange={(event) => setZona(event.target.value)}
                            items={zonas}
                            displayField={'nome'}
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
                <div className='graph'>
                    <LineChart data={chartData} />
                </div>

            </div>
        </section>
    )
}
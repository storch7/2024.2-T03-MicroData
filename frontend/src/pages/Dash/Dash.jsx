import React, { useEffect, useState } from "react";
import InputSelect from "../../components/InputSelect";
import Button from "../../components/Button"
import DatePicker from "../../components/DatePicker"
import { getMicroorganism } from '../../services/microorganismAPI';
import { getPontosAvaliados } from '../../services/pontosavaliadosAPI';
import "./Dash.css"

function DashBoard() {
    const [microorganismo, setMicroorganismo] = useState('');
    const [dataMicro, setDataMicro] = useState([]);
    const [local, setLocal] = useState('');
    const [dataLocal, setDataLocal] = useState([]);
    const [dataInicio, setDataInicio] = useState(null);
    const [dataFim, setDataFim] = useState(null);

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

    return (
        <section>
            <h1>DASHBOARD</h1>
            
            <div className="filters">
                
                <div className="select">
                    <InputSelect
                        label="Microorganismo"
                        value={microorganismo}
                        onChange={(event) => setMicroorganismo(event.target.value)}
                        items={dataMicro}
                    />
                </div>

                <div className="select">
                    <InputSelect
                        label="Local"
                        value={local}
                        onChange={(event) => setLocal(event.target.value)}
                        items={dataLocal}
                    />

                </div>

                <div className="select">
                    <InputSelect
                        label="Zona"
                        items = {zonas}
                    />
                </div>

                <div className = "select">
                    <DatePicker 
                        label="Data Início"
                        value = {dataInicio}
                        onChange = {(e => setDataInicio(e))}
                    />
                </div>

                <div className = "select">
                    <DatePicker 
                        label="Data Fim"
                        value = {dataFim}
                        onChange = {(e => setDataFim(e))}
                    />
                </div>
                
                <div className="button">
                    <Button text="Filtrar" type="submit" color="#B83226" variant="contained" />
                </div>
            </div>

        </section>
    )
}

export default DashBoard;
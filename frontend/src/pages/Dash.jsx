import React, { useEffect, useState } from "react";
import InputSelect from "../components/InputSelect";
import Button from "../components/Button"
import DatePicker from "../components/DatePicker"
import { getMicroorganism } from '../services/microorganismAPI';
import { getPontosAvaliados } from '../services/pontosavaliadosAPI';

function DashBoard() {
    const [microorganismo, setMicroorganismo] = useState('');
    const [dataMicro, setDataMicro] = useState([]);
    const [local, setLocal] = useState('');
    const [dataLocal, setDataLocal] = useState([]);



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
            
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                
                <InputSelect
                    label="Microorganismo"
                    value={microorganismo}
                    onChange={(event) => setMicroorganismo(event.target.value)}
                    items={dataMicro}
                />

                <InputSelect
                    label="Local"
                />

                <InputSelect
                    label="Zona"
                    items = {zonas}
                />

                <DatePicker 
                    label="Data Início"
                />

                <DatePicker 
                    label="Data Fim"
                />

                <Button text="Filtrar" type="submit" color="#B83226" variant="contained" />

            </div>

            <div>


            </div>
        </section>
    )
}

export default DashBoard;
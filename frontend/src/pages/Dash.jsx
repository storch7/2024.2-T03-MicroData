import InputSelect from "../components/InputSelect";
import Button from "../components/Button"

function DashBoard() {


    return (
        <section>
            <h1>DASHBOARD</h1>
            
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                
                <InputSelect
                    label="Microorganismo"
                    fullWidth= "false"
                />

                <InputSelect
                    label="Local"
                />

                <InputSelect
                    label="Zona"
                />

                <Button text="Filtrar" type="submit" color="#B83226" variant="contained" />

            </div>
        </section>
    )
}

export default DashBoard;
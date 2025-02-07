import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LimiteContagemForm from '../components/LimiteContagemForm';
import LimiteContagemTable from '../components/LimiteContagemTable';


function LimiteContagem () {
    const [loading, setLoading] = useState(true);

    return(
        <section>
            <Container>
                <Typography variant="h4" component="h1" gutterBottom>
                    Gerenciar limite de Contagem
                </Typography>

                <LimiteContagemForm />
                
                {loading ? (
                <Typography variant="body1">Carregando...</Typography>
            ) : (
                <LimiteContagemTable />
            )}
            </Container>

        </section>
    )
}

export default LimiteContagem;
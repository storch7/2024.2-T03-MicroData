import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LimiteContagemForm from '../components/LimiteContagemForm';


function LimiteContagem () {
    return(
        <section>
            <Container>
                <Typography variant="h4" component="h1" gutterBottom>
                    Novo Limite de Contagem
                </Typography>

                <LimiteContagemForm />
            </Container>

        </section>
    )
}

export default LimiteContagem;
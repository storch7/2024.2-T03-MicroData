import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import PontosavaliadosForm from '../components/PontosavaliadosForm';
import PontosavaliadosTable from '../components/PontosavaliadosTable';
import { createPontoAvaliado, getPontosAvaliados, updatePontoAvaliado } from '../services/pontosavaliadosAPI';

function PontosavaliadosPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedPontosAvaliados, setSelectedPontosAvaliados] = useState(null);
    const [itemToDelete, setItemToDelete] = useState(null); // state for deletion confirmation

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPontosAvaliados();
                setData(response);
            } catch (error) {
                console.error('Erro ao buscar Pontos avaliados:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAdd = async (item) => {
        try {
            const newItem = await createPontoAvaliado(item);
            setData([...data, newItem]);
        } catch (error) {
            console.error('Erro ao criar ponto avaliado:', error);
        }
    };

    const handleEdit = (item) => {
        setSelectedPontosAvaliados(item);
        setIsEditing(true);
    };

    const handleUpdate = async (updatedData) => {
        try {
            const updatedItem = await updatePontoAvaliado(selectedPontosAvaliados.id, updatedData);
            setData(data.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
            setIsEditing(false);
            setSelectedPontosAvaliados(null);
        } catch (error) {
            console.error('Erro ao atualizar pontos avaliados:', error);
        }
    };

    // Open deletion confirmation modal instead of deleting immediately
    const handleDelete = (item) => {
        setItemToDelete(item);
    };

    // Called when user confirms deletion in the modal
    const handleConfirmDelete = async () => {
        try {
            await updatePontoAvaliado(itemToDelete.id, { ativo: false });
            setData(data.filter((i) => i.id !== itemToDelete.id));
        } catch (error) {
            console.error('Erro ao deletar ponto avaliado:', error);
        } finally {
            setItemToDelete(null);
        }
    };

    return (
        <Container sx={{ padding: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Gerenciar Pontos Avaliados
            </Typography>
            <PontosavaliadosForm
                onAdd={handleAdd}
                isEditing={isEditing}
                initialData={selectedPontosAvaliados}
                onUpdate={handleUpdate}
                onCancel={() => { setIsEditing(false); setSelectedPontosAvaliados(null); }}
            />

            {loading ? (
                <Typography variant="body1">Carregando...</Typography>
            ) : (
                <PontosavaliadosTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
            )}

            {/* Confirmation Modal */}
            <Dialog open={!!itemToDelete} onClose={() => setItemToDelete(null)}>
                <DialogTitle>Confirmar Exclusão</DialogTitle>
                <DialogContent>
                    <br></br>Ao desativar este ponto avaliado, todos os Limites de Contagem associados serão desativados automaticamente.<br></br>
                    <br></br>Isso também fará com que todos os Resultados vinculados a esses limites sejam desativados.<br></br>
                    <br></br>Essa ação não pode ser desfeita e poderá impactar seus registros históricos.<br></br>
                    <br></br><b>Tem certeza de que deseja continuar?</b><br></br>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setItemToDelete(null)}>Cancelar</Button>
                    <Button onClick={handleConfirmDelete} color="error">Deletar</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default PontosavaliadosPage;
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import LimiteContagemForm from '../components/LimiteContagemForm';
import LimiteContagemTable from '../components/LimiteContagemTable';
import { createLimiteContagem, getLimiteContagem, updateLimiteContagem } from '../services/limitecontagemAPI';

function LimiteContagem() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLimite, setSelectedLimite] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null); // state for deletion modal

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLimiteContagem();
        setData(response);
      } catch (error) {
        console.error('Erro ao buscar limites de contagem:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAdd = async (item) => {
    try {
      const newItem = await createLimiteContagem(item);
      console.log('Novo limite de contagem:', newItem);
      setData([...data, newItem]);
    } catch (error) {
      console.error('Erro ao criar limite de contagem:', error);
    }
  };

  const handleEdit = (item) => {
    setSelectedLimite(item);
    setIsEditing(true);
  };

  const handleUpdate = async (updatedData) => {
    try {
      const updatedItem = await updateLimiteContagem(selectedLimite.id, updatedData);
      setData(data.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
      setIsEditing(false);
      setSelectedLimite(null);
    } catch (error) {
      console.error('Erro ao atualizar limite de contagem:', error);
    } 
  };

  // Instead of deleting immediately, set the item to be deleted.
  const handleDelete = (item) => {
    setItemToDelete(item);
  };

  // When the user confirms deletion in the modal.
  const handleConfirmDelete = async () => {
    try {
      await updateLimiteContagem(itemToDelete.id, { ativo: false });
      setData(data.filter((i) => i.id !== itemToDelete.id));
    } catch (error) {
      console.error('Erro ao deletar limite de contagem:', error);
    } finally {
      setItemToDelete(null);
    }
  };

  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Gerenciar Limite de Contagem
      </Typography>
      <LimiteContagemForm
        onAdd={handleAdd}
        isEditing={isEditing}
        initialData={selectedLimite}
        onUpdate={handleUpdate}
        onCancel={() => {
          setIsEditing(false);
          setSelectedLimite(null);
        }}
      />
      {loading ? (
        <Typography variant="body1">Carregando...</Typography>
      ) : (
        <LimiteContagemTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      {/* Confirmation Modal */}
      <Dialog open={!!itemToDelete} onClose={() => setItemToDelete(null)}>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          Tem certeza que deseja deletar este limite de contagem?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setItemToDelete(null)}>Cancelar</Button>
          <Button onClick={handleConfirmDelete} color="error">Deletar</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default LimiteContagem;
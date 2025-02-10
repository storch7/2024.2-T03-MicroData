import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import MicroorganismForm from '../components/MicroorganismForm';
import MicroorganismTable from '../components/MicroorganismTable';
import { getMicroorganism, createMicroorganism, updateMicroorganism } from '../services/microorganismAPI';

function MicroorganismPage() {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedMicroorganism, setSelectedMicroorganism] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null); // for deletion confirmation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMicroorganism();
        setData(response);
      } catch (error) {
        console.error('Erro ao buscar microorganismos:', error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = async (item) => {
    try {
      const newItem = await createMicroorganism(item);
      setData([...data, newItem]);
    } catch (error) {
      console.error('Erro ao criar microorganismo:', error);
    }
  };

  const handleEdit = (item) => {
    setSelectedMicroorganism(item);
    setIsEditing(true);
  };

  const handleUpdate = async (updatedData) => {
    try {
      const updatedItem = await updateMicroorganism(selectedMicroorganism.id, updatedData);
      setData(data.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
      setIsEditing(false);
      setSelectedMicroorganism(null);
    } catch (error) {
      console.error('Erro ao atualizar microorganismo:', error);
    }
  };

  const handleDelete = (item) => {
    setItemToDelete(item);
  };

  // Confirm deletion modal action
  const handleConfirmDelete = async () => {
    try {
      await updateMicroorganism(itemToDelete.id, { ativo: false });
      setData(prevData => prevData.filter(i => i.id !== itemToDelete.id));
    } catch (error) {
      console.error('Erro ao deletar microorganismo:', error);
    } finally {
      setItemToDelete(null);
    }
  };

  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Gerenciar Microorganismos
      </Typography>
      <MicroorganismForm 
        onAdd={handleAdd}
        isEditing={isEditing}
        initialData={selectedMicroorganism}
        onUpdate={handleUpdate}
        onCancel={() => {
          setIsEditing(false);
          setSelectedMicroorganism(null);
        }}
      />
      <MicroorganismTable 
        data={data} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />

      {/* Confirmation Modal */}
      <Dialog open={!!itemToDelete} onClose={() => setItemToDelete(null)}>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
        Ao desativar este microrganismo, todos os Limites de Contagem associados serão desativados automaticamente.<br></br>
        <br></br>Além disso, todos os Resultados vinculados a esses limites também serão desativados.<br></br>
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

export default MicroorganismPage;
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { getResultado, createResultado, updateResultado } from '../services/resultadosAPI';
import ResultadosForm from '../components/ResultadosForm';
import ResultadosTable from '../components/ResultadosTable';

export default function Resultados () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedResultado, setselectedResultado] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null); // state for deletion modal

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getResultado();
        setData(response);
        console.log(response);
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
      const newItem = await createResultado(item);

      if(item.alerta != 0) {
        alert("TESTE", item.alerta)
      }
      console.log('Novo limite de contagem:', newItem);
      setData([...data, newItem]);
      window.location.reload()
    } catch (error) {
       alert("Erro ao criar");
      console.error('Erro ao criar limite de contagem:', error);
    }
  };

  const handleEdit = (item) => {
    setselectedResultado(item);
    setIsEditing(true);
  };

  const handleUpdate = async (updatedData) => {
    try {
      const updatedItem = await updateResultado(selectedResultado.idresultado, updatedData);
      setData(data.map((item) => (item.id === updatedItem.idresultado ? updatedItem : item)));
      setIsEditing(false);
      setselectedResultado(null);
    } catch (error) {
      console.error('Erro ao atualizar limite de contagem:', error);
    } 
  };

  // Instead of deleting immediately, set the item to be deleted.
  const handleDelete = (item) => {
    setItemToDelete(item);
    console.log(itemToDelete);
  };

  // When the user confirms deletion in the modal.
  const handleConfirmDelete = async () => {
    try {
      await updateResultado(itemToDelete.idresultados, { ativo: false });
      setData(data.filter((i) => i.idresultados !== itemToDelete.idresultados));
      window.location.reload()
    } catch (error) {
      alert("ERRO");
      console.error('Erro ao deletar limite de contagem:', error);
    } finally {
      setItemToDelete(null);
    }
  };

  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Gerenciar Resultados
      </Typography>
      <ResultadosForm
        onAdd={handleAdd}
        isEditing={isEditing}
        initialData={selectedResultado}
        onUpdate={handleUpdate}
        onCancel={() => {
          setIsEditing(false);
          setselectedResultado(null);
        }}
      />
      {loading ? (
        <Typography variant="body1">Carregando...</Typography>
      ) : (
        <ResultadosTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      {/* Confirmation Modal */}
      <Dialog open={!!itemToDelete} onClose={() => setItemToDelete(null)}>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
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
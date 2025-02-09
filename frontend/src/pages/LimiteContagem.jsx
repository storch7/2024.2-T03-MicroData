import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LimiteContagemForm from '../components/LimiteContagemForm';
import LimiteContagemTable from '../components/LimiteContagemTable';
import { createLimiteContagem, getLimiteContagem, updateLimiteContagem } from '../services/limitecontagemAPI';

function LimiteContagem() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLimite, setSelectedLimite] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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
      setData((prevData) => [...prevData, newItem]);
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
      setData((prevData) =>
        prevData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
      );
      setIsEditing(false);
      setSelectedLimite(null);
    } catch (error) {
      console.error('Erro ao atualizar limite de contagem:', error);
    }
  };

  const handleDelete = (item) => {
    // Remove the item from the local state.
    // You can enhance this by calling an API delete endpoint if available.
    setData((prevData) => prevData.filter((i) => i.id !== item.id));
  };

  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Gerenciar Limite de Contagem
      </Typography>

      <LimiteContagemForm
        isEditing={isEditing}
        initialData={selectedLimite}
        onAdd={handleAdd}
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
    </Container>
  );
}

export default LimiteContagem;
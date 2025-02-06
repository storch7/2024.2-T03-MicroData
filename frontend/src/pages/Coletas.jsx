import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Select, 
  MenuItem, 
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Autocomplete
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomButton from '../components/Button';

function ColetasPage() {
  const [local, setLocal] = useState('');
  const [microorganismo, setMicroorganismo] = useState(null);
  const [contagem, setContagem] = useState('');
  const [data, setData] = useState('');
  
  const mockData = [
    { id: 1, local: 'Esteira de envase', microorganismo: 'Escherichia Coli', contagem: '750 UFC', data: '25/12/2024' },
    { id: 2, local: 'Esteira de envase', microorganismo: 'Escherichia Coli', contagem: '250 UFC', data: '24/12/2024' },
  ];

  const microorganismos = [
    'Escherichia coli',
    'bacteria1',
    'bacteria2'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container sx={{ py: 4 }}>
      {/* Form Section */}
      <Box sx={{ bgcolor: 'white', p: 3, borderRadius: 2, boxShadow: 1, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Adicionar nova coleta
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <Select
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            displayEmpty
            renderValue={local !== '' ? undefined : () => "Esteira de envase"}
          >
            <MenuItem value="esteira">Esteira de envase</MenuItem>
          </Select>

          <Autocomplete
            value={microorganismo}
            onChange={(event, newValue) => setMicroorganismo(newValue)}
            options={microorganismos}
            renderInput={(params) => <TextField {...params} label="Microorganismo" />}
          />

          <TextField
            value={contagem}
            onChange={(e) => setContagem(e.target.value)}
            placeholder="27"
          />

          <TextField
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Box sx={{ gridColumn: 'span 4', display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
            <CustomButton text="LIMPAR" variant="outlined" color="#666" />
            <CustomButton text="CADASTRAR" variant="contained" color="#B83226" />
          </Box>
        </Box>
      </Box>

      {/* Table Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <CustomButton text="FILTROS" variant="outlined" color="#666" />
          <CustomButton text="EXPORT" variant="outlined" color="#666" />
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Local Avaliado</TableCell>
              <TableCell>Microorganismo</TableCell>
              <TableCell>Contagem</TableCell>
              <TableCell>Data da Coleta</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.local}</TableCell>
                <TableCell>{row.microorganismo}</TableCell>
                <TableCell>{row.contagem}</TableCell>
                <TableCell>{row.data}</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: 2, alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Rows per page: 10
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1-5 of 13
        </Typography>
      </Box>
    </Container>
  );
}

export default ColetasPage;
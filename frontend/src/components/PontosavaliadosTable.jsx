import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const PontosavaliadosTable = ({ data, onEdit, onDelete }) => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    sala: '',
    area: '',
    local: '',
    frequencia: '',
    zona: '',
    zonaHigienica: '',
  });
  const rowsPerPage = 5;

  // Função para aplicar os filtros
  const applyFilters = () => {
    return data.filter((item) => {
      const matchesSala =
        filters.sala === '' || item.sala?.toLowerCase().includes(filters.sala.toLowerCase());
      const matchesArea =
        filters.area === '' || item.area?.toLowerCase().includes(filters.area.toLowerCase());
      const matchesLocal =
        filters.local === '' || item.local_processo?.toLowerCase().includes(filters.local.toLowerCase());
      const matchesFrequencia =
        filters.frequencia === '' || item.frequencia?.toLowerCase().includes(filters.frequencia.toLowerCase());
      const matchesZona =
        filters.zona === '' || item.zona_proximidade?.toLowerCase().includes(filters.zona.toLowerCase());
      const matchesZonaHigienica =
        filters.zonaHigienica === '' || item.zona_higienico?.toLowerCase().includes(filters.zonaHigienica.toLowerCase());

      return (
        matchesSala &&
        matchesArea &&
        matchesLocal &&
        matchesFrequencia &&
        matchesZona &&
        matchesZonaHigienica
      );
    });
  };

  const filteredData = applyFilters();
  const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
    setPage(1); // Redefine a página para 1 sempre que os filtros mudarem
  };

  const clearFilters = () => {
    setFilters({
      sala: '',
      area: '',
      local: '',
      frequencia: '',
      zona: '',
      zonaHigienica: '',
    });
    setPage(1); // Redefine a página para 1 ao limpar os filtros
  };

  return (
    <>
      {/* Filtros */}
      <Box sx={{ marginBottom: 2, display: 'flex', alignItems: 'center', marginTop: '30px'}}>
        <TextField
          label="Sala"
          value={filters.sala}
          onChange={(e) => handleFilterChange('sala', e.target.value)}
          sx={{ marginRight: 1 }}
        />
        <TextField
          label="Área"
          value={filters.area}
          onChange={(e) => handleFilterChange('area', e.target.value)}
          sx={{ marginRight: 1 }}
        />
        <TextField
          label="Local"
          value={filters.local}
          onChange={(e) => handleFilterChange('local', e.target.value)}
          sx={{ marginRight: 1 }}
        />
        <TextField
          label="Frequência"
          value={filters.frequencia}
          onChange={(e) => handleFilterChange('frequencia', e.target.value)}
          sx={{ marginRight: 1 }}
        />
        <TextField
          label="Zona"
          value={filters.zona}
          onChange={(e) => handleFilterChange('zona', e.target.value)}
          sx={{ marginRight: 1 }}
        />
        <TextField
          label="Zona Higiênica"
          value={filters.zonaHigienica}
          onChange={(e) => handleFilterChange('zonaHigienica', e.target.value)}
          sx={{ marginRight: 1 }}
        />
        <Button variant="contained" onClick={clearFilters}>
          Limpar Filtros
        </Button>
      </Box>

      {/* Tabela */}
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Sala</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Área</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Local</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Frequência</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Zona</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Zona Higiênica</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Local ativo</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Método</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Descrição</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((item, index) => (
              <TableRow key={index}>
                <TableCell sx={{ textAlign: 'center' }}>{item.sala}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{item.area}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{item.local_processo}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{item.frequencia}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{item.zona_proximidade}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{item.zona_higienico}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{item.ativo ? 'Sim' : 'Não'}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{item.metodo}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{item.descricao || 'N/A'}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <IconButton onClick={() => onEdit(item)} color="info">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => onDelete(item)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Paginação */}
      <Stack spacing={2} sx={{ marginTop: 2, alignItems: 'center' }}>
        <Pagination
          count={Math.ceil(filteredData.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default PontosavaliadosTable;
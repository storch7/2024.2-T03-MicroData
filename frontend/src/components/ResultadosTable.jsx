import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ResultadosTable = ({ data, onEdit, onDelete, onUpdate }) => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    local: '',
    microorganismo: '',
    startDate: '',
    endDate: '',
  });
  const rowsPerPage = 5;

  // Função para aplicar os filtros
  const applyFilters = () => {
    return data.filter((item) => {
      const matchesLocal =
        filters.local === '' ||
        item.limites_contagem.pontos_avaliados.local_processo?.toLowerCase().includes(filters.local.toLowerCase());
      const matchesMicroorganismo =
        filters.microorganismo === '' ||
        item.limites_contagem.microorganismos.nome?.toLowerCase().includes(filters.microorganismo.toLowerCase());
      const matchesStartDate =
        filters.startDate === '' || new Date(item.data_cadastro) >= new Date(filters.startDate);
      const matchesEndDate =
        filters.endDate === '' || new Date(item.data_cadastro) <= new Date(filters.endDate);

      return matchesLocal && matchesMicroorganismo && matchesStartDate && matchesEndDate;
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
      local: '',
      microorganismo: '',
      startDate: '',
      endDate: '',
    });
    setPage(1); // Redefine a página para 1 ao limpar os filtros
  };

  return (
    <>
      {/* Filtros */}
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2, marginTop: '2rem' }}>
        <TextField
          label="Filtrar por Local"
          variant="outlined"
          size="small"
          value={filters.local}
          onChange={(e) => handleFilterChange('local', e.target.value)}
        />
        <TextField
          label="Filtrar por Microorganismo"
          variant="outlined"
          size="small"
          value={filters.microorganismo}
          onChange={(e) => handleFilterChange('microorganismo', e.target.value)}
        />
        <TextField
          label="Data Inicial"
          type="date"
          variant="outlined"
          size="small"
          value={filters.startDate}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleFilterChange('startDate', e.target.value)}
        />
        <TextField
          label="Data Final"
          type="date"
          variant="outlined"
          size="small"
          value={filters.endDate}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleFilterChange('endDate', e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={clearFilters}>
          Limpar Filtros
        </Button>
      </Box>

      {/* Tabela */}
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Local</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Microorganismo</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Contagem</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Data de Coleta</TableCell>
              <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((item, index) => (
              <TableRow key={index}>
                <TableCell sx={{ textAlign: 'center' }}>
                  {item.limites_contagem.pontos_avaliados.local_processo || "N/A"}
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {item.limites_contagem.microorganismos.nome || "N/A"}
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {item.resultado_coleta + " UFC"}
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  {new Date(item.data_cadastro).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                  })}
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <IconButton onClick={() => onEdit(item)} color="info">
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => onDelete(item)} color="error">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => onUpdate(item)} color="primary">
                    <ArrowForwardIcon />
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

export default ResultadosTable;

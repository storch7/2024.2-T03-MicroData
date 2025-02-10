import React from 'react';
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

const LimiteContagemTable = ({ data, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Microorganismo</TableCell>
            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Local</TableCell>
            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Limite de Contagem</TableCell>
            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell sx={{ textAlign: 'center' }}>
                {item.microorganismos?.nome || "N/A"}
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                {item.pontos_avaliados?.local_processo || "N/A"}
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                {item.limites_contagem}
              </TableCell>
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
  );
};

export default LimiteContagemTable;
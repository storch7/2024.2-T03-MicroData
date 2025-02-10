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

const ResultadosTable = ({ data, onEdit, onDelete }) => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Local de Coleta</TableCell>
                        <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Microorganismo</TableCell>
                        <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Contagem</TableCell>
                        <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Data da Coleta</TableCell>
                        <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell sx={{ textAlign: 'center' }}>{item.localColeta}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{item.microorganismo}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{item.contagem}</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>{item.dataColeta}</TableCell>
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

export default ResultadosTable;
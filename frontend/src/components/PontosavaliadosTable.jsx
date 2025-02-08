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


const PontosavaliadosTable = ({ data, onEdit, onDelete }) => {
    return (
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
                    {data.map((item, index) => (
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
    );
};

export default PontosavaliadosTable;
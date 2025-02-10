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
import TablePagination from '@mui/material/TablePagination';

const PontosavaliadosTable = ({ data, onEdit, onDelete }) => {
    // Estado para controlar a paginação
    const [page, setPage] = useState(0); // Página atual
    const [rowsPerPage, setRowsPerPage] = useState(5); // Número de linhas por página

    // Função para mudar a página
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Função para mudar o número de linhas por página
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Resetar para a primeira página ao alterar o número de linhas
    };

    // Filtrar os dados para exibir apenas a página atual
    const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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

            {/* Componente de Paginação */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]} // Opções de linhas por página
                component="div"
                count={data.length} // Total de registros
                rowsPerPage={rowsPerPage} // Linhas por página
                page={page} // Página atual
                onPageChange={handleChangePage} // Função para mudar de página
                onRowsPerPageChange={handleChangeRowsPerPage} // Função para mudar o número de linhas por página
            />
        </TableContainer>
    );
};

export default PontosavaliadosTable;
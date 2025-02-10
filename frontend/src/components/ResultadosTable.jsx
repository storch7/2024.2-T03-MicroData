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
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const ResultadosTable = ({ data, onEdit, onDelete }) => {
    // Estado para controlar a paginação
    const [page, setPage] = useState(0); // Página atual
    const [rowsPerPage, setRowsPerPage] = useState(5); // Número de linhas por página

    // Estados para os filtros
    const [localColetaFilter, setLocalColetaFilter] = useState(''); // Filtro por local de coleta
    const [startDateFilter, setStartDateFilter] = useState(''); // Filtro por data inicial
    const [endDateFilter, setEndDateFilter] = useState(''); // Filtro por data final

    // Função para mudar a página
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Função para mudar o número de linhas por página
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Resetar para a primeira página ao alterar o número de linhas
    };

    // Aplicar filtros aos dados
    const filteredData = data.filter((item) => {
        const matchesLocalColeta = localColetaFilter
            ? item.localColeta.toLowerCase().includes(localColetaFilter.toLowerCase())
            : true;

        const matchesDateRange =
            (!startDateFilter || new Date(item.dataColeta) >= new Date(startDateFilter)) &&
            (!endDateFilter || new Date(item.dataColeta) <= new Date(endDateFilter));

        return matchesLocalColeta && matchesDateRange;
    });

    // Filtrar os dados para exibir apenas a página atual
    const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            {/* Barra de Filtros */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: 2 }}>
                <TextField
                    label="Filtrar por Local de Coleta"
                    variant="outlined"
                    size="small"
                    value={localColetaFilter}
                    onChange={(e) => setLocalColetaFilter(e.target.value)}
                    sx={{ flex: 1 }}
                />
                <TextField
                    label="Data Inicial"
                    type="date"
                    variant="outlined"
                    size="small"
                    value={startDateFilter}
                    onChange={(e) => setStartDateFilter(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{ flex: 1 }}
                />
                <TextField
                    label="Data Final"
                    type="date"
                    variant="outlined"
                    size="small"
                    value={endDateFilter}
                    onChange={(e) => setEndDateFilter(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{ flex: 1 }}
                />
            </Box>

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
                    {paginatedData.length > 0 ? (
                        paginatedData.map((item, index) => (
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
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} sx={{ textAlign: 'center' }}>
                                Nenhum resultado encontrado.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {/* Componente de Paginação */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]} // Opções de linhas por página
                component="div"
                count={filteredData.length} // Total de registros filtrados
                rowsPerPage={rowsPerPage} // Linhas por página
                page={page} // Página atual
                onPageChange={handleChangePage} // Função para mudar de página
                onRowsPerPageChange={handleChangeRowsPerPage} // Função para mudar o número de linhas por página
            />
        </TableContainer>
    );
};

export default ResultadosTable;
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

const PontosavaliadosTable = ({ data, onEdit, onDelete }) => {
    // Estado para controlar a paginação
    const [page, setPage] = useState(0); // Página atual
    const [rowsPerPage, setRowsPerPage] = useState(5); // Número de linhas por página

    // Estados para os filtros
    const [salaFilter, setSalaFilter] = useState('');
    const [areaFilter, setAreaFilter] = useState('');
    const [localFilter, setLocalFilter] = useState('');
    const [frequenciaFilter, setFrequenciaFilter] = useState('');
    const [zonaProximidadeFilter, setZonaProximidadeFilter] = useState('');
    const [zonaHigienicoFilter, setZonaHigienicoFilter] = useState('');

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
        const matchesSala = salaFilter
            ? item.sala.toLowerCase().includes(salaFilter.toLowerCase())
            : true;

        const matchesArea = areaFilter
            ? item.area.toLowerCase().includes(areaFilter.toLowerCase())
            : true;

        const matchesLocal = localFilter
            ? item.local_processo.toLowerCase().includes(localFilter.toLowerCase())
            : true;

        const matchesFrequencia = frequenciaFilter
            ? item.frequencia.toLowerCase().includes(frequenciaFilter.toLowerCase())
            : true;

        const matchesZonaProximidade = zonaProximidadeFilter
            ? item.zona_proximidade.toLowerCase().includes(zonaProximidadeFilter.toLowerCase())
            : true;

        const matchesZonaHigienico = zonaHigienicoFilter
            ? item.zona_higienico.toLowerCase().includes(zonaHigienicoFilter.toLowerCase())
            : true;

        return (
            matchesSala &&
            matchesArea &&
            matchesLocal &&
            matchesFrequencia &&
            matchesZonaProximidade &&
            matchesZonaHigienico
        );
    });

    // Filtrar os dados para exibir apenas a página atual
    const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            {/* Barra de Filtros */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, padding: 2, flexWrap: 'wrap' }}>
                <TextField
                    label="Filtrar por Sala"
                    variant="outlined"
                    size="small"
                    value={salaFilter}
                    onChange={(e) => setSalaFilter(e.target.value)}
                    sx={{ flex: 1 }}
                />
                <TextField
                    label="Filtrar por Área"
                    variant="outlined"
                    size="small"
                    value={areaFilter}
                    onChange={(e) => setAreaFilter(e.target.value)}
                    sx={{ flex: 1 }}
                />
                <TextField
                    label="Filtrar por Local"
                    variant="outlined"
                    size="small"
                    value={localFilter}
                    onChange={(e) => setLocalFilter(e.target.value)}
                    sx={{ flex: 1 }}
                />
                <TextField
                    label="Filtrar por Frequência"
                    variant="outlined"
                    size="small"
                    value={frequenciaFilter}
                    onChange={(e) => setFrequenciaFilter(e.target.value)}
                    sx={{ flex: 1 }}
                />
                <TextField
                    label="Filtrar por Zona"
                    variant="outlined"
                    size="small"
                    value={zonaProximidadeFilter}
                    onChange={(e) => setZonaProximidadeFilter(e.target.value)}
                    sx={{ flex: 1 }}
                />
                <TextField
                    label="Filtrar por Zona Higiênica"
                    variant="outlined"
                    size="small"
                    value={zonaHigienicoFilter}
                    onChange={(e) => setZonaHigienicoFilter(e.target.value)}
                    sx={{ flex: 1 }}
                />
            </Box>

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
                    {paginatedData.length > 0 ? (
                        paginatedData.map((item, index) => (
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
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={10} sx={{ textAlign: 'center' }}>
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

export default PontosavaliadosTable;
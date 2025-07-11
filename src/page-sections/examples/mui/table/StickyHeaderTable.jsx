import { useState } from 'react'; // MUI

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar'; // ==============================================================
// all typescript interface

// ==============================================================
function createData(name, code, population, size) {
  const density = population / size;
  return {
    name,
    code,
    population,
    size,
    density
  };
}

const rows = [createData('India', 'IN', 1324171354, 3287263), createData('China', 'CN', 1403500365, 9596961), createData('Italy', 'IT', 60483973, 301340), createData('United States', 'US', 327167434, 9833520), createData('Canada', 'CA', 37602103, 9984670), createData('Australia', 'AU', 25475400, 7692024), createData('Germany', 'DE', 83019200, 357578), createData('Ireland', 'IE', 4857000, 70273), createData('Mexico', 'MX', 126577691, 1972550), createData('Japan', 'JP', 126317000, 377973), createData('France', 'FR', 67022000, 640679), createData('United Kingdom', 'GB', 67545757, 242495), createData('Russia', 'RU', 146793744, 17098246), createData('Nigeria', 'NG', 200962417, 923768), createData('Brazil', 'BR', 210147125, 8515767)]; // table columns

const columns = [{
  id: 'name',
  label: 'Name',
  minWidth: 170
}, {
  id: 'code',
  label: 'ISO\u00a0Code',
  minWidth: 100
}, {
  id: 'population',
  label: 'Population',
  minWidth: 170,
  align: 'right',
  format: value => value.toLocaleString('en-US')
}, {
  id: 'size',
  label: 'Size\u00a0(km\u00b2)',
  minWidth: 170,
  align: 'right',
  format: value => value.toLocaleString('en-US')
}, {
  id: 'density',
  label: 'Density',
  minWidth: 170,
  align: 'right',
  format: value => value.toFixed(2)
}];
export default function StickyHeaderTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return <Paper sx={{
    width: '100%',
    overflow: 'hidden',
    borderRadius: 2,
    boxShadow: 2
  }}>
      <TableContainer component={Scrollbar} sx={{
      maxHeight: 440
    }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => <TableCell key={column.id} padding="normal" align={column.align} sx={{
              minWidth: column.minWidth,
              color: 'text.primary',
              fontWeight: 600
            }}>
                  {column.label}
                </TableCell>)}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
            return <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                const value = row[column.id];
                return <TableCell padding="normal" key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>;
              })}
                </TableRow>;
          })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination page={page} component="div" count={rows.length} rowsPerPage={rowsPerPage} onPageChange={handleChangePage} rowsPerPageOptions={[10, 25, 100]} onRowsPerPageChange={handleChangeRowsPerPage} />
    </Paper>;
}
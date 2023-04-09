import { IconButton, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material';
import React from 'react'

const FilterTwo = () => {
    const useSortableData = (items, config = null) => {
        const [sortConfig, setSortConfig] = React.useState(config);
      
        const sortedItems = React.useMemo(() => {
          let sortableItems = [...items];
          if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
              if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
              }
              if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
              }
              return 0;
            });
          }
          return sortableItems;
        }, [items, sortConfig]);
      
        const requestSort = (key) => {
          let direction = 'ascending';
          if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
          ) {
            direction = 'descending';
          }
          setSortConfig({ key, direction });
        };
      
        return { items: sortedItems, requestSort, sortConfig };
      };
      
      const ProductTable = (props) => {
        const { items, requestSort, sortConfig } = useSortableData(props.products);

        const [rowsPerPage, setRowsPerPage] = React.useState(5);
        const [page, setPage] = React.useState(0);


        const handleChangePage = (event, newPage) => {
            setPage(newPage);
          };

          const handleChangeRowsPerPage = (
            event
          ) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          };


        const getClassNamesFor = (name) => {
          if (!sortConfig) {
            return;
          }
          return sortConfig.key === name ? sortConfig.direction : undefined;
        };
        return (
            <><TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell onClick={() => requestSort('name')}>1 Click Capital Products</TableCell>
                            <TableCell align="right" onClick={() => requestSort('price')}>Price ( In Lac per Year)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                <TableCell align="right">{item.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={items.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage} />
                </>
        );
      };
  return (
    <div> <ProductTable
    products={[
      { id: 1, name: 'Payroll Financing', price: 4.9 },
      { id: 2, name: 'Salary Advance', price: 1.9 },
      { id: 3, name: 'Insurance Funding', price: 2.4 },
      { id: 4, name: 'Project Funding', price: 3.9},
      { id: 5, name: 'LRD/ Lease Rental Discounting', price: 0.9 },
      { id: 6, name: 'Supply chain finance ', price: 2.9 },
      { id: 7, name: 'Working capital', price: 3.1 },
      { id: 8, name: 'Collateral Free MSME/SME Loan', price: 1.5 },
      { id: 9, name: 'Human Resources Management System', price: 2.7 },
      { id: 10, name: 'Entertainment & Production Financing', price: 3.8 },
    ]}
  /></div>
  )
}

export default FilterTwo
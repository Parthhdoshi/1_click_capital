import { IconButton, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const FilterOne = () => {

    const [searchTerm, setSearchTerm] = React.useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };

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
        const getClassNamesFor = (name) => {
          if (!sortConfig) {
            return;
          }
          return sortConfig.key === name ? sortConfig.direction : undefined;
        };
        return (
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell onClick={() => requestSort('name')}>Skills </TableCell>
            <TableCell align="right" onClick={() => requestSort('Star')}>Star</TableCell>        
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.Star}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
        );
      };

  return (
    <div>
    <ProductTable
    products={[
      { id: 1, name: 'React', Star: 7},
      { id: 2, name: 'React Native', Star: 5},
      { id: 3, name: 'HTML', Star: 6},
      { id: 4, name: 'CSS', Star: 5},
      { id: 5, name: 'Java Script', Star: 7},
      { id: 6, name: 'Team Management', Star: 7},
      { id: 7, name: 'API', Star: 7.5 },
    ]}
  />
  </div>
  )
}

export default FilterOne
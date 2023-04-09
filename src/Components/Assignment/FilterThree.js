import { Alert, Button, IconButton, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material';
import React, { useEffect } from 'react'

const FilterThree = () => {
    const [ apiData, setApiData ] = React.useState([]);
    useEffect(()=>{
        fetch('https://blog.1clickcapital.com/wp-json/wp/v2/posts').then(response  =>  response.json()).then(data  =>  setApiData(data));  
    },[])

  

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
        const [rowsPerPage, setRowsPerPage] = React.useState(3);
        const [page, setPage] = React.useState(0);
        const [searchTerm, setSearchTerm] = React.useState("");

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

        const filtereditems = items.filter((item) => {
            return (
              item.rttpg_excerpt.toLowerCase().includes(searchTerm.toLowerCase()) 
            );
          });

        const handleSearch = (event) => {
            setSearchTerm(event.target.value);
          };

        
        return (
            <>
            <Alert severity="info" sx={{width:"30%"}}>This Data Fetching From 1 Click Capital Blog Api !</Alert>
                <Paper
              component="form"
              sx={{
                p: "2px 4px",
                mb: "5px",
                mt: "5px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Blog"
                onChange={handleSearch}
                inputRef={input => input && input.focus()}
                autoFocus={true}
              />
            </Paper>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell onClick={() => requestSort('name')}>1 click Capital Blogs</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right" onClick={() => requestSort('popularity')}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filtereditems && filtereditems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <img src={item.rttpg_featured_image_url.thumbnail[0]} width={100}/>
                                <TableCell component="th" scope="row">
                                    {item.rttpg_excerpt.split("&hellip;")[0] + "..."}
                                </TableCell>
                                <TableCell align="right">{new Date(item.modified).toLocaleDateString()}</TableCell>
                                <TableCell align="right" onClick={() => window.open(item.link)} sx={{ cursor: "pointer" }}><Button>CLick here</Button> </TableCell>
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
                    onRowsPerPageChange={handleChangeRowsPerPage} /></>
        );
      };
  return (
    <div> <ProductTable products={apiData.map((item)=>item)}
    // products={[
    //   { id: 1, name: 'Various Types of Unsecured Business Loans', ImgLink: "https://blog.1clickcapital.com/wp-content/uploads/2023/04/Various-types-of-Unsecured-Business-Loan.jpg", BlogLink:"https://blog.1clickcapital.com/types-of-unsecured-business-loans/" },
    //   { id: 2, name: 'How an Advance Salary Can Help Employees Reach Financial Freedom', ImgLink:"https://blog.1clickcapital.com/wp-content/uploads/…ry-Can-Help-Employees-Reach-Financial-Freedom.jpg" ,BlogLink:"" },
    //   { id: 3, name: 'Working Capital and its Importance in Financing', ImgLink:"https://blog.1clickcapital.com/wp-content/uploads/2023/03/Working-Capital.png" ,BlogLink:"" },
    //   { id: 4, name: '8 Tips to Upscale Your Business in India', ImgLink:"https://blog.1clickcapital.com/wp-content/uploads/2023/03/Tips-to-upscale-your-business-in-India.png" ,BlogLink:""},
    //   { id: 5, name: 'Top credit bureaus in India to know about', ImgLink:"	https://blog.1clickcapital.com/wp-content/uploads/2023/03/Top-credit-bureaus-in-India.jpg" ,BlogLink:"" },
    //   { id: 6, name: 'CREDIT SCORE MYTHS TO BE AWARE OF', ImgLink:"" ,BlogLink:"" },
    //   { id: 7, name: '7 Tips to become a successful Business woman', ImgLink:"" ,BlogLink:"" },
    //   { id: 8, name: 'Payroll Financing VS Supply Chain Financing', ImgLink:"" ,BlogLink:"" },
    //   { id: 9, name: 'How to Get Collateral Free Business Loans in India? ', ImgLink:"" ,BlogLink:"" },
    //   { id: 10, name: 'Methods to Prepare Your Company for a Recession ', ImgLink:"" ,BlogLink:"" },
    // ]}
  /></div>
  )
}

export default FilterThree
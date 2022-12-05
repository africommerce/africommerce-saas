import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Rating from '@mui/material/Rating';

function createData(id, product, rating) {
  return {
    id,
    product,
    rating,
    history: [
      {
        // date: '2020-01-05',
        customerId: 1,
        amount: 3,
      },
      {
        // date: '2020-01-02',
        customerId: 2,
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [value] = React.useState(4);//for rating value
  return (
    <React.Fragment>
      
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{width:50}}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
          
            {open ? <RemoveIcon sx={{backgroundColor:"#000", color:"#fff", padding:"2px", fontSize:"small"}} /> : <AddIcon sx={{backgroundColor:"rgba(233, 233, 240, 1)", color:"#000",padding:"2px", fontSize:"small"}}  />}
          </IconButton>
          {row.id}
        </TableCell>
        <TableCell component="th" scope="row" sx={{width:700}}>
          {row.product}
        </TableCell>
        <TableCell align="left" sx={{width:150}}><Rating size="small" name="read-only" value={value} readOnly /></TableCell>
        {/* <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                History
              </Typography> */}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {/* <TableCell>Date</TableCell> */}
                    <TableCell >Customer</TableCell></TableRow>
                  <TableRow> <TableCell>Comment</TableCell></TableRow>
                  <TableRow> <TableCell>Published</TableCell></TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.customerId}>
                      {/* <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell> */}
                      {/* <TableCell>{historyRow.customerId}</TableCell>
                       <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>  */}
                      {historyRow.customerId}
                    </TableRow>
                  ))}
                </TableBody>
              
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    product: PropTypes.string.isRequired,
    // rating: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        // date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    id: PropTypes.number.isRequired,
    // price: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(1, "SUNGAIT Ultra Lightweight Rectangular Polarized Sunglasses UV400 Protection", 6.0, 24, ),
  createData(2, "Under Armour Men's Charged Assert 9 Running Shoe", 9.0, 37 ),
  createData(3, "SUNGAIT Ultra Lightweight", 16.0, 24),
  createData(4, "Calvin Klein Men's Slim Fit Suit Separates", 3.7, 67),
];

export default function sellerProductReviews() {
  return (
    
    <TableContainer  component={Paper} sx={{width:"max-content"}}>
      <Table sx={{width:"100%"}}  aria-label="collapsible table">
        <TableHead>
          <TableRow> 
            <TableCell  sx={{fontWeight:"bold"}} colSpan={3}>Product Reviews</TableCell>
             </TableRow>
          <TableRow>
            <TableCell  sx={{fontWeight:"bold", width:50}} align="left">#</TableCell>
            <TableCell  sx={{fontWeight:"bold", width:700}}  align="left">Product</TableCell>
            <TableCell  sx={{fontWeight:"bold", width:150}}  align="left">Rating</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}

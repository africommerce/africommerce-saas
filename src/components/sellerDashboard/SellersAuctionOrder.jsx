import React from 'react';
import {Typography,TextField, Select,Button, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow , Paper, Container}from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import styled from "styled-components";


const FormControl = styled.div`
margin-right:10px;

@media (max-width: 500px) {
  width: 100%;
  margin-bottom:10px;
}

`


function createData(no, orderCode, customer,amt,deliveryStatus, paymentMethod,paymentStatus, refund, options) {
    return { no, orderCode, customer,amt,deliveryStatus, paymentMethod, paymentStatus, refund, options};
  }

  const rows=[
    createData(1,"20220420-07073292", "Paul K. Jensen", "$80.950", "Delivered", "Cash On Delivery","paid", "2 refund"),
    createData(2,"20220420-07073259", "Paul K. Jensen", "$80.950", "Delivered", "Cash On Delivery","paid", "2 refund"),
    createData(3,"20220420-07073143", "Paul K. Jensen", "$80.950", "Pending", "Cash On Delivery","unpaid", "2 refund"),
    createData(4,"20220420-07073112", "Paul K. Jensen", "$80.950", "Delivered", "Cash On Delivery","paid", "2 refund"),
    createData(5, "20220420-07073111", "Paul K. Jensen", "$80.950", "Pending", "Cash On Delivery","unpaid", "2 refund"),
    createData(6,"20220420-07072866", "Paul K. Jensen", "$80.950", "Delivered", "Cash On Delivery","paid", "2 refund"),
  ]

function SellersAuctionOrders() {
    const [paymentStatus, setPaymentStatus] = React.useState('');
    const [deliveryStatus, setDeliveryStatus] = React.useState('');

  const handlePaymentChange = (event) => {
    setPaymentStatus(event.target.value);
  };

  const handleDeliveryChange = (event) => {
    setDeliveryStatus(event.target.value);
  };

  
  

  return (
    <div>
<Container>
    <Typography sx={{fontWeight:"bold"}}>Purchase Package List</Typography>
<TableContainer component={Paper} sx={{marginTop:"20px", padding: 2, marginBottom:"20px", width:"max-content"}}>
  <Table sx={{width:"100%"}} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell sx={{fontWeight:"bold"}} colSpan={10}>
         
            
            {/* </TableCell>
            <TableCell> */}
            <form style={{ width: 950, display:"flex", flexWrap:"wrap", justifyContent: "center", alignItems: "center"}}>
           <FormControl>
           <Typography variant="body1">All Purchase Package</Typography>
           </FormControl>
            <FormControl fullWidth >
                {/* //filter select 1 */}
        <Select
          value={paymentStatus}
          onChange={handlePaymentChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
          sx={{width:"100%"}}
        >
          <MenuItem value="">
            <em>Filter by Payment Status</em>
          </MenuItem>
          <MenuItem value={"paid"}>Paid</MenuItem>
          <MenuItem value={"unpaid"}>Unpaid</MenuItem>
        </Select>
        {/* //filter select 1 */}
        </FormControl>
        <FormControl>
        <Select
          value={deliveryStatus}
          onChange={handleDeliveryChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          size="small"
          sx={{width:"100%"}}
        >
          <MenuItem value="">
            <em>Filter by Delivery Status</em>
          </MenuItem>
          <MenuItem value={"pending"}>Pending</MenuItem>
          <MenuItem value={"confirmed"}>Confirmed</MenuItem>
          <MenuItem value={"on-delivery"}>On Delivery</MenuItem>
          <MenuItem value={"delivered"}>Delivered</MenuItem>
        </Select>
        </FormControl>
        <FormControl>
        <TextField variant="outlined" fullWidth placeholder="Type order code & hit Enter" size="small" />
      </FormControl>
      <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Filter
        </Button>
      </form>
      </TableCell>
      </TableRow>

      <TableRow >
            <TableCell sx={{fontWeight:"bold", width:10, }}  size="small" align="left">#</TableCell>
            <TableCell sx={{fontWeight:"bold", width:150, }} size="small" align="left">Order Code :</TableCell>
            <TableCell sx={{fontWeight:"bold", width:100}} size="small" align="left">Customer</TableCell>
            <TableCell sx={{fontWeight:"bold", width:50}}  size="small" align="left">Amount</TableCell>
        
            <TableCell sx={{fontWeight:"bold", width:100}} size="small" align="left">Delivery Status</TableCell>
            <TableCell sx={{fontWeight:"bold", width:80}} size="small" align="left">Payment method</TableCell>
            <TableCell sx={{fontWeight:"bold", width:80}} size="small" align="left">Payment Status</TableCell>

           < TableCell sx={{fontWeight:"bold", width:60}}  size="small" align="left">Refund</TableCell>
            <TableCell sx={{fontWeight:"bold", width:80}} size="small" align="left">Options</TableCell>
            
          </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row)=>(
        <TableRow  key={row.no} >
        <TableCell component="th" scope="row" align="left" size="small" sx={{width:10}}> {row.no}</TableCell>
        <TableCell align="left" sx={{width:150}} size="small" >{row.orderCode}</TableCell>
        <TableCell align="left" sx={{width:100}} size="small" >{row.customer}</TableCell>
        <TableCell align="left" sx={{width:50}} size="small" >{row.amt}</TableCell>

        <TableCell align="left" sx={{width:100}} size="small" >{row.deliveryStatus}</TableCell>
        <TableCell align="left" sx={{width:80}} size="small" >{row.paymentMethod}</TableCell>
        <TableCell align="left" sx={{width:80}} size="small" ><span>{row.paymentStatus}</span></TableCell>
        <TableCell align="left" sx={{width:60}} size="small" >{row.refund}</TableCell>
        
        <TableCell align="left" sx={{width:80}}>
        <VisibilityIcon  sx={{cursor:"pointer", color:'#0abb75', backgroundColor:"rgba(37, 188, 241, 0.15)", fontSize:"small",padding:"10px", borderRadius:"50%", '&:hover': {
              backgroundColor: '#25bcf1', color:"#fff"
            }}}/>
           <FileDownloadOutlinedIcon sx={{cursor:"pointer", color:'#28a745', backgroundColor:"rgba(10, 187, 117, 0.15)", fontSize:"small",padding:"10px", borderRadius:"50%", '&:hover': {
              backgroundColor: '#28a745',color:"#fff"
            }}}/>

        </TableCell>
       </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</Container>
    </div>
  )
}

export default SellersAuctionOrders
import React from "react"


import {Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow , Paper, Container}from '@mui/material';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
function createData(no, pack, price,type) {
    return { no, pack, price,type};
  }

  const rows=[
    createData(1, "Platinum", 50, "Online payment"),
    createData(2, "Platinum", 50, "Online payment"),
    createData(3,"Platinum", 50, "Online payment"),
    createData(4, "Platinum", 50, "Online payment"),
    createData(5, "Platinum", 50, "Online payment"),
    createData(6,"Platinum", 50, "Online payment"),
    createData(7, "Platinum", 50, "Online payment"),
    createData(8, "Platinum", 50, "Online payment"),
    createData(9,"Platinum", 50, "Online payment")
  ]

export const SellersPurchasePackages =()=>{
    return(<div>

<Container>
    <Typography sx={{fontWeight:"bold"}}>Purchase Package List</Typography>
<TableContainer component={Paper} sx={{marginTop:"20px", padding: 2, marginBottom:"20px", width:"max-content"}}>
  <Table sx={{width:"100%"}} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell sx={{fontWeight:"bold"}} colSpan={5}>All Purchase Package</TableCell>
       
      </TableRow>

      <TableRow >
            <TableCell sx={{fontWeight:"bold", width:30}} align="left">#</TableCell>
            <TableCell sx={{fontWeight:"bold", width:280}} align="left">Package</TableCell>
            <TableCell sx={{fontWeight:"bold", width:280}} align="left">Package Price</TableCell>
            <TableCell sx={{fontWeight:"bold", width:280}} align="left">Payment Type</TableCell>
        
            
          </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row)=>(
        <TableRow  key={row.no} >
        <TableCell component="th" scope="row" align="left" sx={{width:30}}> {row.no}</TableCell>
        <TableCell align="left" sx={{width:280}}>{row.pack}</TableCell>
        <TableCell align="left" sx={{width:280}}>{row.price}</TableCell>
        <TableCell align="left" sx={{width:280}}>{row.type}</TableCell>
        
       </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</Container>
    </div>)
}
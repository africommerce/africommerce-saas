import {CardContent ,Switch, Container, Typography} from '@mui/material'
import React from 'react';
import styled from 'styled-components'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const ItemBgCard =styled.div`
    background-color: #eb4786;
    background-image: linear-gradient(315deg, #eb4786 0%, #b854a6 74%);
    text-align:center;
    color:#fff;
    border-radius:6px;
    padding:20px;
    max-height:120px;

`
const ItemNoneBgCard= styled.div`
background-color: #fff;
padding:20px;
text-align:center;
border:1px solid #fafafa;
border-radius:6px;
max-height:120px;

&:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: 'pointer';
}

`

const Button = styled.button`
background-color: transparent;
padding:6px 12px;
border:1px solid #000;
font-size: 1rem;
font-weight:600;
border-radius:5px;


&:hover {
  background-color: #000;
  color:#fff;
  cursor: 'pointer';
}

`

// const columns =[
//   { id: 'no', label: '#', minWidth: 40 },
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'category', label: 'Category', minWidth: 40 },
//   { id: 'price', label: 'Base Price', minWidth: 170 },
//   { id: 'published', label: 'Published', minWidth: 170 },
//   { id: 'featured', label: 'Featured', minWidth: 170 },
//   { id: 'options', label: 'Options', minWidth: 170 }
// ]

function createData(no, name, category, price ) {
  return { no, name, category, price};
}

// let approval =[]
const rows = [
  createData(1,'FIFA 22 Standard - PC [Online Game Code]', "Software", 59),
  createData(2,'Adobe Premiere Elements 2022 | PC/Mac Disc', "Software", 99),
  createData(3,'Microsoft 365 Personal | 12-Month Subscription, 1 person| Premium Office Apps', "Software", 109),
];

export const SellersDigitalProducts = ()=>{
    return(
        <div>
     <Box py={5} sx={{ width:"100%"}}>
  <Container >
    
      <Typography variant="h5" component="h5" bold>Product</Typography>
   
    <Grid container spacing={3}>
      <Grid item xs={12} sm={8} md={4} >
        <ItemBgCard >
          <CardContent >
            <div style={{}}><FileUploadOutlinedIcon style={{backgroundColor:"#fafafa", fontSize:"2rem", borderRadius:"50%"}}/></div>
        <Typography gutterBottom variant="h5" sx={{fontWeight:'800'}} component="h5">
           485
        </Typography>
        <Typography variant="p" component="p" style={{fontSize:'.9rem'}}>
        Remaining Uploads
        </Typography>
      </CardContent>
        </ItemBgCard>
      </Grid>
      <Grid item xs={12} sm={8} md={4} >
        <ItemNoneBgCard >
        <CardContent >
        <AddIcon sx={{fontSize:'3.5rem',  backgroundColor:"gray", color:"#fff", borderRadius:"50%"}} />
        <Typography gutterBottom variant="h6" sx={{fontWeight:'700'}} component="h6">
        Add New Digital Product
        </Typography>
      </CardContent>
       
        </ItemNoneBgCard>
      </Grid>
      <Grid item xs={12} sm={8} md={4}>
        <ItemNoneBgCard  >
        <CardContent >
        <div><img style={{width:"40px"}} src="https://i.ibb.co/hmnnYz7/platnium.png" alt="platnium" border="0"/></div>
        <Typography gutterBottom variant="p" component="div" style={{fontSize:'.9rem'}}>
          Current package platinum
        </Typography>
        <Button>Upgrade Package</Button>
      </CardContent>
      
        </ItemNoneBgCard>
      </Grid>
    </Grid>
    
   

    {/* TABLE COLUMN SECTION */}

<TableContainer component={Paper} sx={{marginTop:"20px", marginBottom:"20px"}}>
  <Table aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell sx={{fontWeight:"bold"}} colSpan={7}>All Products</TableCell>

      </TableRow>

      <TableRow >
            <TableCell sx={{fontWeight:"bold", width:50}} align="left">#</TableCell>
            <TableCell sx={{fontWeight:"bold", width:200}} align="left">Name</TableCell>
            <TableCell sx={{fontWeight:"bold", width:150}} align="left">Category</TableCell>
            
            <TableCell sx={{fontWeight:"bold", width:100}} align="left">Base Price</TableCell>
      
            <TableCell sx={{fontWeight:"bold",width:100}} align="left">Published</TableCell>

            <TableCell sx={{fontWeight:"bold", width:100}} align="left">Featured</TableCell>
            <TableCell sx={{fontWeight:"bold", width:150}} align="left" bold>options</TableCell>
          </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row)=>(
        <TableRow  key={row.no} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell sx={{width:50}} component="th" scope="row">
          {row.no}
        </TableCell>
        <TableCell align="left" sx={{width:200}}>{row.name}</TableCell>
        <TableCell align="left" sx={{width:150}} >{row.category}</TableCell>
        <TableCell align="left" sx={{width:100}}>{row.price}</TableCell>
        
           <TableCell align="left" sx={{width:100}}><Switch {...label} defaultChecked /></TableCell>
        <TableCell align="left" sx={{width:100}}><Switch {...label} /></TableCell>
     
        <TableCell align="left" sx={{width:150}}>
        <FileDownloadOutlinedIcon  sx={{cursor:"pointer", color:'#0abb75', backgroundColor:"rgba(37, 188, 241, 0.15)", fontSize:"small",padding:"10px", borderRadius:"50%", '&:hover': {
              backgroundColor: '#25bcf1', color:"#fff"
            }}}/>
           <EditOutlinedIcon sx={{cursor:"pointer", color:'#28a745', backgroundColor:"rgba(10, 187, 117, 0.15)", fontSize:"small",padding:"10px", borderRadius:"50%", '&:hover': {
              backgroundColor: '#28a745',color:"#fff"
            }}}/>
           <DeleteOutlinedIcon sx={{cursor:"pointer", color:'#ef486a', backgroundColor:"rgba(239, 72, 106, 0.15)", fontSize:"small",padding:"10px", borderRadius:"50%", '&:hover': {
              backgroundColor: '#ef486a', color:"#fff"
            }}}/>

        </TableCell>

        
       </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</Container>
   {/* END TABLE COLUMN SECTION */}
   
    </Box>
        </div>
    )
}
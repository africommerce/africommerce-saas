import {CardContent ,Switch, Container, Typography ,TextField} from '@mui/material'
import React from 'react';
import styled from 'styled-components'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

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
//   { id: 'no', label: '#'},
//   { id: 'name', label: 'Name' },
//   { id: 'category', label: 'Category'},
//   { id: 'qty', label: 'Current Qty' },
//   { id: 'price', label: 'Base Price' },
//   { id: 'approval', label: 'Approval' },
//   { id: 'published', label: 'Published' },
//   { id: 'featured', label: 'Featured' },
//   { id: 'options', label: 'Options' }
// ]

function createData(no, name, category, qty, price, approval) {
  return { no, name, category, qty, price, approval};
}

// let approval =[]
const rows = [
  createData(1,'SUNGAIT Ultra Lightweight', "Men Clothing & Fashion", 6.0, 24, "Approved"),
  createData(2,'Under Armour Men\'s Charged Assert 9 Running Shoe', "Men Clothing & Fashion", 9.0, 37, "Approved"),
  createData(3,'Nike Men \'Mercurial Superfly 7 Elite Firm Ground Football Shoe', "Sports & outdoor", 16.0, 24, "Approved"),
  createData(4,'SUNGAIT Ultra Lightweight', "Men Clothing & Fashion", 6.0, 24, "Approved"),
  createData(5,'Under Armour Men\'s Charged Assert 9 Running Shoe', "Men Clothing & Fashion", 9.0, 37, "Approved"),
  createData(6,'Nike Men \'Mercurial Superfly 7 Elite Firm Ground Football Shoe', "Sports & outdoor", 16.0, 24, "Approved"),

  createData(7,'SUNGAIT Ultra Lightweight', "Men Clothing & Fashion", 6.0, 24, "Approved"),
  createData(8,'Under Armour Men\'s Charged Assert 9 Running Shoe', "Men Clothing & Fashion", 9.0, 37, "Approved"),
  createData(9,'Nike Men \'Mercurial Superfly 7 Elite Firm Ground Football Shoe', "Sports & outdoor", 16.0, 24, "Approved"),

  createData(10,'SUNGAIT Ultra Lightweight', "Men Clothing & Fashion", 6.0, 24, "Approved"),
  createData(11,'Under Armour Men\'s Charged Assert 9 Running Shoe', "Men Clothing & Fashion", 9.0, 37, "Approved"),
  createData(12,'Nike Men \'Mercurial Superfly 7 Elite Firm Ground Football Shoe', "Sports & outdoor", 16.0, 24, "Approved")

];

export const SellersProducts = ()=>{
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
        Add New Product
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

<TableContainer component={Paper} sx={{marginTop:"20px", marginBottom:"20px", padding: 2, width:"max-content"}}>
  <Table aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell sx={{fontWeight:"bold"}} colSpan={6}>All Products</TableCell>
        <TableCell colSpan={3}>
          <TextField 
           placeholder="Search Product"
            variant="outlined"
            size="small"  />
          </TableCell>
      </TableRow>

      <TableRow >
            <TableCell sx={{fontWeight:"bold", width:5}} align="left">#</TableCell>
            <TableCell sx={{fontWeight:"bold",width:230 }} align="left">Name</TableCell>
            <TableCell sx={{fontWeight:"bold",width:100 }} align="left">Category</TableCell>
            <TableCell sx={{fontWeight:"bold", width:40 }} align="left">Current Qty</TableCell>
            <TableCell sx={{fontWeight:"bold", width:40 } } align="left">Base Price</TableCell>
            <TableCell sx={{fontWeight:"bold",width:40 }} align="left">Approval</TableCell>
            <TableCell sx={{fontWeight:"bold",width:40 }} align="left">Published</TableCell>

            <TableCell sx={{fontWeight:"bold", width:40}} align="left">Featured</TableCell>
            <TableCell sx={{fontWeight:"bold", width:150}} align="left" bold>options</TableCell>
          </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row)=>(
        <TableRow  key={row.no} >
        <TableCell align="left" component="th" scope="row" sx={{width:5}}> {row.no}</TableCell>
        <TableCell align="left" sx={{width:230}}>{row.name}</TableCell>
        <TableCell align="left" sx={{width:100}}>{row.category}</TableCell>
        <TableCell align="left" sx={{width:40}}>{row.qty}</TableCell>
        <TableCell align="left" sx={{width:40}}>{row.price}</TableCell>
        
        <TableCell align="left" sx={{width:40}}><Typography variant="Span" sx={{backgroundColor:"#28a745", padding:"5px", fontSize:".8rem",  borderRadius:"5px" , color:"#fFf"}}>{row.approval}</Typography> </TableCell>
        <TableCell align="left" sx={{width:40}}><Switch {...label} defaultChecked /></TableCell>
        <TableCell align="left" sx={{width:40}}><Switch {...label} defaultChecked /></TableCell>
     
        <TableCell align="left" sx={{width:150}}>
        <EditOutlinedIcon  sx={{cursor:"pointer", color:'#0abb75', backgroundColor:"rgba(37, 188, 241, 0.15)", fontSize:"small",padding:"10px", borderRadius:"50%", '&:hover': {
              backgroundColor: '#25bcf1', color:'#fff'
            }}}/>
           <ContentCopyOutlinedIcon sx={{cursor:"pointer", color:'#28a745', backgroundColor:"rgba(10, 187, 117, 0.15)", fontSize:"small",padding:"10px", borderRadius:"50%", '&:hover': {
              backgroundColor: '#28a745', color:'#fff'
            }}}/>
           <DeleteOutlinedIcon sx={{cursor:"pointer", color:'#ef486a', backgroundColor:"rgba(239, 72, 106, 0.15)", fontSize:"small",padding:"10px", borderRadius:"50%", '&:hover': {
              backgroundColor: '#ef486a', color:'#fff'
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
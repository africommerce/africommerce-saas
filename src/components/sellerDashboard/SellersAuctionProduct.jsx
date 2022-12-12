import {CardContent, Container, Typography ,TextField} from '@mui/material'
import React from 'react';
import styled from 'styled-components'

import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ItemBgCard =styled.div`
    background-color: #eb4786;
    background-image: linear-gradient(315deg, #eb4786 0%, #b854a6 74%);
    text-align:center;
    color:#fff;
    border-radius:6px;
    padding:15px;
    max-height:115px;

`
const ItemNoneBgCard= styled.div`
background-color: #fff;
padding:15px;
text-align:center;
border:1px solid #fafafa;
border-radius:6px;
max-height:115px;

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
font-weight:500;
border-radius:5px;


&:hover {
  background-color: #000;
  color:#fff;
  cursor: 'pointer';
}

`
function createData(no, name, amt, startDate, endDate,bid ) {
    return { no, name, amt, startDate, endDate, bid};
  }
  
  // let approval =[]
  const rows = [
    createData(1,'SUNGAIT Ultra Lightweight', "$80.000", "1521-08-12 00:00:00", "1525-03-01 00:00:00", 0 )
  
  ];

function SellersAuctionProduct(){
    return(
        <div>
            <Container>
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
        Add New Auction Product
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

<TableContainer component={Paper} sx={{marginTop:"15px", marginBottom:"15px", padding: 2, width:"max-content"}}>
  <Table aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell sx={{fontWeight:"bold"}} colSpan={4}>All Auction Product</TableCell>
        <TableCell colSpan={3}>
          <TextField 
           placeholder="Type & Enter"
            variant="outlined"
            size="small"  />
          </TableCell>
      </TableRow>

      <TableRow >
            <TableCell sx={{fontWeight:"bold", width:5}} align="left">#</TableCell>
            <TableCell sx={{fontWeight:"bold",width:230 }} align="left">Name</TableCell>
            <TableCell sx={{fontWeight:"bold",width:70 }} align="left">Bid Starting Amount</TableCell>
            <TableCell sx={{fontWeight:"bold",width:100 }} align="left">Auction Start Date</TableCell>
            <TableCell sx={{fontWeight:"bold", width:100 }} align="left">Auction End Date</TableCell>
            <TableCell sx={{fontWeight:"bold", width:50 } } align="left">Total Bids</TableCell>

            <TableCell sx={{fontWeight:"bold", width:250}} align="left" bold>options</TableCell>
          </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row)=>(
        <TableRow  key={row.no} >
        <TableCell align="left" component="th" scope="row" sx={{width:5}}> {row.no}</TableCell>
        <TableCell align="left" sx={{width:230}}>
          <img alt="product" style={{height: 80, width:80}} src="https://demo.activeitzone.com/ecommerce/public/uploads/all/xIT7SLG4ciNvO2z4cU47GhtmS1RDiRBlnbzlYwSu.jpg"/>
          {row.name}
          
          </TableCell>
        <TableCell align="left" sx={{width:70}}>{row.amt}</TableCell>
        <TableCell align="left" sx={{width:100}}>{row.startDate}</TableCell>
        <TableCell align="left" sx={{width:100}}>{row.endDate}</TableCell>
        <TableCell align="left" sx={{width:50}}>{row.bid}</TableCell>
        
        <TableCell align="left" sx={{width:250}}>
        <VisibilityIcon  sx={{cursor:"pointer", color:'#0abb75', backgroundColor:"rgba(37, 188, 241, 0.15)", fontSize:"small",padding:"7px", borderRadius:"50%", '&:hover': {
              backgroundColor: '#25bcf1', color:'#fff'
            }}}/>
           <ContentCopyOutlinedIcon sx={{cursor:"pointer", color:'#28a745', backgroundColor:"rgba(7, 187, 117, 0.15)", fontSize:"small",padding:"7px", borderRadius:"50%", '&:hover': {
              backgroundColor: '#28a745', color:'#fff'
            }}}/>
           <DeleteOutlinedIcon sx={{cursor:"pointer", color:'#ef486a', backgroundColor:"rgba(239, 72, 76, 0.15)", fontSize:"small",padding:"7px", borderRadius:"50%", '&:hover': {
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
 
        </div>
    )
}

export default SellersAuctionProduct;
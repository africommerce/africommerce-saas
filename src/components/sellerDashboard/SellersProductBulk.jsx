import { Typography } from '@mui/material'
import React from 'react'
import styled from "styled-components"
import { Container,  Box, List, TextField, ListItem} from '@mui/material'



const Button = styled.button`
background-color:#2E294E;
padding:10px 20px;
border:1px solid #000;
font-size: 1rem;
font-weight:500;
border-radius:5px;
color:#fff;
cursor:pointer;
`

const ListCard = styled.div`
 margin:20px 0;
 border:1px solid rgba(0,0,0,.125);
 border-radius:6px;
 background-color:#fff;
`

export const  SellersProductBulk = () => {
  return (
<div>
<Container>
    <Typography style={{fontWeight:"700", fontSize:"1.1rem"}}>Bulk Products Upload</Typography>
  <ListCard>
    <Box p={3}>
        {/* listStyleType: 'numbered'  */}
    <List >
      <ListItem sx={{ display: 'list-item' ,  backgroundColor:'rgb(204, 229, 255)', padding:"15px"}}>1. Download the skeleton file and fill it with data.:</ListItem>
      <ListItem  sx={{ display: 'list-item',  backgroundColor:'rgb(204, 229, 255)', padding:"15px" }}>2. You can download the example file to understand how the data must be filled.:</ListItem>
      <ListItem  sx={{ display: 'list-item',  backgroundColor:'rgb(204, 229, 255)', padding:"15px" }}>3. Once you have downloaded and filled the skeleton file, upload it in the form below and submit.:</ListItem>
      <ListItem  sx={{ display: 'list-item' ,  backgroundColor:'rgb(204, 229, 255)' , padding:"15px"}}>4. After uploading products you need to edit them and set products images and choices.</ListItem>
    </List>
      <Button>Download CSV</Button>
    </Box>
  </ListCard>


 <ListCard>
        {/* listStyleType: 'numbered'  */}
  <Box p={3}>
    <List >
      <ListItem sx={{ display: 'list-item' ,  backgroundColor:'rgb(204, 229, 255)', padding:"15px"}}>1. Download the skeleton file and fill it with data.:</ListItem>
      <ListItem  sx={{ display: 'list-item',  backgroundColor:'rgb(204, 229, 255)', padding:"15px" }}>2. You can download the example file to understand how the data must be filled.:</ListItem>
    </List>
      <Box >
      <Button>Download Category</Button>
       <Button style={{marginLeft:"10px"}}>Download Brand</Button>
      </Box>
    </Box>
  </ListCard>


 <ListCard>
        {/* listStyleType: 'numbered'  */}
    <Box px={3} py={2} sx={{borderBottom:"1px solid #ccc"}}>
     <Typography style={{fontWeight:"700", fontSize:"1.1rem"}} >Upload CSV File</Typography>
    </Box>
  <Box p={3} >
      <form>
      <TextField fullWidth id="fullWidth" type="file" style={{color: 'rgba(0, 0, 0, 0)'}}/>
      </form>
       <Box mt={2} sx={{display:"flex", justifyContent:"flex-end", alignItems:"flex-end"}}>
       <Button>Upload CSV</Button>
       </Box>
    </Box>
  </ListCard>

</Container>
</div>
  )
}

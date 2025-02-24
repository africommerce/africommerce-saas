import React from 'react';
import {Card, CardContent , CardActions, Grid, Box, Container, Typography} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import styled from "styled-components";


const Button = styled.button`
background-color:#2E294E;
padding:10px 20px;
border:1px solid #000;
font-size: 1rem;
font-weight:600;
border-radius:5px;
color:#fff;
cursor:pointer;
`

function createData(img, pack, limit, price,duration) {
    return { img, pack, limit, price,duration};
  }

  const rows=[
    createData("i.ibb.co/vcRVPFK/silver.png","Silver", "100 Product Upload Limit", "$10,000", "90 Days"),
    createData("i.ibb.co/LNwJqWK/gold.png","Gold", "200 Product Upload Limit", "$20,000", "240 Days"),
    createData("i.ibb.co/hmnnYz7/platnium.png","Platinum", "500 Product Upload Limit", "$50,000","365 Days")
  ]
export const SellersPackages =()=>{
    return(
        <div>
            <Box sx={{width:"100%"}}>
            <Container>
        <Box  sx={{backgroundColor:"rgba(233, 233, 240, 1)", borderRadius:"6px", p: 12, my:8 }}>
        <Typography  sx={{ fontWeight: 'bold', fontSize:"2.5rem" }} align="center" variant="h4">
                Premium Packages for Sellers
        </Typography>
        </Box>
        <Grid container spacing={3}>
            
                {rows.map((row)=>(
                    <Grid item xs={12} sm={8} md={4}>
                    <Card sx={{maxWidth:400, p:6}} align="center"  key={row.pack} variant="outlined">
                    {/* <CardMedia component="img" width="20px" image={`https://${row.img}`} alt={row.pack} /> */}
                    <CardContent>
                        <img style={{width:"100px"}} src={`https://${row.img}`} alt={row.pack}/>
        <Typography sx={{fontWeight:"bold", my: 3 }} variant="h5" component="div">
          {row.pack}
        </Typography>
        <Typography  sx={{ my: 3 , fontWeight:"bold"}} >
         <CheckIcon sx={{fontSize:"small"}} />  {row.limit}
        </Typography>
        <Box sx={{display:"flex", alignItems:"center"}}>
        <Typography sx={{fontWeight:"bold",  marginRight:"5px"}} variant="h4">
          {row.price}
        </Typography>

        <Typography sx={{fontSize:".9rem"}}>
          {row.duration}
        </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
       
        <Button >Purchase Package </Button>
       
      </CardActions>
      </Card>
      </Grid>
                ))}
           
        </Grid>
        </Container>
        </Box>
        </div>
        )
}
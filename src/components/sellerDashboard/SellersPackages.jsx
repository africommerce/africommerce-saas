import React from 'react';
import {Card, CardContent , CardActions, Button, Grid, Box, Container, Typography} from '@mui/material'

function createData(img, pack, limit, price) {
    return { img, pack, limit, price};
  }

  const rows=[
    createData("i.ibb.co/hmnnYz7/platnium.png","Silver", "100 Product Upload Limit", "$10,000"),
    createData("i.ibb.co/hmnnYz7/platnium.png","Gold", "200 Product Upload Limit", "$20,000"),
    createData("i.ibb.co/hmnnYz7/platnium.png","Platinum", "500 Product Upload Limit", "$50,000")
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
        <Typography sx={{fontWeight:"bold"}} variant="h5" component="div">
          {row.pack}
        </Typography>
        <Typography  sx={{ mb: 1.5 }} color="text.secondary">
          {row.limit}
        </Typography>
        <Typography sx={{fontWeight:"bold"}}  variant="body2">
          {row.price}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button align="center" size="small" variant="contained">Purchase Package </Button>
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
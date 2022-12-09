import React from 'react'
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


const Container = styled.div`
  flex: 1;
`;
const buttonStyle = {
  padding: '10px',
  color: '#E62E04',
  backgroundColor: 'lightpink',
  fontWeight: 'bolder',
  border: 'none',
  '&:hover':{
    backgroundColor: '#E62E04',
    color: "white"
  }
}
function Compare() {
  return (
    <Container>
            <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 1000,
            height: 200,
          },
        }}
      >
        <Paper maxWidth="lg" elevation={6}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '20px',
            }}
          >
            <Typography variant="h6" component="h2" style={{fontWeight:"bold"}}>
              Comparison
            </Typography>
            <Button sx={buttonStyle}>Reset Compare List</Button>
          </div>
          <hr></hr>
          <div>
          <Typography variant="h6" component="h2" style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
           Your comparison list is empty
            </Typography>
          </div>
        </Paper>
      </Box>
    </Container>
  )
}

export default Compare
import React from 'react'
import { Box, Typography, Grid, Paper,} from '@mui/material';
import {
  CubeSvg,
  StarSvg,
  ListSvg,
  TrendSvg,
} from './SellerIcons';


export const Performance = () => {
    const items = [
      {
        svg: CubeSvg,
        name: 'Products',
        number: '15',
      },
      {
        svg: StarSvg,
        name: 'Rating',
        number: '5',
      },
      {
        svg: ListSvg,
        name: 'Total Orders',
        number: '10',
      },
      {
        svg: TrendSvg,
        name: 'Total Sales',
        number: '$584.900',
      },
    ];
  return (
    <Box>
      <Typography
        sx={{ color: '#1b1b28', marginBottom: '20px' }}
        component="h3"
        variant="div"
      >
        Dashboard
      </Typography>
      <Grid spacing={3} container>
        {items.map((item, i) => (
          <Grid key={i} item md={6} xs={12}>
            <Paper
              sx={{
                backgroundColor: '#2E294E',
                color: '#ffffff',
                padding: '20px',
              }}
            >
              <Grid container sx={{ padding: '20px' }}>
                <Grid item md={10} xs={10}>
                  <Typography component="p" variant="body2">
                    {item.name}
                  </Typography>
                  <Typography component="p" variant="h4">
                    {item.number}
                  </Typography>
                </Grid>
                <Grid item md={2} xs={2}>
                  <img src={item.svg} alt={item.name}></img>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


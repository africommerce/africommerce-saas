import React from 'react';
import BrandCard from '../components/BrandCard';
import { Paper, Container, Typography } from '@mui/material';

export const AllBrand = () => {
  return (
    <div>
      <Container>
        <Typography variant="h5" sx={{ fontWeight: 800, my: 3 }}>
          All Brands
        </Typography>
        <Paper fullWidth sx={{ p: 2 }}>
          <BrandCard />
        </Paper>
      </Container>
    </div>
  );
};

import React from 'react';
import { Paper, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Paper
      variant="outlined"
      square
      sx={{ textAlign: 'center', marginTop: '10px', width: '100%' }}
    >
      <Typography component="p" variant="caption" p={2}>
        &#169; v6.3.3
      </Typography>
    </Paper>
  );
};

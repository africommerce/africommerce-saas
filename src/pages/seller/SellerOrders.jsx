import React from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const SellerOrders = () => {
  const order = [
    {
      id: 1,
      code: '20220726-08275357',
      status: 'paid',
      options: 'vv',
    },
    {
      id: 2,
      code: '20220726-08040637',
      status: 'paid',
      options: 'vv',
    },
    {
      id: 3,
      code: '20220420-07493371',
      status: 'paid',
      options: 'vv',
    },
    {
      id: 4,
      code: '20220420-07435544',
      status: 'paid',
      options: 'vv',
    },
    {
      id: 5,
      code: '20220420-07253614',
      status: 'paid',
      options: 'vv',
    },
    {
      id: 6,
      code: '20220420-07224759',
      status: 'paid',
      options: 'vv',
    },
    {
      id: 7,
      code: '20220420-07194867',
      status: 'paid',
      options: 'vv',
    },
    {
      id: 8,
      code: '20220420-07073292',
      status: 'paid',
      options: 'vv',
    },
    {
      id: 9,
      code: '20220420-07073259',
      status: 'paid',
      options: 'vv',
    },
    {
      id: 10,
      code: '20220420-07073111',
      status: 'paid',
      options: 'vv',
    },
  ];
  return (
    <Box sx={{ textAlign: 'center', border: 1, mx: 2, mt: 5 }}>
      <Typography sx={{ textAlign: 'center' }}>Orders</Typography>
      <Select
        labelId="label"
        id="select"
        value="10"
        size="small"
        sx={{ mx: 1.5, pr: 10 }}
      >
        <MenuItem value="10">Filter by Payment Status</MenuItem>
        <MenuItem value="20">Paid</MenuItem>
        <MenuItem value="30">Unpaid</MenuItem>
      </Select>
      <Select
        labelId="label"
        id="select"
        value="10"
        size="small"
        sx={{ mx: 1.5, pr: 12 }}
      >
        <MenuItem value="10">Filter by Deliver Status</MenuItem>
        <MenuItem value="20">Pending</MenuItem>
        <MenuItem value="30">Confirmed</MenuItem>
        <MenuItem value="30">On Delivery</MenuItem>
        <MenuItem value="30">Delivered</MenuItem>
      </Select>
      <TextField
        id="filled-disabled"
        label="Type Order code & hit Enter"
        type="text"
        variant="outlined"
        size="small"
        sx={{ width: 300, mb: 2 }}
      />

      <Box sx={{ px: '25px', pt: 4, borderTop: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>#</Typography>
          <Typography>Order Code:</Typography>
          <Typography>Payment Status</Typography>
          <Typography>Options</Typography>
        </Box>
        {order.map(({ id, code, status, options }) => {
          return (
            <Box
              key={id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: 1,
                py: '10px',
              }}
            >
              <Typography>
                <AddIcon /> {id}
              </Typography>
              <Typography>{code}</Typography>
              <Button sx={{ backgroundColor: 'Green', color: 'white' }}>
                {status}
              </Button>
              <Typography>{options}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

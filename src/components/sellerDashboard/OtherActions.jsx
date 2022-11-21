import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { WithdrawSvg, SettingSvg, PaymentSvg, PlusSvg } from './SellerIcons';

export const OtherActions = () => {
  return (
    <Box sx={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <Paper
            sx={{
              color: '#2E294E',
              padding: '20px 50px 50px 50px',
              backgroundColor: '#E9E9F0',
              marginBottom: '10px',
              textAlign: 'center',
            }}
          >
            <Typography mb={2} component="h4" variant="p">
              Money Withdraw
            </Typography>
            <p>
              <Link to="/auth-seller/withdraw">
                <img src={WithdrawSvg} alt="withdraw_svg"></img>
              </Link>
            </p>
          </Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper
            sx={{
              color: '#2E294E',
              padding: '20px 50px 50px 50px',
              marginBottom: '10px',
              textAlign: 'center',
            }}
            elevation={0}
            variant="outlined"
          >
            <Typography mb={2} component="h4" variant="p">
              Add New Product
            </Typography>
            <p>
              <Link to="/auth-seller/products">
                <img src={PlusSvg} alt="plus_svg"></img>
              </Link>
            </p>
          </Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper
            sx={{
              color: '#2E294E',
              padding: '20px 50px 20px 50px',
              marginBottom: '10px',
              textAlign: 'center',
              backgroundColor: '#E9E9F0',
            }}
          >
            <Typography mb={2} component="h4" variant="p">
              Shop Settings
            </Typography>
            <p>
              <img src={SettingSvg} alt="shop_setting_svg"></img>
            </p>
            <p style={{ marginTop: '10px' }}>
              <Link style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    backgroundColor: '#2e294e',
                    color: '#ffffff',
                    textTransform: 'none',
                  }}
                  variant="contained"
                >
                  Go to Settings
                </Button>
              </Link>
            </p>
          </Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper
            sx={{
              color: '#2E294E',
              padding: '20px 50px 20px 50px',
              marginBottom: '10px',
              textAlign: 'center',
              backgroundColor: '#E9E9F0',
            }}
          >
            <Typography mb={2} component="h4" variant="p">
              Payment Settings
            </Typography>
            <p>
              <img src={PaymentSvg} alt="shop_setting_svg"></img>
            </p>
            <p style={{ marginTop: '10px' }}>
              <Link style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    backgroundColor: '#2e294e',
                    color: '#ffffff',
                    textTransform: 'none',
                  }}
                  variant="contained"
                >
                  Configure Now
                </Button>
              </Link>
            </p>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

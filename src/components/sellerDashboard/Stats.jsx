import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  Button,
} from '@mui/material';
import {
  badge,
  verified,
  canvas,
  CartSvg,
  CancelSvg,
  ErrandSvg,
  DeliveredSvg,
} from './SellerIcons';
export const Stats = ({ screen }) => {
  const ItemsSvg = [
    {
      svg: CartSvg,
      name: 'New Order',
      number: '15',
    },
    {
      svg: CancelSvg,
      name: 'Cancelled',
      number: '0',
    },
    {
      svg: ErrandSvg,
      name: 'On Delivery',
      number: '6',
    },
    {
      svg: DeliveredSvg,
      name: 'Delivered',
      number: '22',
    },
  ];

  const categories = [
    {
      cat: 'Men Clothing & Fashion',
      number: '9',
    },
    {
      cat: 'Computer & Accessories',
      number: '1',
    },
    {
      cat: ' Sports & outdoor',
      number: '2',
    },
    {
      cat: 'Software',
      number: '3',
    },
  ];
  return (
    <div style={{ marginTop: '20px', fontWeight: '600' }}>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <Paper
            sx={{
              color: '#2E294E',
              padding: '10px',
              backgroundColor: '#E9E9F0',
              marginBottom: '20px',
            }}
          >
            <Typography component="h4" variant="p">
              Sales Stat
            </Typography>
            <p>
              <img
                style={{ marginTop: '10px' }}
                src={canvas}
                alt="canvas"
              ></img>
            </p>
          </Paper>
          <Paper
            sx={{
              color: '#2E294E',
              padding: '20px',
              backgroundColor: '#E9E9F0',
              marginBottom: '10px',
            }}
          >
            <Typography component="h4" variant="p">
              Sold Amount
            </Typography>
            <Typography display="block" variant="caption">
              Your sold amount (current month)
            </Typography>
            <Typography
              sx={{ paddingTop: '20px', paddingBottom: '20px' }}
              component="h1"
              variant=""
            >
              $0.000
            </Typography>
            <Typography dispaly="block" variant="caption">
              Last Month: $0.000
            </Typography>
          </Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper
            sx={{
              padding: '20px 20px 30px 20px',
            }}
            variant="outlined"
            elevation={0}
          >
            <Typography
              sx={{ paddingBottom: '20px' }}
              component="h4"
              variant="p"
            >
              Category wise product count
            </Typography>
            <hr style={{ borderBlockColor: '#e2e5ec', opacity: 0.2 }}></hr>
            <List
              sx={
                screen >= 1000
                  ? { paddingTop: '20px', paddingBottom: '180px' }
                  : { paddingTop: '20px', paddingBottom: '5px' }
              }
            >
              {categories.map((category) => (
                <ListItem
                  key={category.cat}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '15px',
                  }}
                  disablePadding
                >
                  <Typography
                    display="block"
                    sx={{ fontSize: '0.8125rem' }}
                    variant="body2"
                  >
                    {category.cat}
                  </Typography>
                  <Typography display="inline" variant="body2">
                    {category.number}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper
            sx={{
              padding: '30px 20px 30px 20px',
            }}
            elevation={0}
            variant="outlined"
          >
            <Typography
              sx={{ paddingBottom: '20px' }}
              component="h4"
              variant="p"
              lineHeight={0}
            >
              Orders
            </Typography>
            <Typography lineHeight={0} display="block" variant="caption">
              This Month
            </Typography>
            <Box
              sx={
                screen >= 1000
                  ? { marginTop: '20px', paddingBottom: '54px' }
                  : { marginTop: '20px', paddingBottom: '5px' }
              }
            >
              {ItemsSvg.map((item) => (
                <Grid key={item.name} sx={{ marginBottom: '10px' }} container>
                  <Grid item md={4} xs={4}>
                    <img src={item.svg} alt={item.name}></img>
                  </Grid>
                  <Grid item md={8} xs={8}>
                    <Typography sx={{ fontWeight: '600' }} variant="subtitle2">
                      {item.name}
                    </Typography>
                    <Typography color="#a9a3cc" component="p" variant="h4">
                      {item.number}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item md={3} xs={12}>
          <Paper
            sx={{
              padding: '20px 20px 15px 20px',
            }}
            variant="outlined"
            elevation={0}
          >
            <Typography
              sx={{ paddingBottom: '20px' }}
              component="h4"
              variant="p"
            >
              Purchased Package
            </Typography>
            <Box>
              <Grid container spacing={1}>
                <Grid item md={2} xs={2}>
                  <img src={badge} width={15} alt="badge"></img>
                </Grid>
                <Grid item md={9} xs={10}>
                  <Typography sx={{ fontWeight: '600' }} variant="subtitle2">
                    Current Package
                  </Typography>
                  <Typography
                    sx={{ paddingBottom: '20px' }}
                    component="h4"
                    variant="p"
                  >
                    Platinum
                  </Typography>
                  <Typography variant="caption" component="p">
                    Product Upload Limit: 500 times
                  </Typography>
                  <Typography variant="caption" component="p">
                    Package Expires at: 2023-03-02
                  </Typography>
                  <div style={{ paddingTop: '10px' }}>
                    <Button
                      sx={{ backgroundColor: '#E9E9F0', textTransform: 'none' }}
                      disableElevation
                      variant="contained"
                      color="inherit"
                    >
                      Upgrade Package
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          <Paper
            elevation={0}
            variant="outlined"
            sx={{
              marginTop: '10px',
              padding: '39px 2px 39px 4px',
              textAlign: 'center',
            }}
          >
            <img src={verified} alt="verified_image"></img>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

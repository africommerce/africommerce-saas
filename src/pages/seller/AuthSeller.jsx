import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Footer } from '../../components/sellerDashboard/Footer';
import { Header } from '../../components/sellerDashboard/Header';
import SideDrawer from '../../components/sellerDashboard/Drawer';
import { SellerDashboard } from './SellerDashboard';

export const AuthSeller = (props) => {
  const location = useLocation()
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen((state) => !state);
  };
  const drawerwidth = 240;
  useEffect(() => {
    if (window.screen.width <= 768) {
      setOpen(false);
    }
  }, []);

  const handleDrawerClose = () => {
    setOpen((state) => false);
  };
  return (
    <Box style={{backgroundColor:"#f2f3f8"}}>
      <Grid spacing={1} container>
        <Grid item md={2} xs={12}>
          <SideDrawer
            theme={theme}
            open={open}
            drawerwidth={drawerwidth}
            handleDrawerClose={handleDrawerClose}
          />
        </Grid>
        <Grid item md={10} xs={12}>
          <Header
            theme={theme}
            open={open}
            drawerwidth={drawerwidth}
            handleDrawerOpen={handleDrawerOpen}
          />
         {location.pathname === "/auth-seller" ?  <SellerDashboard/> : <Outlet />}
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

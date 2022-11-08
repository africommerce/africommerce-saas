import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Footer } from '../../components/sellerDashboard/Footer';
import { Header } from '../../components/sellerDashboard/Header';
import SideDrawer from '../../components/sellerDashboard/Drawer';

export const AuthSeller = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen((state) => !state);
  };
  const drawerwidth = 240;
  useEffect(() => {
    if (window.screen.width <= 768) {
      setOpen((state) => false);
    }
  }, []);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Grid container>
      <Grid item md={2} xs={12}>
        <SideDrawer
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
        <Outlet />
        <Footer />
      </Grid>
    </Grid>
  );
};

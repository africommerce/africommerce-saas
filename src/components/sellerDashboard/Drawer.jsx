import React from 'react';
import { MenuAccordion } from './Accordion';
import { TextField, Drawer, Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StoreImg from '../../assests/authseller.png';

function SideDrawer({ open, drawerwidth, handleDrawerClose, theme }) {
  return (
    <Box>
      <Drawer
        sx={{
          width: drawerwidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerwidth,
            alignItems: 'center',
            boxSizing: 'border-box',
            backgroundColor: '#E9E9F0',
            paddingTop: '10px',
            fontSize: '13px',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>

        <img
          src={StoreImg}
          sx={{ textAlign: 'center' }}
          alt="store-name"
          width={29}
        ></img>
        <div
          style={{
            marginTop: '15px',
            marginBottom: '25px',
            textAlign: 'center',
          }}
        >
          <div>
            <h3 style={{ lineHeight: 0.5 }}>Filon Asset Store</h3>
            <small>seller@example.com</small>
          </div>
        </div>
        <Box>
          <TextField
            size="small"
            placeholder="Search in menu"
            variant="outlined"
            style={{ marginBottom: '20px', border: 0 }}
          />
          <MenuAccordion style={{ color: 'inherit' }} />
        </Box>
      </Drawer>
    </Box>
  );
}

export default SideDrawer;

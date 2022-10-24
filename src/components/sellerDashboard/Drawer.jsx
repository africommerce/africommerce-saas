import React from 'react';
import { MenuAccordion } from './Accordion';
import { TextField, Drawer, Box} from '@mui/material';
import StoreImg from '../../assests/authseller.png';

function SideDrawer({ open, drawerwidth }) {
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
            paddingTop: '20px',
            fontSize: '15px',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
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
          <MenuAccordion style={{color:"inherit"}} />
        </Box>
      </Drawer>
    </Box>
  );
}

export default SideDrawer;

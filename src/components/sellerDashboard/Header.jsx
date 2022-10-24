import React from 'react';
import { AppBar } from './AppBar';
import { Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  IoMdGlobe,
  BiPrinter,
} from './SellerIcons';
import { BellMenu, LanguageMenu, SellerMenu } from './MenuItem';


export const Header = ({ open, theme, drawerwidth, handleDrawerOpen }) => {
  return (
    <AppBar
      position="fixed"
      open={open}
      theme={theme}
      drawerwidth={drawerwidth}
      color="grey"
    >
      <Toolbar className="flexcontainer">
        <div className="flexitem" data-toggle="mobile-nav">
          <button
            onClick={handleDrawerOpen}
            aria-label="menu-toggler"
            className="hamburger-sign"
            style={{ marginRight: '5px' }}
          >
            <span></span>
          </button>

          <IconButton
            style={{
              fontSize: '14px',
              backgroundColor: '#E9E9F0',
              marginLeft: '10px',
            }}
          >
            <Link to="/" target="_blank”">
              <IoMdGlobe style={{ color: '#2a3242', padding: '5px' }} />
            </Link>
          </IconButton>

          <IconButton
            style={{
              fontSize: '14px',
              backgroundColor: '#E9E9F0',
              marginLeft: '10px',
            }}
          >
            <Link target="_blank" to="/auth-seller/pos">
              <BiPrinter style={{ color: '#2a3242', padding: '5px' }} />
            </Link>
          </IconButton>
        </div>
        <div className="flexitem">
          <BellMenu  />
          <LanguageMenu />
          <SellerMenu/>
        </div>
      </Toolbar>
    </AppBar>
  );
};

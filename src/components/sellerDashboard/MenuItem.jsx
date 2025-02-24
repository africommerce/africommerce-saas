import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Badge } from '@mui/material';
import {
  AiOutlineBell,
  en,
  fr,
  bd,
  sa,
  sellerImg,
  CgProfile,
  AiOutlineLogout,
} from './SellerIcons';

export const BellMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="bell-menu-btn"
        aria-controls={open ? 'bell-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Badge color="secondary" variant="dot">
          <AiOutlineBell style={{ color: '#2a3242' }} />
        </Badge>
      </IconButton>
      <Menu
        id="bell-menu"
        aria-labelledby="bell-menu-btn"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Notificatiions</MenuItem>
      </Menu>
    </>
  );
};
export const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <span
        id="seller-btn"
        aria-controls={open ? 'seller-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ marginLeft: '30px' }}
      >
        <img alt="english" src={en}></img>
      </span>
      <Menu
        id="seller-menu"
        aria-labelledby="seller-btn"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{ fontSize: '14px' }}
      >
        <MenuItem onClick={handleClose}>
          <p style={{ fontSize: '12px' }}>
            <img
              alt="english"
              style={{ marginRight: '10px', fontSize: '14px' }}
              src={en}
            ></img>
            English
          </p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <p style={{ fontSize: '12px' }}>
            <img alt="bangla" style={{ marginRight: '10px' }} src={bd}></img>
            Bangla
          </p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <p style={{ fontSize: '12px' }}>
            <img alt="arabic" style={{ marginRight: '10px' }} src={sa}></img>
            Arabic
          </p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <p style={{ fontSize: '12px' }}>
            <img alt="french" style={{ marginRight: '10px' }} src={fr}></img>
            French
          </p>
        </MenuItem>
      </Menu>
    </>
  );
};

export const SellerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <span>
        <span
          id="seller-btn"
          aria-controls={open ? 'seller-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={{ marginLeft: '30px', cursor: 'pointer', fontSize: '14px' }}
        >
          <img
            alt="sellerimage"
            style={{
              width: '100%',
              maxWidth: '40px',
              borderRadius: '50%',
              marginRight: '10px',
            }}
            src={sellerImg}
          ></img>
        <span style={{ fontSize: '13px', marginTop:"-100px" }}>
          Filon Asset Store
          <small style={{ fontSize: '10px', marginLeft: '5px' }}>seller</small>
        </span>
        </span>
      </span>
      <Menu
        id="seller-menu"
        aria-labelledby="seller-btn"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{ fontSize: '14px' }}
      >
        <MenuItem onClick={handleClose}>
          <p style={{ fontSize: '12px' }}>
            <IconButton style={{ fontSize: '12px' }}>
              <CgProfile />
            </IconButton>
            <span>Profile</span>
          </p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <p style={{ fontSize: '12px' }}>
            <IconButton style={{ fontSize: '12px' }}>
              <AiOutlineLogout />
            </IconButton>
            <span>Logout</span>
          </p>
        </MenuItem>
      </Menu>
    </>
  );
};

import { MoreVert } from '@mui/icons-material';
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import classes from './AllDeliveryBoy.module.css';
export const AllDeliveryBoy = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.container}>
      <div className={classes.header_wrapper}>
        <span className={classes.header_title}>All Delivery Boys</span>
        <span className={classes.header_btn}>
          <button>Add New Delivery Boys</button>
        </span>
      </div>
      <div className={classes.body_wrapper}>
        <div className={classes.body_table}>
          <span className={classes.body_title}>Delivery Boys</span>
          <span className={classes.body_input}>
            <input type="text" placeholder="Type email or name & Enter" />
          </span>
        </div>
        <div className={classes.table_wrapper}>
          <table className={classes.table_body}>
            <tr key="1" className={classes.table_head}>
              <th className={classes.heaad_no}>#</th>
              <th className={classes.head_name}>Name</th>
              <th className={classes.head_email}>Email Address</th>
              <th className={classes.head_phone}>Phone</th>
              <th className={classes.head_earning}>Earning</th>
              <th className={classes.head_collection}>Collection</th>
              <th className={classes.head_option}>Options</th>
            </tr>
            {[
              {
                id: 1,
                name: 'Kelvin Moses',
                email: 'moseskelvin@gmail.com',
                phone: '+23424533424',
                earning: 453,
                collection: 5343,
              },
              {
                id: 2,
                name: 'Debby David',
                email: 'user@test.com',
                phone: '+23424533424',
                earning: 453,
                collection: 5343,
              },
              {
                id: 3,
                name: 'Ibrahim',
                email: 'ibrahim@gmail.com',
                phone: '+23424533424',
                earning: 453,
                collection: 5343,
              },
              {
                id: 4,
                name: 'Ufoma Aliyu',
                email: 'test@gmail.com',
                phone: '+23424533424',
                earning: 453,
                collection: 5343,
              },
            ].map((user) => (
              <tr key={user.id} className={classes.body_data}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.earning}</td>
                <td>{user.collection}</td>
                <td>
                  <span className={classes.table_options_wrapper}>
                    <span className={classes.table_options}>
                      <MoreVert
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      />
                    </span>
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      <MenuItem onClick={handleClose}>Edit</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Ban this delivery
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        Go to Collection
                      </MenuItem>
                      <MenuItem onClick={handleClose}>Go to Payment</MenuItem>
                    </Menu>
                    <span
                      className={`${classes.table_options_menu} ${classes.hide_options_menu}`}
                    >
                      Hell
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

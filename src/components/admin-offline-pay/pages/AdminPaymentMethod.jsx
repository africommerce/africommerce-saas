import { MoreVert, SentimentVeryDissatisfied } from '@mui/icons-material';
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import classes from './AdminPaymentMethod.module.css';
import { Divider } from '@mui/material';
export const AdminPaymentMethod = () => {
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
        <span className={classes.header_title}>All Payment Method</span>
        <span className={classes.header_btn}>
          <button>Add New Payment Method</button>
        </span>
      </div>
      <div className={classes.body_wrapper}>
        <div className={classes.body_table}>
          <span className={classes.body_title}>Manual Payment Method</span>
        </div>
        <Divider />
        <div className={classes.table_wrapper}>
          <table className={classes.table_body}>
            <tr key="1" className={classes.table_head}>
              <th className={classes.head_id}>#</th>
              <th className={classes.head_heading}>Heading</th>
              <th className={classes.head_logo}>Logo</th>
              <th className={classes.head_options}>Options</th>
            </tr>
            {[0].map((user) => (
              <tr key={user.id} className={classes.body_data}>
                <span
                  style={{
                    margin: '0 auto',
                    display: 'flex',
                    marginTop: '1rem',
                    flexDirection: 'column',
                  }}
                >
                  <SentimentVeryDissatisfied
                    style={{ margin: '0 auto', fontSize: '70px' }}
                  />
                  <span>Nothing found</span>
                </span>

                {/* <td className={classes.body_id}>1</td>
                <td className={classes.body_heading}>1</td>
                <td className={classes.body_logo}>1</td>
                <td className={classes.body_options}>1</td> */}
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

import { Divider, Switch } from '@mui/material';
import React from 'react';
import classes from './AdminCommision.module.css';
export const AdminCommision = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.activation}>
          <span className={classes.activation_title}>
            Seller Commission Activatation
          </span>
          <Divider />
          <span className={classes.switch}>
            <Switch />
          </span>
        </div>
        <div className={classes.commision}>
          <span className={classes.commission_title}>Seller Commission</span>
          <Divider />
          <span className={classes.commision_body}>
            <span className={classes.commision_detail}>Seller Commission</span>
            <span className={classes.commission_input}>
              <input type="text" placeholder="25" /> <span>%</span>
            </span>
          </span>
          <span className={classes.commision_btn}>
            <button>Save</button>
          </span>
        </div>
        <div className={classes.withdraw}>
          <span className={classes.withdraw_title}>Withdraw Seller Amount</span>
          <Divider />
          <span className={classes.withdraw_body}>
            <span className={classes.withdraw_detail}>Seller Commission</span>

            <span className={classes.withdraw_input}>
              <input type="text" placeholder="25" /> <span>%</span>
            </span>
          </span>
          <span className={classes.withdraw_btn}>
            <button>Save</button>
          </span>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.activation}>
          <span className={classes.activation_title}>
            Category Based Commission
          </span>
          <Divider />
          <span className={classes.switch}>
            <Switch />
          </span>
        </div>
        <div className={classes.note}>
          {' '}
          <span className={classes.note_head}>Note</span>
          <Divider />
          <span className={classes.note_body}>
            <span className={classes.note_item}>
              1. 25% of seller product price will be deducted from seller
              earnings.
            </span>
            <span className={classes.note_item}>
              2. If Category Based Commission is enbaled, Set seller commission
              percentage 0..
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

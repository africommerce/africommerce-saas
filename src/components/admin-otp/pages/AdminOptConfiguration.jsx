import * as React from 'react';
import Switch from '@mui/material/Switch';
import classes from './AdminOptConfiguration.module.css';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const AdminOptConfiguration = () => {

  return (
    <>
      <div className={classes.activeOTP}>Activate OTP</div>{' '}
      <div className={classes.containerOTP}>
        <div className={classes.card}>
          <p>Nexmo OTP</p>
          <hr></hr>
          <div className={classes.switch}>
            <Switch {...label} defaultChecked />
          </div>
        </div>
        <div className={classes.card}>
          <p>Twilio OTP</p>
          <hr></hr>
          <div className={classes.switch}>
            <Switch {...label} defaultChecked />
          </div>
        </div>
        <div className={classes.card}>
          <p>SSL Wireless OTP</p>
          <hr></hr>
          <div className={classes.switch}>
            <Switch {...label} defaultChecked />
          </div>
        </div>
        <div className={classes.card}>
          <p>Fast2SMS OTP</p>
          <hr></hr>
          <div className={classes.switch}>
            <Switch {...label} defaultChecked />
          </div>
        </div>
        <div className={classes.card}>
          <p>MIMO OTP</p>
          <hr></hr>
          <div className={classes.switch}>
            <Switch {...label} defaultChecked />
          </div>
        </div>
        <div className={classes.card}>
          <p>MIMSMS</p>
          <hr></hr>
          <div className={classes.switch}>
            <Switch {...label} defaultChecked />
          </div>
        </div>
        <div className={classes.card}>
          <p>MSEGAT SMS</p>
          <hr></hr>
          <div className={classes.switch}>
            <Switch {...label} defaultChecked />
          </div>
        </div>
      </div>
    </>
  );

};

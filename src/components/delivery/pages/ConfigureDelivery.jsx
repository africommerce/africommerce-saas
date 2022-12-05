import { Divider, Switch } from '@mui/material';
import React from 'react';
import classes from './ConfigureDelivery.module.css';
export const ConfigureDelivery = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top_wrapper}>
        <div className={classes.payment}>
          <div className={classes.payment_content}>
            <div className={classes.payment_title}>Payment Configuration</div>
            <Divider />
            <div className={classes.payment_wrapper}>
              <span className={classes.payment_info}>
                <span className={classes.payment_text}>Monthly Salary</span>
                <span className={classes.payment_item}>
                  <Switch />
                </span>
              </span>
            </div>
            <div className={classes.payment_wrapper}>
              <span className={classes.payment_info}>
                <span className={classes.payment_text}>Salary Amount</span>
                <span className={classes.payment_item}>
                  <input type="text" placeholder="0" />
                </span>
              </span>
            </div>
            <div className={classes.payment_wrapper}>
              <span className={classes.payment_info}>
                <span className={classes.payment_text}>
                  Per Order Commission
                </span>
                <span className={classes.payment_item}>
                  <Switch />
                </span>
              </span>
            </div>
            <div className={classes.payement_btn}>
              <button>Update</button>
            </div>
          </div>
        </div>
        <div className={classes.notification}>
          <div className={classes.content}>
            <div className={classes.content_title}>
              Notification Configuration
            </div>
            <Divider />
            <div className={classes.content_items}>
              <span>
                <span>Send Mail</span>
                <span>
                  <Switch />
                </span>
              </span>
              <span>
                <span>Send OTP</span>
                <span>
                  <Switch defaultChecked={true} />
                </span>
              </span>
            </div>
            <div className={classes.botton_btn}>
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottom_wrapper}>
        <div className={classes.pickup}>
          <div className={classes.pickup_content}>
            <div className={classes.pickup_title}>
              Pickup Location For Delivery Boy
            </div>
            <Divider />
            <div>
              <span>
                <span>Longitude</span>
                <span>
                  <input className={classes.bottom_input} type="text" />
                </span>
              </span>
              <span>
                <span>Latitude</span>
                <span>
                  <input className={classes.bottom_input} type="text" />
                </span>
              </span>
            </div>
            <div className={classes.botton_btn}>
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

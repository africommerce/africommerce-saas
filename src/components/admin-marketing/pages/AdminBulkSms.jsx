import { Divider } from '@mui/material';
import React from 'react';
import classes from './AdminBulkSms.module.css';

export const AdminBulkSms = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.top}>Send Bulk SMS</div>
        <Divider />
        <form className={classes.form}>
          <span className={classes.form_group}>
            <span className={classes.form_label}>Mobile Users</span>
            <span className={classes.form_field}>
              <select>
                <option value="" key="" selected>
                  Nothing
                </option>
              </select>
            </span>
          </span>
          <span className={classes.form_group_textarea}>
            <span className={classes.form_label}>SMS content</span>
            <span className={classes.form_field}>
              <textarea className={classes.textarea} />
            </span>
          </span>
          <span className={classes.form_group}>
            <span className={classes.form_label}>Template ID</span>
            <span className={classes.form_field}>
              <input
                type="text"
                placeholder="Template ID"
                className={classes.input}
              />
            </span>
          </span>

          <span className={classes.form_group_btn}>
            <button>Send</button>
          </span>
        </form>
      </div>
    </div>
  );
};

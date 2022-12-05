import { Divider } from '@mui/material';
import classes from './AdminPointConfiguration.module.css';

export const AdminPointConfiguration = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <span className={classes.header}>Convert Point To Wallet</span>
        <Divider />
        <span className={classes.body}>
          <form className={classes.body_form}>
            <span className={classes.form_group}>
              <span className={classes.form_label}>Set Point For $1.000</span>
              <span className={classes.form_input}>
                <input type="number" placeholder="5" />
              </span>
              <span className={classes.form_point}>Points</span>
            </span>
            <span className={classes.form_group_btn}>
              <button>Save</button>
            </span>
            <span className={classes.form_group_footer}>
              Note: You need to activate wallet option first before using club
              point addon.
            </span>
          </form>
        </span>
      </div>
    </div>
  );
};

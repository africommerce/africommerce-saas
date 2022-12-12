import { Divider } from '@mui/material';
import classes from './Configuration.module.css';

export const Configuration = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.left_title}>Set Refund Time</div>
        <Divider />
        <div className={classes.left__form_container}>
          <form className={classes.form}>
            <span className={classes.form_group}>
              <span className={classes.form_group_title}>
                Set Time for sending Refund Request
              </span>
              <span className={classes.form_input}>
                <input
                  type="text"
                  placeholder="10"
                  className={classes.form_group_val}
                />{' '}
                <input
                  type="text"
                  placeholder="days"
                  disabled
                  className={classes.form_group_dispplay}
                />
              </span>
            </span>
            <span className={classes.form_group}>
              <button>Save</button>
            </span>
          </form>
        </div>
      </div>
      <div className={classes.left}>
        <div className={classes.left_title}>Set Refund Time</div>
        <Divider />
        <div className={classes.right__form_container}>
          <form className={classes.form}>
            <span className={classes.form_group}>
              <span className={classes.form_group_title}>
                Set Time for sending Refund Request
              </span>
              <span className={classes.form_input}>
                <input
                  type="text"
                  placeholder="10"
                  className={classes.form_group_val}
                />{' '}
                <input
                  type="text"
                  placeholder="days"
                  disabled
                  className={classes.form_group_dispplay}
                />
              </span>
            </span>
            <span className={classes.form_group}>
              <button>Save</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

import { Divider } from '@mui/material';
import classes from './AdminNewsletter.module.css';
export const AdminNewsletter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.top}>Send Newsletter</div>
        <Divider />
        <form className={classes.form}>
          <span className={classes.form_group}>
            <span className={classes.form_label}>Emails (Users)</span>
            <span className={classes.form_field}>
              <select>
                <option value="" key="" selected>
                  Nothing
                </option>
              </select>
            </span>
          </span>
          <span className={classes.form_group}>
            <span className={classes.form_label}>Emails (Subscribers)</span>
            <span className={classes.form_field}>
              <select>
                <option value="" key="" selected>
                  Nothing
                </option>
              </select>
            </span>
          </span>
          <span className={classes.form_group}>
            <span className={classes.form_label}>Newsletter subject</span>
            <span className={classes.form_field}>
              <input type="text" className={classes.input} />
            </span>
          </span>
          <span className={classes.form_group}>
            <span className={classes.form_label}>Newsletter content</span>
            <span className={classes.form_field}>
              <textarea cols="30" rows="10" className={classes.textarea} />
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

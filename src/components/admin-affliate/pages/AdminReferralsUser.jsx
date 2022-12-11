import { HistoryOutlined, VisibilityOutlined } from '@mui/icons-material';

import { Divider, Switch } from '@mui/material';
import classes from './AdminReferralsUser.module.css';
export const AdminReferralsUser = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.top_head_title}>Refferal Users</span>
        </div>
        <Divider />
        <div className={classes.body_tabel_wrapper}>
          <table className={classes.body_table}>
            <tr key="" className={classes.body_head_row}>
              <th className={classes.body_head_id}>#</th>
              <th className={classes.body_head_name}>Name</th>
              <th className={classes.body_head_phone}>Phone</th>
              <th className={classes.body_head_email}>Email Address</th>

              <th className={classes.body_head_reffered}>Reffered By</th>
            </tr>
            {[1, 2, 3].map((item) => (
              <tr key="" className={classes.body_body_row}>
                <td className={classes.body_body_id}>{item}</td>
                <td className={classes.body_body_name}>Paul K. Jensen</td>
                <td className={classes.body_body_phone}>208-295-8053</td>
                <td className={classes.body_body_email}>Paul K. Jensen</td>
                <td className={classes.body_body_reffered}>
                  Paul K. Jensen (customer@example.com)
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

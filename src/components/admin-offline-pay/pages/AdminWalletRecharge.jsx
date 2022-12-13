import { Divider, Switch } from '@mui/material';
import classes from './AdminWalletRecharge.module.css';
export const AdminWalletRecharge = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.top_head_title}>
            Offline Wallet Recharge Requests
          </span>
        </div>
        <Divider />
        <div className={classes.body_tabel_wrapper}>
          <table className={classes.body_table}>
            <tr key="" className={classes.body_head_row}>
              <th className={classes.body_head_id}>#</th>
              <th className={classes.body_head_name}>Name</th>
              <th className={classes.body_head_amount}>Amount</th>
              <th className={classes.body_head_method}>Method</th>
              <th className={classes.body_head_txtn}>TXTN ID</th>
              <th className={classes.body_head_photo}>Photo</th>
              <th className={classes.body_head_approval}>Approval</th>
              <th className={classes.body_head_date}>Date</th>
            </tr>
            {[1].map((item) => (
              <tr key="" className={classes.body_body_row}>
                <td className={classes.body_body_id}>1</td>
                <td className={classes.body_body_name}>Paul K. Jensen</td>
                <td className={classes.body_body_amount}>5000</td>
                <td className={classes.body_body_method}></td>
                <td className={classes.body_body_txtn}>23</td>
                <td className={classes.body_body_photo}></td>
                <td className={classes.body_body_approval}>
                  <Switch />
                </td>

                <td className={classes.body_body_date}>2021-02-23 10:08:43</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

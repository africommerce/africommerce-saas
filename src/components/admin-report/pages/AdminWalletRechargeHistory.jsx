import { Divider, Pagination } from '@mui/material';
import classes from './AdminWalletRechargeHistory.module.css';

export const AdminWalletRechargeHistory = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head_wrapper}>Wallet Transaction Report</div>
      <div className={classes.body_wrapper}>
        <div className={classes.body_head}>
          {' '}
          <span className={classes.body_sort}>Wallet Transaction :</span>
          <span className={classes.body_right}>
            <span className={classes.body_select}>
              <select>
                <option value="" key="" selected>
                  Women Clothing & Fashion
                </option>
                <option value="" key="">
                  Women Clothing & Fashion
                </option>
                <option value="" key="">
                  Women Clothing & Fashion
                </option>
              </select>
            </span>
            <span className={classes.body_date}>
              <span>
                From <input type="date" />
              </span>
              <span>
                To <input type="date" />
              </span>
            </span>
            <span className={classes.body_head_btn}>
              <button>Filter</button>
            </span>
          </span>
        </div>
        <Divider />
        <div className={classes.table}>
          <table>
            <div>
              <tr key="" className={classes.table_head_row}>
                <th className={classes.table_head_id}>#</th>
                <th className={classes.table_head_customer}>Customer</th>
                <th className={classes.table_head_date}>Date</th>
                <th className={classes.table_head_amount}>Amount</th>
                <th className={classes.table_head_method}> Payment method</th>
                <th className={classes.table_head_approval}> Approval</th>
              </tr>
              {[1, 2, 3, 4].map((item) => (
                <tr key="" className={classes.table_body_row}>
                  <td className={classes.table_body_id}>{item}</td>
                  <td className={classes.table_body_customer}>
                    20220726-08275357
                  </td>
                  <td className={classes.table_body_date}> 27.5</td>
                  <td className={classes.table_body_amount}>85.8</td>
                  <td className={classes.table_body_method}>
                    2022-07-25 22:28:19
                  </td>
                  <td className={classes.table_body_approval}>N/A</td>
                </tr>
              ))}
            </div>

            <div className={classes.pagination}>
              <Pagination count={10} color="primary" />
            </div>
          </table>
        </div>
      </div>
    </div>
  );
};

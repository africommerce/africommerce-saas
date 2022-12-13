import { Divider, Pagination } from '@mui/material';
import classes from './AdminCommissionHistory.module.css';
export const AdminCommissionHistory = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head_wrapper}>Commission History report</div>
      <div className={classes.body_wrapper}>
        <div className={classes.body_head}>
          {' '}
          <span className={classes.body_sort}>Commission History :</span>
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
                <th className={classes.table_head_code}>Order Code:</th>
                <th className={classes.table_head_commission}>
                  Admin Commission
                </th>
                <th className={classes.table_head_earning}>Selling Earning</th>
                <th className={classes.table_head_created}> Created At</th>
              </tr>
              {[1, 2, 3, 4].map((item) => (
                <tr key="" className={classes.table_body_row}>
                  <td className={classes.table_body_id}>{item}</td>
                  <td className={classes.table_body_code}>20220726-08275357</td>
                  <td className={classes.table_body_commission}> 27.5</td>
                  <td className={classes.table_body_earning}>85.8</td>
                  <td className={classes.table_body_created}>
                    2022-07-25 22:28:19
                  </td>
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

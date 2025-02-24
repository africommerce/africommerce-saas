import { Divider } from '@mui/material';
import React from 'react';
import classes from './AdminPayout.module.css';

export const AdminPayout = () => {
  // const [menuDrop, setMenuDrop] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.top_wrapper}>All Sellers</div>
      <div className={classes.top_title}>
        <div className={classes.body_wrapper}>
          <span className={classes.body_title}>Seller Payments</span>
        </div>
        <Divider />
        <div className={classes.table_container}>
          <table className={classes.table_wrapper}>
            <tr key="" className={classes.head_row}>
              <th className={classes.head_id}>#</th>
              <th className={classes.head_date}>Date</th>
              <th className={classes.head_seller}>Seller</th>
              <th className={classes.head_amount}>Amount</th>
              <th className={classes.head_detail}>Payment Details Info</th>
            </tr>

            <tr key="" className={classes.body_row}>
              <td className={classes.body_id}>1</td>
              <td className={classes.body_date}>2022-04-27 22:12:07</td>
              <td className={classes.body_seller}>
                Filon Asset Store (Filon Asset Store)
              </td>
              <td className={classes.body_amount}>${(28).toFixed(3)}</td>
              <td className={classes.body_detail}>Cash</td>
            </tr>

            <tr key="" className={classes.body_row}>
              <td className={classes.body_id}>2</td>
              <td className={classes.body_date}>2022-04-27 22:12:07</td>
              <td className={classes.body_seller}>
                Filon Asset Store (Filon Asset Store)
              </td>
              <td className={classes.body_amount}>${(28).toFixed(3)}</td>
              <td className={classes.body_detail}>Cash</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

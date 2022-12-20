import { Pagination } from '@mui/material';
import classes from './AdminProductWishlist.module.css';

export const AdminProductWishlist = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head_wrapper}>Product Wish Report</div>
      <div className={classes.body_wrapper}>
        <div className={classes.body_head}>
          {' '}
          <span className={classes.body_sort}>Sort by Category :</span>
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
          <span className={classes.body_head_btn}>
            <button>Filter</button>
          </span>
        </div>
        <div className={classes.table}>
          <table>
            <div>
              <tr key="" className={classes.table_head_row}>
                <th className={classes.table_head_name}>Product Name</th>
                <th className={classes.table_head_stock}>Stock</th>
              </tr>
              {[1].map((item) => (
                <tr key="" className={classes.table_body_row}>
                  <td className={classes.table_body_name}>
                    Corsair K60 RGB Pro Mechanical Gaming Keyboard - CHERRY
                    Mechanical Keyswitches - Durable AluminumFrame -
                    Customizable Per-Key RGB Backlighting, Black
                  </td>
                  <td className={classes.table_body_stock}>199</td>
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

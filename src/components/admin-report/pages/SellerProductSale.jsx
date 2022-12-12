import { Pagination } from '@mui/material';
import classes from './SellerProductSale.module.css';

export const SellerProductSale = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head_wrapper}>Seller Based Selling Report</div>
      <div className={classes.body_wrapper}>
        <div className={classes.body_head}>
          {' '}
          <span className={classes.body_sort}>
            Sort by verificarion status :
          </span>
          <span className={classes.body_select}>
            <select>
              <option value="" key="" selected>
                Approved
              </option>
              <option value="" key="">
                Non Approved
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
                <th className={classes.table_head_seller}>Seller Name</th>
                <th className={classes.table_head_shop}>Shop Name</th>
                <th className={classes.table_head_num}>
                  Number of Product Sale
                </th>
                <th className={classes.table_head_order}>Order Amount</th>
              </tr>
              {[1].map((item) => (
                <tr key="" className={classes.table_body_row}>
                  <td className={classes.table_body_seller}>LOUIS VUITTON</td>
                  <td className={classes.table_body_shop}>---</td>
                  <td className={classes.table_body_num}>2</td>
                  <td className={classes.table_body_order}>$556.000</td>
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

import { Pagination } from '@mui/material';
import classes from './InHouseReport.module.css';
export const InHouseReport = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head_wrapper}>Inhouse Product sale report</div>
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
                <th className={classes.table_head_id}>#</th>
                <th className={classes.table_head_name}>Product Name</th>
                <th className={classes.table_head_num}>Num. of Sale</th>
              </tr>
              {[1].map((item) => (
                <tr key="" className={classes.table_body_row}>
                  <td className={classes.table_body_id}>1</td>
                  <td className={classes.table_body_name}>
                    Fossil Men's Grant Stainless Steel Quartz Chronograph Watch
                  </td>
                  <td className={classes.table_body_num}>2</td>
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

import { Pagination } from '@mui/material';
import classes from './AdminUserSearches.module.css';

export const AdminUserSearches = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body_wrapper}>
        <div className={classes.body_head}>
          {' '}
          <span className={classes.body_sort}>User Search Report</span>
        </div>
        <div className={classes.table}>
          <table>
            <div>
              <tr key="" className={classes.table_head_row}>
                <th className={classes.table_head_id}>#</th>
                <th className={classes.table_head_by}>Search By</th>
                <th className={classes.table_head_num}>Number of Search</th>
              </tr>
              {[1, 2, 3].map((item) => (
                <tr key={item} className={classes.table_body_row}>
                  <td className={classes.table_body_id}>{item}</td>
                  <td className={classes.table_body_by}>
                    Baby Balance Bikes Toys for 1 Year Old Boys Girls 10-24
                    Months
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

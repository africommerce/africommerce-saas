import classes from './AdminUserPoints.module.css';
import image from '../../../assests/sellers/addidas.jpg';
import { Link } from 'react-router-dom';
import { EditOutlined, VisibilityOutlined } from '@mui/icons-material';
import { Divider, Pagination } from '@mui/material';

export const AdminUserPoints = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <table className={classes.table}>
          <tr key="1" className={classes.table_head_row}>
            <th className={classes.table_head_row_id}>#</th>
            <th className={classes.table_head_row_code}> Order Code:</th>
            <th className={classes.table_head_row_customer}>Customer Name</th>
            <th className={classes.table_head_row_point}> Points</th>
            <th className={classes.table_head_row_status}>Convert Status</th>
            <th className={classes.table_head_row_earn}>Earned At</th>
            <th className={classes.table_head_row_options}>Option</th>
          </tr>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Link id={item} to="">
              <tr key={item} className={classes.table_body_row}>
                <td className={classes.table_body_row_id}>{item}</td>
                <td className={classes.table_body_row_code}>
                  <span className={classes.name_title}>20220912-10085522</span>
                </td>
                <td className={classes.table_body_row_customer}>
                  Paul K. Jensen
                </td>
                <td className={classes.table_body_row_point}>0</td>
                <td className={classes.table_body_row_status}>
                  <span>Pending</span>
                </td>
                <td className={classes.table_head_row_earn}>
                  2022-09-12 00:09:25
                </td>
                <td className={classes.table_body_row_options}>
                  <span className={classes.table_body_row_edit}>
                    <VisibilityOutlined style={{ fontSize: '12px' }} />
                  </span>
                </td>
              </tr>
              <Divider />
            </Link>
          ))}
          <span className={classes.pagination}>
            <Pagination count={10} color="secondary" />
          </span>
        </table>
      </div>
    </div>
  );
};

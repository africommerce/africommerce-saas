import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import banner from '../../../assests/admin/banner.png';
import { Divider, Switch } from '@mui/material';
import classes from './AdminCoupons.module.css';
export const AdminCoupons = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <span className={classes.top_title}>All Coupons</span>
        <span className={classes.top_btn}>
          <button>Add New Coupons</button>
        </span>
      </div>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.top_head_title}>Coupon Information</span>
        </div>
        <Divider />
        <div className={classes.body_tabel_wrapper}>
          <table className={classes.body_table}>
            <tr key="" className={classes.body_head_row}>
              <th className={classes.body_head_id}>#</th>
              <th className={classes.body_head_code}>Code</th>
              <th className={classes.body_head_type}>Type</th>
              <th className={classes.body_head_start}>Start Date</th>
              <th className={classes.body_head_end}>End Date</th>
              <th className={classes.body_head_options}>Options</th>
            </tr>
            {[1, 2, 3].map((item) => (
              <tr key="" className={classes.body_body_row}>
                <td className={classes.body_body_id}>{item}</td>
                <td className={classes.body_body_code}>Flash Deal</td>
                <td className={classes.body_body_type}>Cart Base</td>
                <td className={classes.body_body_start}>27-04-2022</td>
                <td className={classes.body_body_end}>27-04-2025 </td>

                <td className={classes.body_body_options}>
                  <span className={classes.options_edit}>
                    <EditOutlined />
                  </span>
                  <span className={classes.options_delete}>
                    <DeleteOutline />
                  </span>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

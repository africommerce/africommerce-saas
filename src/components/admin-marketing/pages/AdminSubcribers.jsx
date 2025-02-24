import { DeleteOutline } from '@mui/icons-material';
import banner from '../../../assests/admin/banner.png';
import { Divider } from '@mui/material';
import classes from './AdminSubcribers.module.css';
export const AdminSubcribers = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.top_head_title}>All Subscribers</span>
          <span className={classes.body_head_input}>
            <input type="text" placeholder="Type & Enter" />
          </span>
        </div>
        <Divider />
        <div className={classes.body_tabel_wrapper}>
          <table className={classes.body_table}>
            <tr key="" className={classes.body_head_row}>
              <th className={classes.body_head_id}>#</th>
              <th className={classes.body_head_email}>Email</th>
              <th className={classes.body_head_date}>Date </th>

              <th className={classes.body_head_options}>Options</th>
            </tr>
            {[1, 2, 3].map((item) => (
              <tr key="" className={classes.body_body_row}>
                <td className={classes.body_body_id}>{item}</td>
                <td className={classes.body_body_email}>user5@example.com</td>
                <td className={classes.body_body_date}>27-04-2022</td>
                <td className={classes.body_body_options}>
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

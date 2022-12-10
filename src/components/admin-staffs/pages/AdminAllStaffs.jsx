import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import classes from './AdminAllStaffs.module.css';

export const AdminAllStaffs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <span className={classes.top_title}> All staffs</span>
        <span className={classes.top_btn}>
          <button>Add New Post</button>
        </span>
      </div>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.body_head_title}>All Staffs</span>
          <span className={classes.body_head_input}>
            <input type="text" placeholder="Type & Enter" />
          </span>
        </div>
        <Divider />
        <div className={classes.body_tabel_wrapper}>
          <table className={classes.body_table}>
            <tr key="" className={classes.body_head_row}>
              <th className={classes.body_head_id}>#</th>
              <th className={classes.body_head_name}>Name</th>
              <th className={classes.body_head_email}>Email</th>
              <th className={classes.body_head_phone}>Phone</th>
              <th className={classes.body_head_role}>Role</th>
              <th className={classes.body_head_options}>Options</th>
            </tr>
            {[1, 2, 3].map((item) => (
              <tr key="" className={classes.body_body_row}>
                <td className={classes.body_body_id}>{item}</td>
                <td className={classes.body_body_name}>George M. Winters</td>
                <td className={classes.body_body_email}> staff@example.com</td>
                <td className={classes.body_body_phone}>662-817-4374</td>
                <td className={classes.body_body_role}>Product manager</td>
                <td className={classes.body_body_options}>
                  <span className={classes.options_edit}>
                    <EditOutlined style={{ fontSize: '15px' }} />
                  </span>
                  <span className={classes.options_delete}>
                    <DeleteOutline style={{ fontSize: '15px' }} />
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

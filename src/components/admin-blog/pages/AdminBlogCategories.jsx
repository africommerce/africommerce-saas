import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import classes from './AdminBlogCategories.module.css';
export const AdminBlogCategories = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <span className={classes.top_title}> All Blog Categories</span>
        <span className={classes.top_btn}>
          <button>All Blog Categories</button>
        </span>
      </div>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.body_head_title}>Blog Categories</span>
          <span className={classes.body_head_input}>
            <input type="text" placeholder="Type name & Enter" />
          </span>
        </div>
        <Divider />
        <div className={classes.body_tabel_wrapper}>
          <table className={classes.body_table}>
            <tr key="" className={classes.body_head_row}>
              <th className={classes.body_head_id}>#</th>
              <th className={classes.body_head_name}>Name</th>
              <th className={classes.body_head_options}>Options</th>
            </tr>
            {[1, 2, 3].map((item) => (
              <tr key="" className={classes.body_body_row}>
                <td className={classes.body_body_id}>{item}</td>
                <td className={classes.body_body_name}>Family</td>
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

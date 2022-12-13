import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { Divider, Switch } from '@mui/material';
import classes from './AdminAllBlog.module.css';
export const AdminAllBlog = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <span className={classes.top_title}> All Post</span>
        <span className={classes.top_btn}>
          <button>Add New Post</button>
        </span>
      </div>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.body_head_title}>All Blog post</span>
          <span className={classes.body_head_input}>
            <input type="text" placeholder="Type & Enter" />
          </span>
        </div>
        <Divider />
        <div className={classes.body_tabel_wrapper}>
          <table className={classes.body_table}>
            <tr key="" className={classes.body_head_row}>
              <th className={classes.body_head_id}>#</th>
              <th className={classes.body_head_title}>Title</th>
              <th className={classes.body_head_category}>Category</th>
              <th className={classes.body_head_desc}>Short Description</th>
              <th className={classes.body_head_status}>Status</th>
              <th className={classes.body_head_options}>Options</th>
            </tr>
            {[1, 2, 3].map((item) => (
              <tr key="" className={classes.body_body_row}>
                <td className={classes.body_body_id}>{item}</td>
                <td className={classes.body_body_title}>
                  T-Shirts Every Man Needs in His Wardrobe
                </td>
                <td className={classes.body_body_category}>Man Fashion</td>
                <td className={classes.body_body_desc}>
                  Fashion is for men just as much as it is for women. And
                  whoever says that men can get away with just about any shirt
                  with jeans – ah,they couldn’t be more wrong!
                </td>
                <td className={classes.body_body_status}>
                  <Switch />
                </td>
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

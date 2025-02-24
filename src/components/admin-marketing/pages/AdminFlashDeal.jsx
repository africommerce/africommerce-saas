import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import banner from '../../../assests/admin/banner.png';
import { Divider, Switch } from '@mui/material';
import classes from './AdminFlashDeal.module.css';
export const AdminFlashDeal = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <span className={classes.top_title}> All Flash Deals</span>
        <span className={classes.top_btn}>
          <button>Add New Flash Deal</button>
        </span>
      </div>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.top_head_title}>Flash deals</span>
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
              <th className={classes.body_head_banner}>banner</th>
              <th className={classes.body_head_start}>Start Date</th>
              <th className={classes.body_head_end}>End Date</th>
              <th className={classes.body_head_status}>Status</th>
              <th className={classes.body_head_featured}>Featured</th>
              <th className={classes.body_head_link}>Page Link</th>
              <th className={classes.body_head_options}>Options</th>
            </tr>
            {[1, 2, 3].map((item) => (
              <tr key="" className={classes.body_body_row}>
                <td className={classes.body_body_id}>{item}</td>
                <td className={classes.body_body_title}>Flash Deal</td>
                <td className={classes.body_body_banner}>
                  <img src={banner} className={classes.banner} alt="" />
                </td>
                <td className={classes.body_body_start}>27-04-2022 00:00:00</td>
                <td className={classes.body_body_end}>27-04-2025 23:59:59</td>
                <td className={classes.body_body_status}>
                  <Switch />
                </td>
                <td className={classes.body_body_featured}>
                  <Switch />
                </td>
                <td className={classes.body_body_link}>
                  <span>http://localhost:3000/admin/marketing/flash</span>
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

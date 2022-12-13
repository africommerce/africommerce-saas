import { DeleteOutline, VisibilityOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import classes from './AdminConversation.module.css';

export const AdminConversation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.top_head_title}>Conversations</span>
          <span className={classes.body_head_input}>
            <input type="text" placeholder="Type & Enter" />
          </span>
        </div>
        <Divider />
        <div className={classes.body_tabel_wrapper}>
          <table className={classes.body_table}>
            <tr key="" className={classes.body_head_row}>
              <th className={classes.body_head_id}>#</th>
              <th className={classes.body_head_date}>Date</th>
              <th className={classes.body_head_title}>Title</th>
              <th className={classes.body_head_sender}>Sender</th>
              <th className={classes.body_head_receiver}>Receiver</th>

              <th className={classes.body_head_options}>Options</th>
            </tr>
            {[1, 2, 3].map((item) => (
              <tr key="" className={classes.body_body_row}>
                <td className={classes.body_body_id}>{item}</td>
                <td className={classes.body_body_date}>2022-07-25 22:33:11</td>
                <td className={classes.body_body_title}>
                  HP Stream 9VK97UA#ABA 14 inches HD(1366x768) Display
                </td>
                <td className={classes.body_body_sender}>Paul K. Jensen</td>
                <td className={classes.body_body_receiver}>
                  Filon Asset Store
                </td>

                <td className={classes.body_body_options}>
                  <span className={classes.options_view}>
                    <VisibilityOutlined />
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

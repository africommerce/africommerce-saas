import { VisibilityOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import classes from './AdminTicket.module.css';
export const AdminTicket = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.top_head_title}>Support Desks</span>
          <span className={classes.body_head_input}>
            <input type="text" placeholder="Type & Enter" />
          </span>
        </div>
        <Divider />
        <div className={classes.body_tabel_wrapper}>
          <table className={classes.body_table}>
            <tr key="" className={classes.body_head_row}>
              <th className={classes.body_head_id}>Ticket ID</th>
              <th className={classes.body_head_send_date}>Sending Date</th>
              <th className={classes.body_head_subject}>Subject</th>
              <th className={classes.body_head_user}>User</th>
              <th className={classes.body_head_status}>Status</th>
              <th className={classes.body_head_last_reply}>Last reply</th>

              <th className={classes.body_head_options}>Options</th>
            </tr>
            {[1, 2, 3].map((item) => (
              <tr key="" className={classes.body_body_row}>
                <td className={classes.body_body_id}>#1000002513</td>
                <td className={classes.body_body_send_date}>
                  2022-04-28 03:07:13
                </td>
                <td className={classes.body_body_subject}>
                  A doloribus aut quae
                </td>
                <td className={classes.body_body_user}>Paul K. Jensen</td>
                <td className={classes.body_body_status}>
                  <span className={classes.status}>Open</span>
                </td>
                <td className={classes.body_body_last_reply}>
                  2022-04-27 21:07:13
                </td>

                <td className={classes.body_body_options}>
                  <span className={classes.options_view}>
                    <VisibilityOutlined />
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

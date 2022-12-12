import { DeleteOutline, VisibilityOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import classes from './AdminQueries.module.css';
export const AdminQueries = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.body_head}>
          <span className={classes.top_head_title}>Product Queries</span>
          <span className={classes.body_head_input}>
            <input type="text" placeholder="Type & Enter" />
          </span>
        </div>
        <Divider />
        <div className={classes.body_tabel_wrapper}>
          <table className={classes.body_table}>
            <tr key="" className={classes.body_head_row}>
              <th className={classes.body_head_id}>#</th>
              <th className={classes.body_head_username}>User Name</th>
              <th className={classes.body_head_product}>Product Name</th>
              <th className={classes.body_head_question}>Question</th>
              <th className={classes.body_head_reply}>Reply</th>
              <th className={classes.body_head_status}>status</th>

              <th className={classes.body_head_options}>Options</th>
            </tr>
            {[1, 2, 3].map((item) => (
              <tr key="" className={classes.body_body_row}>
                <td className={classes.body_body_id}>{item}</td>
                <td className={classes.body_body_username}>Arnulfo T. Lucky</td>
                <td className={classes.body_body_product}>
                  Womens Summer Plus Size Lace Neckline Cold Shoulder Short
                  Sleeve
                </td>
                <td className={classes.body_body_question}>
                  Im 5'4, 112lb, 32C, 26 waist. What size please?
                </td>
                <td className={classes.body_body_reply}>
                  I suggest a small. I had to size down as bodice was a bit
                  generous.
                </td>
                <td className={classes.body_body_status}>
                  <span className={classes.reply}>Replied</span>
                </td>

                <td className={classes.body_body_options}>
                  <span className={classes.options_view}>
                    <VisibilityOutlined fontSize="12px" />
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

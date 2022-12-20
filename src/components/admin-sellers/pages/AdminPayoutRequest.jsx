import {
  HistoryOutlined,
  Payments,
  VisibilityOutlined,
} from '@mui/icons-material';
import { Divider } from '@mui/material';
import { useState } from 'react';
import classes from './AdminPayoutRequest.module.css';
export const AdminPayoutRequest = () => {
  const [setMenuDrop] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.top_wrapper}>All Sellers</div>
      <div className={classes.top_title}>
        <div className={classes.body_wrapper}>
          <span className={classes.body_title}>Seller Withdraw Request</span>
        </div>
        <Divider />
        <div className={classes.table_container}>
          <table className={classes.table_wrapper}>
            <tr key="" className={classes.head_row}>
              <th className={classes.head_id}>#</th>
              <th className={classes.head_date}>Date</th>
              <th className={classes.head_seller}>Seller</th>
              <th className={classes.head_amount_topay}>Total Amount to Pay</th>
              <th className={classes.head_request_amount}>Requested Amount</th>
              <th className={classes.head_message}>Message</th>
              <th className={classes.head_status}>Status</th>
              <th className={classes.head_option}>Options</th>
            </tr>
            <tr key="" className={classes.body_row}>
              <td className={classes.body_id}>1</td>
              <td className={classes.body_date}> 2022-04-27 22:12:20</td>
              <td className={classes.body_seller}>
                Filon Asset Store (Filon Asset Store)
              </td>
              <td className={classes.body_amount_topay}>
                ${(139.5).toFixed(3)}
              </td>
              <td className={classes.body_request_amount}>
                ${(139.5).toFixed(3)}
              </td>
              <td className={classes.body_message}>
                "But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone who loves
                or pursues or desires to obtain pain of itself, because it is
                pain, but because occasionally circumstances occur in which toil
                and pain can procure him some great pleasure. To take a trivial
                example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has
                any right to find fault with a man who chooses to enjoy a
                pleasure that has no annoying consequences, or one who avoids a
                pain that produces no resultant pleasure?"
              </td>
              <td className={classes.body_status}>
                <span>pending</span>
              </td>

              <td
                className={classes.body_option}
                onClick={() => setMenuDrop((prev) => !prev)}
              >
                <span className={classes.option_menu}>
                  <Payments />
                </span>
                <span className={classes.option_menu}>
                  <VisibilityOutlined />
                </span>
                <span className={classes.option_menu}>
                  <HistoryOutlined />
                </span>
              </td>
            </tr>
            <tr key="" className={classes.body_row}>
              <td className={classes.body_id}>2</td>
              <td className={classes.body_date}> 2022-04-27 22:12:20</td>
              <td className={classes.body_seller}>
                Filon Asset Store (Filon Asset Store)
              </td>
              <td className={classes.body_amount_topay}>
                ${(139.5).toFixed(3)}
              </td>
              <td className={classes.body_request_amount}>
                ${(139.5).toFixed(3)}
              </td>
              <td className={classes.body_message}>
                "But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone who loves
                or pursues or desires to obtain pain of itself, because it is
                pain, but because occasionally circumstances occur in which toil
                and pain can procure him some great pleasure. To take a trivial
                example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has
                any right to find fault with a man who chooses to enjoy a
                pleasure that has no annoying consequences, or one who avoids a
                pain that produces no resultant pleasure?"
              </td>
              <td className={classes.body_status}>
                <span>pending</span>
              </td>

              <td
                className={classes.body_option}
                onClick={() => setMenuDrop((prev) => !prev)}
              >
                <span className={classes.option_menu}>
                  <Payments />
                </span>
                <span className={classes.option_menu}>
                  <VisibilityOutlined />
                </span>
                <span className={classes.option_menu}>
                  <HistoryOutlined />
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

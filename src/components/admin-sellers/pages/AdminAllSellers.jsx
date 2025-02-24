import { KeyboardArrowDown, MoreVertOutlined } from '@mui/icons-material';
import { Divider, Switch } from '@mui/material';
import React, { useState } from 'react';
import classes from './AdminAllSellers.module.css';

export const AdminAllSellers = () => {
  const [setMenuDrop] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.top_wrapper}>All Sellers</div>
      <div className={classes.top_title}>
        <div className={classes.body_wrapper}>
          <span className={classes.body_title}>Sellers</span>
          <span className={classes.body_search}>
            <span className={classes.bulk_action}>
              Bulk Action <KeyboardArrowDown />
            </span>
            <span className={classes.body_select}>
              <select>
                <option value="" key="" selected={true}>
                  Filter by Approval
                </option>
                <option value="" key="">
                  Non-Approved
                </option>
                <option value="" key="">
                  Approved
                </option>
              </select>
            </span>
            <span className={classes.search_input}>
              <input type="text" placeholder="Typename or email & Enter" />
            </span>
          </span>
        </div>
        <Divider />
        <div className={classes.table_container}>
          <table className={classes.table_wrapper}>
            <tr key="" className={classes.head_row}>
              <th className={classes.head_check}>
                <input type="checkbox" />
              </th>
              <th className={classes.head_name}>Name</th>
              <th className={classes.head_phone}>Phone</th>
              <th className={classes.head_email}>Email Address</th>
              <th className={classes.head_verify}>Verification Info</th>
              <th className={classes.head_approval}>Approval</th>
              <th className={classes.head_products}>Num. of Products</th>
              <th className={classes.head_due}>Due to seller</th>
              <th className={classes.head_option}>Options</th>
            </tr>
            <tr key="" className={classes.body_row}>
              <td className={classes.body_check}>
                <input type="checkbox" />
              </td>
              <td className={classes.body_name}>LOUIS VUITTON</td>
              <td className={classes.body_phone}>734-604-6681</td>
              <td className={classes.body_email}>seller11@example.com</td>
              <td className={classes.body_verify}></td>
              <td className={classes.body_approval}>
                <Switch />
              </td>
              <td className={classes.body_products}>4</td>
              <td className={classes.body_due}>${(0).toFixed(3)}</td>
              <td
                className={classes.body_option}
                onClick={() => setMenuDrop((prev) => !prev)}
              >
                <span className={classes.option_menu}>
                  <MoreVertOutlined fontSize="14px" />
                </span>
                <span
                  className={
                    // !menuDrop
                    `${classes.option_menu_drop} ${classes.hide_option}`
                    // : `${classes.option_menu_drop}`
                  }
                >
                  {[
                    'Profie',
                    'Login as this Sell..',
                    'Go to Payment',
                    'Edit',
                    'Ban this Seller',
                    'Delete',
                  ].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

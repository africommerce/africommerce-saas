import {
  BlockOutlined,
  DeleteOutline,
  EditOutlined,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { Divider } from '@mui/material';
import { useState } from 'react';
import classes from './AdminCustomers.module.css';
export const AdminCustomers = () => {
  const [deleteBulk, setDeleteBulk] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.container_head}>All Customers</div>
      <div className={classes.container_body}>
        <div className={classes.top_wrapper}>
          <span>Customers</span>
          <span className={classes.top_input}>
            <span className={classes.bulk}>
              <span
                onClick={() => setDeleteBulk((prev) => !prev)}
                className={classes.bulk_wrapper}
              >
                <span>Bulk Action </span>{' '}
                <span className={classes.top_icon}>
                  <KeyboardArrowDown fontSize="small" />
                </span>
              </span>

              <span
                className={
                  !deleteBulk
                    ? `${classes.bulk_delete} ${classes.bulk_delete_hide}`
                    : `${classes.bulk_delete} `
                }
              >
                Delete Selections
              </span>
            </span>
            <span>
              <input type="text" placeholder="Type email or name & Enter" />
            </span>
          </span>
        </div>
        {/* <Divider /> */}
        <div className={classes.table_container}>
          <table className={classes.table}>
            <tr key="" className={classes.table_head_row}>
              <th className={classes.table_head_input}>
                <input type="checkbox" />
              </th>
              <th className={classes.table_head_name}>Name</th>
              <th className={classes.table_head_email}>Email Address</th>
              <th className={classes.table_head_phone}>Phone</th>
              <th className={classes.table_head_packages}>Packages</th>
              <th className={classes.table_head_ballance}>Wallet Ballance</th>
              <th className={classes.table_head_options}>Options</th>
            </tr>
            <tr key="">
              <Divider />
            </tr>
            <tr key="" className={classes.table_body_row}>
              <td className={classes.table_body_input}>
                <input type="checkbox" />
              </td>
              <td className={classes.table_body_name}>Name</td>
              <td className={classes.table_body_email}>Email Address</td>
              <td className={classes.table_body_phone}>Phone</td>
              <td className={classes.table_body_packages}>Packages</td>
              <td className={classes.table_body_ballance}>Wallet Ballance</td>
              <td className={classes.table_body_options}>
                <span className={classes.edit_icon}>
                  <EditOutlined />
                </span>
                <span className={classes.ban_icon}>
                  <BlockOutlined />
                </span>
                <span className={classes.delete_icon}>
                  <DeleteOutline />
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

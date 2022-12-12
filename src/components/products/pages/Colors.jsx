import { DeleteOutlineOutlined, EditOutlined } from '@mui/icons-material';
import { Divider, Pagination, Switch } from '@mui/material';
import React from 'react';

import classes from './Colors.module.css';
export const Colors = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header_wrapper}>Colors</div>
      <div className={classes.body_wrapper}>
        <div className={classes.body_table}>
          <span className={classes.table_title}>
            <span>Colors</span>
            <span className={classes.table_search}>
              <input type="text" placeholder="Type color name & Enter" />
            </span>
          </span>

          <Divider />
          <span className={classes.table}>
            <table>
              <tr key="">
                {' '}
                <th className={classes.table_id}>#</th>
                <th className={classes.table_name}>Name</th>
                <th className={classes.table_options}>Options</th>
              </tr>
              {[
                { id: 1, name: 'BBQ' },
                { id: 2, name: 'BBQ' },
                { id: 3, name: 'BBQ' },
                { id: 4, name: 'BBQ' },
                { id: 5, name: 'BBQ' },
                { id: 6, name: 'BBQ' },
                { id: 7, name: 'BBQ' },
                { id: 8, name: 'BBQ' },
              ].map((data) => (
                <tr key={data.id}>
                  <td className={classes.table_id}>{data.id}</td>
                  <td className={classes.table_name}>{data.name}</td>
                  <td className={classes.table_options}>
                    <span>
                      <EditOutlined />
                    </span>
                    <span>
                      <DeleteOutlineOutlined />
                    </span>
                  </td>
                </tr>
              ))}
            </table>
          </span>
          <Pagination
            style={{ marginTop: '1rem', margin: '0 auto' }}
            count={10}
            color="primary"
          />
        </div>
        <div className={classes.right_container}>
          <div className={classes.body__add_new}>
            <div className={classes.add_title}>Add New Color</div>
            <Divider />
            <div className={classes.add_form_wrapper}>
              <form className={classes.add_form}>
                <span className={classes.form_group}>
                  <label>Name</label>
                  <input type="text" placeholder="Name" />
                </span>
                <span className={classes.form_group}>
                  <label>Color Code</label>
                  <input type="text" placeholder="Color Code" />
                </span>
                <span className={classes.submit_btn}>
                  <button>Save</button>
                </span>
              </form>
            </div>
          </div>
          <div className={classes.body__add_new}>
            <div className={classes.add_title}>Color filter activation</div>
            <Divider />
            <div className={classes.add_form_wrapper}>
              <span className={classes.form_group}>
                <span className={classes.switch}>
                  <Switch />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

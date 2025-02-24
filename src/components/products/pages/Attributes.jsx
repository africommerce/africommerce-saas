import {
  DeleteOutlineOutlined,
  EditOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import { Divider, Pagination } from '@mui/material';
import React from 'react';
import classes from './Attributes.module.css';
export const Attributes = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header_wrapper}>Attributes</div>
      <div className={classes.body_wrapper}>
        <div className={classes.body_table}>
          <span className={classes.table_title}>Attributes</span>
          <Divider />
          <span className={classes.table}>
            <table>
              <tr key="">
                {' '}
                <th>#</th>
                <th>Name</th>
                <th>Values</th>
                <th>Options</th>
              </tr>
              {[
                { id: 1, name: 'BBQ', values: ['B!@ ', 'Bell sleeves'] },
                { id: 2, name: 'BBQ', values: ['B!@ ', 'Bell sleeves'] },
                { id: 3, name: 'BBQ', values: ['B!@ ', 'Bell sleeves'] },
                { id: 4, name: 'BBQ', values: ['B!@ ', 'Bell sleeves'] },
                { id: 5, name: 'BBQ', values: ['B!@ ', 'Bell sleeves'] },
                { id: 6, name: 'BBQ', values: ['B!@ ', 'Bell sleeves'] },
                { id: 7, name: 'BBQ', values: ['B!@ ', 'Bell sleeves'] },
                { id: 8, name: 'BBQ', values: ['B!@ ', 'Bell sleeves'] },
              ].map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>
                    {data.values.map((val) => (
                      <span className={classes.values} key={val}>
                        {val}
                      </span>
                    ))}
                  </td>
                  <td>
                    <span>
                      <SettingsOutlined />
                    </span>
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
            <div className={classes.add_title}>Add New Attribute</div>
            <Divider />
            <div className={classes.add_form_wrapper}>
              <form className={classes.add_form}>
                <span className={classes.form_group}>
                  <label>Name</label>
                  <input type="text" />
                </span>
                <span className={classes.submit_btn}>
                  <button>Save</button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

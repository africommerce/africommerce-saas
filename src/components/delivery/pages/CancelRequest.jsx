import {
  SentimentVeryDissatisfied,
  VisibilityOff,
  VisibilityOutlined,
} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CancelRequest.module.css';
export const CancelRequest = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head_container}>All Cancel Request</div>
      <div className={classes.body}>
        <div className={classes.body_title}>Cancel Requests</div>
        <div className={classes.table_container}>
          <table className={classes.table_wrapper}>
            <tr key="1" className={classes.head_row}>
              <th className={classes.no}>#</th>
              <th className={classes.delivery_boy}>code</th>
              <th className={classes.amount}>Request By</th>
              <th className={classes.at}>Requested At</th>
              <th className={classes.at}>Options</th>
            </tr>
            {[
              {
                id: 1,
                code: 34232323,
                requested: 'Kelvin Moses',
                at: '2021-09-05 07:04:17',
              },
              {
                id: 2,
                code: 34232323,
                requested: 'Ibrahim ',
                at: '2021-09-05 07:04:17',
              },
              {
                id: 3,
                code: 34232323,
                requested: 'Debby ',
                at: '2021-09-05 07:04:17',
              },
            ].map((item) => (
              <tr key={item.id} className={classes.data_row}>
                <td className={classes.no}>{item.id}</td>
                <td className={classes.delivery_boy}>{item.code}</td>
                <td className={classes.amount}>{item.requested}</td>
                <td className={classes.at}>{item.at}</td>
                <td className={classes.at}>
                  <Link to={``}>
                    <span>
                      {' '}
                      <VisibilityOutlined />
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

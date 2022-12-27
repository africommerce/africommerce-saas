import React from 'react';
import classes from '../../../styles/affiliate.module.css';
import Box from './Box';

const DataBox = ({ state, headers }) => {
  return (
    <div className={classes.PaymentContent} style={{ borderRadius: '10px' }}>
      <div className={classes.PaymentHistoryBox}>
        <div
          className={[classes.PaymentHistoryBoxHead, classes.StatsHead].join(
            ' '
          )}
        >
          Affiliate Withdrawal History
        </div>
      </div>
      <div style={{ padding: '0px 20px' }}>
        <Box state={state} headers={headers} />
      </div>
    </div>
  );
};

export default DataBox;

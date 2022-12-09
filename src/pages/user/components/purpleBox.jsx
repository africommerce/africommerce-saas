import React from 'react';

import classes from '../../../styles/affiliate.module.css';

const purpleBox = ({ symbol, value, caption }) => {
  return (
    <div className={[classes.SystemBox, classes.SystemBoxSpecial].join(' ')}>
      <div>{symbol}</div>
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{value}</div>
      <div style={{ fontSize: '13px', fontWeight: '500', opacity: '0.5' }}>
        {caption}
      </div>
    </div>
  );
};

export default purpleBox;

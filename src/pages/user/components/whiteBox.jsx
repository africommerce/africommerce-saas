import React from 'react';
import classes from '../../../styles/affiliate.module.css';

const WhiteBox = ({ caption, icon, click }) => {
  return (
    <div
      className={[classes.SystemBox, classes.SystemBoxWhite].join(' ')}
      onClick={click}
    >
      <div>{icon} Icon</div>
      <div>{caption}</div>
    </div>
  );
};

export default WhiteBox;

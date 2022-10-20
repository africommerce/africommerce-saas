import React from 'react';
import classes from '../../styles/Sellers.module.css';

const SellersHead = () => {
  return (
    <div className={classes.Header}>
      <h2 className={classes.Head}>All Sellers</h2>
      <p className={classes.Header__Caption}>
        Home
        <span className={classes.Header__Caption_Special}>/"All sellers"</span>
      </p>
    </div>
  );
};

export default SellersHead;

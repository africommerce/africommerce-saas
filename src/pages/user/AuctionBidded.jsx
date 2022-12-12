import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from '../../styles/affiliate.module.css';

export const AuctionBidded = () => {
  return (
    <div className={classes.Main}>
      <Outlet />
    </div>
  );
};

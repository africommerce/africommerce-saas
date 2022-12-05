import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from '../../styles/affiliate.module.css';

export const AffliatePartner = () => {
  return (
    <div className={classes.Main}>
      <Outlet />
    </div>
  );
};

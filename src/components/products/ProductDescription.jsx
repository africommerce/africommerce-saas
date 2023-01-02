import classes from '../../styles/ProductDescription.module.css';
import React from 'react';
import AsideDescription from './AsideDescription';
import MainDescription from './MainDescription';
const ProductDescription = () => {
  return (
    <div className={classes.Description}>
      <aside className={classes.Aside}>
        <AsideDescription />
      </aside>
      <main className={classes.Main}>
        <MainDescription />
      </main>
    </div>
  );
};

export default ProductDescription;

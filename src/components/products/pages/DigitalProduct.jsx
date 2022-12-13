import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DigitalProductAccodoin from '../DigitalProductAccodoin';
import DigitalSearch from '../DigitalSearch';

import classes from './DigitalProduct.module.css';

export const DigitalProduct = () => {
  const [setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((data) => {
        return setProduct(data);
      });
  }, [setProduct]);
  return (
    <div className={classes.container}>
      <div className={classes.product_header}>
        <span className={classes.title}>All Product</span>
        <span>
          {' '}
          <Link to="">
            <button className={classes.button}>Add New Digital Product</button>
          </Link>
        </span>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <span>Digital Products</span>
          <span>
            <DigitalSearch />
          </span>
        </div>
        <div className={classes.body}>
          {' '}
          <DigitalProductAccodoin />
        </div>
      </div>
    </div>
  );
};

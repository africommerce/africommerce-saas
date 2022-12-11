import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductTable from '../ProductTable';
import classes from './InHouseProduct.module.css';
export const InHouseProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setProduct(data);
      });
  }, [setProduct]);
  return (
    <div className={classes.container}>
      <div className={classes.product_header}>
        <span className={classes.title}>All InHouse Product</span>
        <span>
          {' '}
          <Link to="">
            <button className={classes.button}>Add New Product</button>
          </Link>
        </span>
      </div>
      <div>
        <ProductTable data={product} />
      </div>
    </div>
  );
};

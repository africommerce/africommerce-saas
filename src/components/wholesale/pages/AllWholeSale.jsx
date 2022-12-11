import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WholeSaleProductTable from '../WholeSaleProductTable';

import classes from './AllWholeSale.module.css';

export const AllWholeSale = () => {
  const [product, setProduct] = useState([]);
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
        <span className={classes.title}>Whole Sale All Product</span>
        <span>
          {' '}
          <Link to="">
            <button className={classes.button}>Add New Product</button>
          </Link>
        </span>
      </div>
      <div>
        <WholeSaleProductTable data={product} />
      </div>
    </div>
  );
};

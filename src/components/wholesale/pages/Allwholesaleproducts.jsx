import { useEffect, useState } from 'react';
import AllWholeSaleProductsTable from '../AllWholeSaleProductsTable';

import classes from './Allwholesaleproducts.module.css';

export const AllWholeSaleProducts = () => {
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
        <span className={classes.title}>All wholesale products</span>
        {/* <span>
          {' '}
          <Link to="">
            <button className={classes.button}>
              Add New wholesale Product
            </button>
          </Link>
        </span> */}
      </div>
      <div>
        <AllWholeSaleProductsTable data={product} />
      </div>
    </div>
  );
};

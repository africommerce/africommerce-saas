import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import classes from '../../styles/ProductDescription.module.css';
import React from 'react';

const Product = ({ product }) => {
  return (
    <Link className={classes.Product} to={'/product/' + product.id}>
      <div className={classes.ProductImage}>
        <img src={product.image} alt="product img" />
      </div>
      <div className={classes.ProductContent}>
        <div className={classes.ProductPrices}>
          <span className={classes.FakePrice}>
            ${(product.price + 10).toFixed(2)}
          </span>
          <span className={classes.RealPrice}>${product.price}.00</span>
        </div>
        <div className={classes.Ratings}>
          <AiFillStar className={classes.Star} />
          <AiFillStar className={classes.Star} />
          <AiFillStar className={classes.Star} />
          <AiFillStar className={classes.Star} />
          <AiFillStar className={classes.Star} />
        </div>
        <div className={classes.ProductName}>
          {product.description.length > 38
            ? product.description.slice(0, 38)
            : product.description}
          ...
        </div>
        <div className={classes.ProductPoint}>
          <span className={classes.ProductCap}>Club point</span>
          <span className={classes.Point}>{product.rating.count}</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;

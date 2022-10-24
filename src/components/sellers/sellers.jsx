import React from 'react';
import classes from '../../styles/Sellers.module.css';
import { Link } from 'react-router-dom';

const Sellers = (props) => {
  return (
    <div className={classes.BigBox}>
      <div className={classes.SellersContainer}>
        {props.Sellers.map((seller, i) => {
          return (
            <div className={classes.SellerBox} key={seller.id}>
              <div className={classes.SellerBox__Left}>
                <img src={seller.img} alt="" className={classes.SellerImage} />
              </div>
              <div className={classes.SellerBox__Right}>
                <h3 className={classes.SellerBox__Head}>{seller.name}</h3>
                <div className={classes.SellerBox__Rating}>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
                <div className={classes.SellerBox__Link}>
                  <Link
                    to="/seller/Filon-Asset-Store-2"
                    className={classes.SellerLink}
                  >
                    Visit Store
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sellers;

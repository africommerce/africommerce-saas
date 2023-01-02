import classes from '../../styles/AsideDescription.module.css';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import product from '../../assests/productImg3.png';
const AsideDescription = () => {
  return (
    <div>
      <div className={classes.SoldBy}>
        <div>Sold by</div>
        <div className={classes.Name}>Adiddas</div>
        <div className={classes.Des}>
          Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257)
          563-7401
        </div>
        <button className={classes.RevBtn}>
          <span className={classes.Stars}>
            <AiFillStar className={classes.Star} />
            <AiFillStar className={classes.Star} />
            <AiFillStar className={classes.Star} />
            <AiFillStar className={classes.Star} />
            <AiFillStar className={classes.Star} />
          </span>
          <span className={classes.Rev}>(0 customer reviews)</span>
        </button>
      </div>
      <div>
        <div className={classes.Related}>
          <div className={classes.RelatedHead}>Top Selling Product</div>
          <div className={classes.TopContent}>
            <div className={classes.ProductBox}>
              <div className={classes.ProductImg}>
                <img src={product} alt="product img" />
              </div>
              <div className={classes.Right}>
                <div className={classes.ProductDes}>
                  Calvin Klein Women's Scuba Sleeveles...
                </div>
                <div className={classes.Rating}>
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                </div>
                <div className={classes.Price}>$150.00</div>
              </div>
            </div>
            <div className={classes.ProductBox}>
              <div className={classes.ProductImg}>
                <img src={product} alt="product img" />
              </div>
              <div className={classes.Right}>
                <div className={classes.ProductDes}>
                  Calvin Klein Women's Scuba Sleeveles...
                </div>
                <div className={classes.Rating}>
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                </div>
                <div className={classes.Price}>$150.00</div>
              </div>
            </div>
            <div className={classes.ProductBox}>
              <div className={classes.ProductImg}>
                <img src={product} alt="product img" />
              </div>
              <div className={classes.Right}>
                <div className={classes.ProductDes}>
                  Calvin Klein Women's Scuba Sleeveles...
                </div>
                <div className={classes.Rating}>
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                </div>
                <div className={classes.Price}>$150.00</div>
              </div>
            </div>
            <div className={classes.ProductBox}>
              <div className={classes.ProductImg}>
                <img src={product} alt="product img" />
              </div>
              <div className={classes.Right}>
                <div className={classes.ProductDes}>
                  Calvin Klein Women's Scuba Sleeveles...
                </div>
                <div className={classes.Rating}>
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                </div>
                <div className={classes.Price}>$150.00</div>
              </div>
            </div>
            <div className={classes.ProductBox}>
              <div className={classes.ProductImg}>
                <img src={product} alt="product img" />
              </div>
              <div className={classes.Right}>
                <div className={classes.ProductDes}>
                  Calvin Klein Women's Scuba Sleeveles...
                </div>
                <div className={classes.Rating}>
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                </div>
                <div className={classes.Price}>$150.00</div>
              </div>
            </div>
            <div className={classes.ProductBox}>
              <div className={classes.ProductImg}>
                <img src={product} alt="product img" />
              </div>
              <div className={classes.Right}>
                <div className={classes.ProductDes}>
                  Calvin Klein Women's Scuba Sleeveles...
                </div>
                <div className={classes.Rating}>
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                </div>
                <div className={classes.Price}>$150.00</div>
              </div>
            </div>
            <div className={classes.ProductBox}>
              <div className={classes.ProductImg}>
                <img src={product} alt="product img" />
              </div>
              <div className={classes.Right}>
                <div className={classes.ProductDes}>
                  Calvin Klein Women's Scuba Sleeveles...
                </div>
                <div className={classes.Rating}>
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                  <AiFillStar className={classes.Star} />
                </div>
                <div className={classes.Price}>$150.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideDescription;

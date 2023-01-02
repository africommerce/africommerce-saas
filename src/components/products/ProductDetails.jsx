import classes from '../../styles/ProductDetails.module.css';
import product1 from '../../assests/productImg1.png';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { GoStar } from 'react-icons/go';
import product2 from '../../assests/productImg2.png';
import product3 from '../../assests/productImg3.png';
import selleraddidas from '../../assests/selleraddidas.jpg';
import { useState } from 'react';
import { GrCart } from 'react-icons/gr';
import { BiShoppingBag } from 'react-icons/bi';
import refund from '../../assests/refund-sticker.jpg';
import { Link } from 'react-router-dom';
const ProductDetails = () => {
  const [quantity, setQuantity] = useState(10);

  const setQuantityHandler = (e) => {
    if (e.target.value < 1) return;
    setQuantity(e.target.value);
  };
  return (
    <div className={classes.ProductDetails}>
      <div className={classes.ProductBox}>
        <div className={classes.ProductImages}>
          <div className={classes.ImagesTab}>
            <button className={[classes.SliderBtn, classes.Right].join(' ')}>
              <FiChevronUp className={classes.SliderButton} />
            </button>

            <div className={classes.SmallImage}>
              <img
                src={product1}
                alt="product images"
                className={classes.SmallImg}
              />
            </div>

            <div className={classes.SmallImage}>
              <img
                src={product2}
                alt="product images"
                className={classes.SmallImg}
              />
            </div>
            <div className={classes.SmallImage}>
              <img
                src={product3}
                alt="product images"
                className={classes.SmallImg}
              />
            </div>
            <div className={classes.SmallImage}>
              <img
                src={product1}
                alt="product images"
                className={classes.SmallImg}
              />
            </div>
            <div className={classes.SmallImage}>
              <img
                src={product2}
                alt="product images"
                className={classes.SmallImg}
              />
            </div>
            <button className={[classes.SliderBtn, classes.Left].join(' ')}>
              <FiChevronDown className={classes.SliderButton} />
            </button>
          </div>
          <div className={classes.Image}>
            <div className={classes.img}>
              <img
                src={product1}
                alt="product images"
                className={classes.Img}
              />
            </div>
          </div>
        </div>
        <div className={classes.ProductDescription}>
          <div className={classes.NameBox}>
            <div className={classes.Name}>
              <div className={classes.ProductName}>
                Addidas Women's Parma 16 Shorts
              </div>
              <div className={classes.Rating}>
                <span className={classes.Stars}>
                  <GoStar className={classes.Star} />
                  <GoStar className={classes.Star} />
                  <GoStar className={classes.Star} />
                  <GoStar className={classes.Star} />
                  <GoStar className={classes.Star} />
                </span>
                <span className={classes.Revnumber}>(0 reviews)</span>
              </div>
            </div>
          </div>
          <div className={classes.Seller}>
            <div className={classes.SellerNameBox}>
              <div className={classes.By}>Sold by:</div>
              <div className={classes.SellerName}>Adiddas</div>
            </div>

            <button className={classes.SellerBtn}>
              <span>Message Seller</span>
            </button>

            <div className={classes.SellerLogo}>
              <img
                src={selleraddidas}
                alt="Seller logo"
                className={classes.Logo}
              />
            </div>
          </div>
          <div className={classes.Price}>
            <div className={classes.PriceBox}>
              <div className={classes.PriceLine}>
                <div className={classes.Cap}>Price</div>
                <del className={classes.FakePrice}>$35.00/pc</del>
              </div>
              <div className={classes.PriceLine}>
                <div className={classes.Cap}>Discount Price</div>
                <strong className={classes.RealPrice}>$15.00</strong>
              </div>
              <div className={classes.PriceLine}>
                <div className={classes.Cap}>Club Point</div>
                <div className={classes.Point}>200</div>
              </div>
            </div>
          </div>
          <div className={classes.Colors}>
            <div className={classes.Cap}>Colors</div>
            <div className={classes.Color}>
              <span className={classes.ColorContainer}>
                <span
                  className={classes.ColorBox}
                  style={{ backgroundColor: 'black' }}
                ></span>
              </span>
              <span className={classes.ColorContainer}>
                <span
                  className={classes.ColorBox}
                  style={{ backgroundColor: 'blue' }}
                ></span>
              </span>
              <span className={classes.ColorContainer}>
                <span
                  className={classes.ColorBox}
                  style={{ backgroundColor: 'red' }}
                ></span>
              </span>
            </div>
          </div>
          <div className={classes.Quantity}>
            <div className={classes.Cap}>Quantity</div>
            <span className={classes.Signs}>
              <button
                onClick={() => {
                  setQuantity(quantity - 1);
                }}
                className={classes.Sign}
              >
                <span>-</span>
              </button>
              <input
                type="number"
                onChange={(e) => setQuantityHandler(e)}
                value={quantity}
                className={classes.Input}
              />
              <button
                onClick={() => {
                  setQuantity(() => quantity + 1);
                }}
                className={classes.Sign}
              >
                <span>+</span>
              </button>
            </span>
          </div>
          <div className={classes.TotalPrice}>
            <div className={classes.PriceLine}>
              <div className={classes.Cap}>Total Price</div>
              <strong className={classes.RealPrice}>
                ${(quantity * 20 - quantity * 15).toLocaleString()}
              </strong>
            </div>
          </div>
          <div className={classes.CartButtons}>
            <button className={classes.Add}>
              <span className={classes.AddBox}>
                <BiShoppingBag className={classes.Icon} />
                <span>Add to cart</span>
              </span>
            </button>
            <button className={classes.Buy}>
              <span className={classes.BuyBox}>
                <GrCart className={classes.Icons} />
                <span>Buy now</span>
              </span>
            </button>
          </div>
          <div className={classes.AltCart}>
            <button className={classes.Alt}>Add to wishlist</button>
            <button className={classes.Alt} style={{ marginLeft: '45px' }}>
              Add to compare
            </button>
          </div>
          <div className={classes.Refund}>
            <div className={classes.PriceLine}>
              <div className={classes.Cap}>Refund</div>
              <img src={refund} alt="refund" className={classes.RefImg} />
              <Link to="/policy" className={classes.PolicyLink}>
                {' '}
                view policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

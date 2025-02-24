import classes from '../../styles/ProductDescription.module.css';
import productvideo from '../../assests/productvideo.mp4';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import Spinner from '../spinner/spinner';

const MainDescription = () => {
  const [description, setDescription] = useState({
    des: true,
    video: false,
    review: false,
  });
  const [data, setData] = useState(null);
  //   [
  //     {
  //       id: 1,
  //       image: product,

  //       fake_prie: 90,
  //       price: 50,
  //       ratcriptioning: 5,
  //       des: "Calvin Klein Women's Scuba Sleeveless Princess Seamed Sheath Dress",
  //       rating: {
  //         count: 10,
  //       },
  //     },
  //     {
  //       id: 2,
  //       image: product,

  //       fake_prie: 90,
  //       price: 50,
  //       rating: 5,
  //       description:
  //         "Calvin Klein Women's Scuba Sleeveless Princess Seamed Sheath Dress",
  //       rating: {
  //         count: 10,
  //       },
  //     },
  //     {
  //       id: 3,
  //       image: product,

  //       fake_prie: 90,
  //       price: 50,
  //       rating: 5,
  //       description:
  //         "Calvin Klein Women's Scuba Sleeveless Princess Seamed Sheath Dress",
  //       rating: {
  //         count: 10,
  //       },
  //     },
  //     {
  //       id: 4,
  //       image: product,

  //       fake_prie: 90,
  //       price: 50,
  //       rating: 5,
  //       description:
  //         "Calvin Klein Women's Scuba Sleeveless Princess Seamed Sheath Dress",
  //       rating: {
  //         count: 10,
  //       },
  //     },
  //     {
  //       id: 5,
  //       image: product,

  //       fake_prie: 90,
  //       price: 50,
  //       rating: 5,
  //       description:
  //         "Calvin Klein Women's Scuba Sleeveless Princess Seamed Sheath Dress",
  //       rating: {
  //         count: 10,
  //       },
  //     },
  //     {
  //       id: 6,
  //       image: product,

  //       fake_prie: 90,
  //       price: 50,
  //       rating: 5,
  //       description:
  //         "Calvin Klein Women's Scuba Sleeveless Princess Seamed Sheath Dress",
  //       rating: {
  //         count: 10,
  //       },
  //     },
  //     {
  //       id: 7,
  //       image: product,

  //       fake_prie: 90,
  //       price: 50,
  //       rating: 5,
  //       description:
  //         "Calvin Klein Women's Scuba Sleeveless Princess Seamed Sheath Dress",
  //       rating: {
  //         count: 10,
  //       },
  //     },
  //     {
  //       id: 8,
  //       image: product,

  //       fake_prie: 90,
  //       price: 50,
  //       rating: 5,
  //       description:
  //         "Calvin Klein Women's Scuba Sleeveless Princess Seamed Sheath Dress",
  //       rating: {
  //         count: 10,
  //       },
  //     },
  //   ];

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/products?limit=10',
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={classes.MainDescription}>
      <div className={classes.DescriptionBox}>
        <div className={classes.DescriptionTabs}>
          <span
            className={classes.DescriptionTab}
            onClick={() => {
              setDescription({
                des: true,
                video: false,
                review: false,
              });
            }}
            style={
              description.des ? { borderBottom: '2px solid #e62e04' } : null
            }
          >
            Description
          </span>
          <span
            className={classes.DescriptionTab}
            style={
              description.video ? { borderBottom: '2px solid #e62e04' } : null
            }
            onClick={() => {
              setDescription({
                des: false,
                video: true,
                review: false,
              });
            }}
          >
            Video
          </span>
          <span
            style={
              description.review ? { borderBottom: '2px solid #e62e04' } : null
            }
            className={classes.DescriptionTab}
            onClick={() => {
              setDescription({
                des: false,
                video: false,
                review: true,
              });
            }}
          >
            Review
          </span>
        </div>
        <div className={classes.DescriptionContainer}>
          {description.des ? (
            <ul className={classes.List}>
              <li>Care intruction: machine wash</li>
              <li>Fit type: regular</li>
              <li>
                Pattern : Solid print jogger set | Sleeves Type : Full Sleeves |
                Neck-Type- Round Neck|Color : Navy Blue
              </li>
              <li>Fabric : Top and Bottom :100% cotton</li>
              <li>
                Fit Type: Regular (Relaxed) Fit. Please refer Size Chart or
                perfect fit nightwear.
              </li>
              <li>
                Package Contents : 1 Pair of Night Suit/Lounge wear set (1
                Jogger, 1 Top)
              </li>{' '}
              <li>
                Wash care instructions: Turn garments inside out before machine
                washing and Ironing. Do not Iron on Decoration. Wash Dark Colors
                Separately. Do not tumble dry. Line dry. Do not bleach.
              </li>
            </ul>
          ) : null}
          {description.video ? (
            <video className={classes.Vid} controls>
              <source src={productvideo} />
            </video>
          ) : null}
          {description.review ? (
            <div className={classes.Review}>
              <span>There has been no reviews for this product yet</span>
            </div>
          ) : null}
        </div>
      </div>
      <div className={classes.Related}>
        <div className={classes.RelatedHead}>Related Product</div>
        <div style={{ paddingInline: '20px' }}>
          <div className={classes.RelatedContainer}>
            {data ? (
              data.map((product) => {
                return <Product product={product} key={product.id} />;
              })
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDescription;

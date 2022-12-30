import React from 'react';
import trendwarehouse from '../assests/sellers/trendwarehouse.png';
import musicmart from '../assests/sellers/music-mart.png';
import createandconquer from '../assests/sellers/createandconquer.png';
import electrowave from '../assests/sellers/electrowave.png';
import applestore from '../assests/sellers/applestore.png';
import jhonson from '../assests/sellers/jhonson.jpg';
import lavishlook from '../assests/sellers/philips.jpg';
import adiddas from '../assests/sellers/addidas.jpg';
import louisvuiton from '../assests/sellers/louisvuitton.jpg';
import filonAsset from '../assests/sellers/filon-asset.png';
import classes from '../styles/Sellers.module.css';
import Sellers from '../components/sellers/sellers';
import SellersHead from '../components/sellers/sellersHead';
const sellers = [
  { id: 1, name: 'filon asset store', rating: 5, img: filonAsset },
  { id: 2, name: 'trend warehouse', rating: 5, img: trendwarehouse },
  { id: 3, name: 'music mart', rating: 5, img: musicmart },
  { id: 4, name: 'create & conquer', rating: 5, img: createandconquer },
  { id: 5, name: 'electrowave', rating: 5, img: electrowave },
  { id: 6, name: 'apple store', rating: 5, img: applestore },
  { id: 7, name: 'jhonson', rating: 5, img: jhonson },
  { id: 8, name: 'lavish look', rating: 5, img: lavishlook },
  { id: 9, name: 'adiddas', rating: 5, img: adiddas },
  { id: 10, name: 'louis vuitton', rating: 5, img: louisvuiton },
];
export const AllSellers = () => {
  return (
    <div className={classes.Sellers}>
      <div className={classes.Sellers__Content}>
        <SellersHead />
        <Sellers Sellers={sellers} />
      </div>
    </div>
  );
};

export default AllSellers;

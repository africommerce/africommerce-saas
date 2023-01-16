import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AdsSection } from '../components/ads/AdsSection';
import { HeroSection } from '../components/HeroSection';
import Products from '../components/products/Products';
import classes from '../styles/Home.module.css';
import { Close } from '@mui/icons-material';
import SubscribeModal from '../components/ui components/SubscribeUi';
const Containter = styled.div``;
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  position: relative;
  background: inherit;
  padding: 20px 0px;
  width: 100%;
  margin: 0 auto;
`;

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setOpenModal(true);
  }, [setOpenModal]);
  return (
    <div className={classes.HomeContainer}>
      {/* {openModal && <SubscribeModal />} */}
      <HeroSection />
      <AdsSection />
      <ProductsContainer>
        <Products title={'Flash Sale'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'New Products'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Features Products'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Best Selling'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Auction Products'} />
      </ProductsContainer>
      <AdsSection />
      <ProductsContainer>
        <Products title={'Women Clothing & Fashion'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Men Clothing & Fashion'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Computer & Accessories'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Kids & toy'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Cellphones & Tabs'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Classified Ads'} />
      </ProductsContainer>
      <AdsSection />
      <ProductsContainer>
        <Products title={'Best Sellers'} />
      </ProductsContainer>
      <div>
        <div>Top 10 Categories</div>
        <div>Top 10 Brands</div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AdsSection } from '../components/ads/AdsSection';
import { HeroSection } from '../components/HeroSection';
import Products from '../components/products/Products';
import classes from '../styles/Home.module.css';
import { Close } from '@mui/icons-material';
import SubscribeModal from '../components/ui components/SubscribeUi';
import { subscribeAction } from '../store/subscribeModal';
import { useSelector } from 'react-redux';
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
  const { openModal } = useSelector((state) => state.subscribe);

  return (
    <div className={classes.HomeContainer}>
      {/* {openModal && <SubscribeModal />} */}
      <HeroSection />
      <AdsSection />
      <ProductsContainer>

        <Products title={'Flash Sale'} endPoint={'products/top-rated-product'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'New Products'} endPoint={'products/latest-products'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Features Products'} endPoint={'products/five-products'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Best Selling'} endPoint={'products/best-selling'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Auction Products'} endPoint={'products/best-selling'} />
      </ProductsContainer>
      <AdsSection />
      <ProductsContainer>
        <Products title={'Women Clothing & Fashion'} endPoint={'products/five-products'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Men Clothing & Fashion'} endPoint={'products/best-selling'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Computer & Accessories'} endPoint={'products/best-selling'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Kids & toy'} endPoint={'products/best-selling'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Cellphones & Tabs'} endPoint={'products/best-selling'} />
      </ProductsContainer>
      <ProductsContainer>
        <Products title={'Classified Ads'} endPoint={'products/five-product-category'} />
      </ProductsContainer>
      <AdsSection />
      <ProductsContainer>
        <Products title={'Best Sellers'} endPoint={'products/best-selling'} />
      </ProductsContainer>
      <div>
        <div>Top 10 Categories</div>
        <div>Top 10 Brands</div>
      </div>
    </div>
  );
};

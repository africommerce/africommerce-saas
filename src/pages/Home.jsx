import React from 'react';
import styled from 'styled-components';
import { AdsSection } from '../components/ads/AdsSection';
import { HeroSection } from '../components/HeroSection';
import Products from '../components/products/Products';
import classes from '../styles/Home.module.css';
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
  return (
    <div className={classes.HomeContainer}>
      <HeroSection />
      <AdsSection />
      <ProductsContainer>
        <Products />
      </ProductsContainer>
    </div>
  );
};

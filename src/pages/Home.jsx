import React from 'react';
import styled from 'styled-components';
import { AdsSection } from '../components/ads/AdsSection';
import { HeroSection } from '../components/HeroSection';
import Products from '../components/products/Products';

const Containter = styled.div``;
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  position: relative;
  background: inherit;
  padding: 20px;
  width: 90%;
  margin: 0 auto;
`;

export const Home = () => {
  return (
    <Containter>
      <HeroSection />
      <AdsSection />
      <ProductsContainer>
        <Products />
      </ProductsContainer>
    </Containter>
  );
};

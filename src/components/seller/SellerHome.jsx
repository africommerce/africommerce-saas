import styled from 'styled-components';
import SellerFeaturedProduct from './SellerFeaturedProduct';
import { SellerHeroSection } from './SellerHeroSection';
import SellerNewArrive from './SellerNewArrive';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;
  width: 80%;
`;

export const SellerHome = () => {
  return (
    <Body>
      <SellerHero>
        <SellerHeroSection />
      </SellerHero>
      <SellerFeature>
        {' '}
        <SellerFeaturedProduct />
      </SellerFeature>
      <SellerNewArrival>
        <SellerNewArrive />
      </SellerNewArrival>
    </Body>
  );
};

const SellerFeature = styled.div`
  display: flex;
  max-width: 85%;
  margin: 0 auto;
`;
const SellerHero = styled.div``;
const SellerNewArrival = styled.div``;

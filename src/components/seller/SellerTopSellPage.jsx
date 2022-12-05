import styled from 'styled-components';
import TopsellingCard from './TopsellingCard';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;
  width: 80%;
`;

export const SellerTopSellPage = () => {
  return (
    <Body>
      <SellerNewArrival>
        <TopsellingCard />
      </SellerNewArrival>
    </Body>
  );
};

const SellerNewArrival = styled.div``;

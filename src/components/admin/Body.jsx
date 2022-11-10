import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex: 7;
`;
// SALES PAGE
export const AllOrders = () => {
  return <div>AllOrders</div>;
};

export const InHouseOrders = () => {
  return <div>InHouseOrders</div>;
};

export const PickUpPoint = () => {
  return <div>PickUpPoint</div>;
};

export const SellerOrders = () => {
  return <div>SellerOrders</div>;
};

// END OF SALES PAGE
export const Body = () => {
  return (
    <>
      <Container>
        <div className="nav">
          <div className="nav__wrapper">
            {' '}
            <div className="left">Left</div>
            <div className="right">Right</div>
          </div>
        </div>
      </Container>

      <AllOrders />
      <InHouseOrders />
      <PickUpPoint />
      <SellerOrders />
    </>
  );
};

import styled from 'styled-components';
import { AdminRoutes } from '../../pages/admin/AdminRoutes';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex: 7;
  background: red;
  width: 100%;
  .nav {
    position: relative;
    display: flex;
    width: 100%;
    .nav__wrapper {
      display: flex;
      position: relative;
      flex-direction: column;
      background: rgb(242, 243, 248);
      width: 100%;
    }
  }
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
      <Container />

      <AllOrders />
      <InHouseOrders />
      <PickUpPoint />
      <SellerOrders />
    </>
  );
};

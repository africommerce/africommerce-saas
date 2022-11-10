import styled from 'styled-components';
import { Body } from '../../components/admin/Body';
import { SideNav } from '../../components/admin/SideNav';
import {AllOrders} from '../../components/admin/sales/AllOrders'
import {InHouseOrders} from '../../components/admin/sales/InHouseOrders'
import {PickUpPoint} from '../../components/admin/sales/PickUpPoint'
import {SellerOrders} from '../../components/admin/sales/SellerOrders'
// All components for this page are to be created in components/admin folder
const Container = styled.div`
  display: flex;
  width: 100vw;
  position: relative;
  top: 0;
  margin: 0 auto;
  margin-top: -170px;
  background: rgb(242, 243, 248);
`;

export const AdminDashboard = () => {
  return (
    <Container>
      <SideNav />
      <Body />
      <AllOrders/>
      <InHouseOrders/>
      <PickUpPoint/>
      <SellerOrders/>
    </Container>
  );
};

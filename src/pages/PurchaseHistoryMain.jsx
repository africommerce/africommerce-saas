import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import PurchaseHistory from './user/purchaseHistory';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row; 
  margin: 0 auto; 
`;

function PurchaseHistoryMain() {
  return (
    <Container>
      <DashboardSidebar />
      <PurchaseHistory />
    </Container>
  );
}

export default PurchaseHistoryMain;

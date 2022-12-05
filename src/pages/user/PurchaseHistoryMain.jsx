import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import PurchaseHistory from './purchaseHistory';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 200px;
  margin-bottom: 100px;
  justify-content: space-between;
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

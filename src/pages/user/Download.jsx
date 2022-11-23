import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import styled from 'styled-components';
import DownloadSection from './DownloadSection';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 4rem;
`;

function Download() {
  return (
    <Container>
      <DashboardSidebar />
      <DownloadSection />
    </Container>
  );
}
export default Download;
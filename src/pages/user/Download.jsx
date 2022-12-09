import React from 'react';
import styled from 'styled-components';
import DownloadSection from './DownloadSection';

const Container = styled.div`
  flex: 1;
`;

function Download() {
  return (
    <Container>
      <DownloadSection />
    </Container>
  );
}
export default Download;

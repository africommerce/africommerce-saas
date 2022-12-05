import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 100px;
  display: flex;
  max-width: 100%;
  margin: 10px;
  justify-content: space-between;
`;

const AdsContents = styled.img`
  display: flex;
  max-width: 450px;
  max-height: 200px;
  /* border-radius: 5px; */
`;
const ads = [
  '../../assets/ads1.png',
  '../../assets/ads2.png',
  '../../assets/ads3.png',
];
export const AdsSection = () => {
  return (
    <Container>
      {ads.map((ads) => (
        <AdsContents src={ads} key={ads} />
      ))}
    </Container>
  );
};

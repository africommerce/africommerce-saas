import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 0px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @media only screen and (max-device-width: 1000px) and (-webkit-min-device-pixel-ratio: 1) {
    display: flex;
    flex-direction: column;
  }
  margin: 10px 0px;
`;

const AdsContents = styled.img`
  display: flex;
  max-width: 100%;
  max-height: 200px;
  /* border-radius: 5px; */
  @media only screen and (max-device-width: 1000px) and (-webkit-min-device-pixel-ratio: 1) {
    margin-bottom: 20px;
  }
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

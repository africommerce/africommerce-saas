import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { flashImgs } from '../assests/img_links';
import { Grid, Card, CardMedia, Container } from '@mui/material';
import styled from 'styled-components';
import { device } from '../styles/BreackPoints';

export const Flashdiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    display: block;
    text-align: center;
    margin-bottom: 30px;
  }
`;
const Cardmedia = styled(CardMedia)`
  @media ${device.mobileS} {
    margin: 0 auto;
    height: 280px;
  }
`;
export const Loading = () => {
  return <div>Loading...</div>;
};

export const FlashSale = () => {
  const [isLoading, setLoading] = useState(false);
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    setLoading(true);
    setImgs(flashImgs);
    setLoading(false);
  }, []);

  return (
    <Container>
      <Flashdiv>
        <h2>Flash deals</h2>
        <div style={{ listStyle: 'none', fontSize: '12px' }}>
          <li style={{ display: 'inline', marginRight: '5px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          <span>/</span>
          <li style={{ display: 'inline', marginLeft: '5px' }}>
            <Link style={{ textDecoration: 'none' }} to="/flash-sale">
              "Flash deals"
            </Link>
          </li>
        </div>
      </Flashdiv>
      <Grid container spacing={2}>
        {isLoading ? (
          <Loading />
        ) : (
          imgs &&
          imgs.map((img) => {
            return (
              <Grid key={img.alt} item md={6} xs={12}>
                <Link to={img.link}>
                  <Card>
                    <Cardmedia
                      component="img"
                      height="294"
                      alt={img.alt}
                      image={img.url}
                    />
                  </Card>
                </Link>
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
};

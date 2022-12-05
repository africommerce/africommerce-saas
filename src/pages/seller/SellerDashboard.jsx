import React, { useState, useEffect } from 'react';
import { Performance } from '../../components/sellerDashboard/Performance';
import { Stats } from '../../components/sellerDashboard/Stats';
import { OtherActions } from '../../components/sellerDashboard/OtherActions';
import {
  Typography,
  Paper,
  Container,
  Card,
  CardMedia,
  CardContent,
  Rating,
} from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TopProducts } from './../../assests/img_links';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SellerDashboard = () => {
  const [topProducts, setTopProduts] = useState([]);
  useEffect(() => {
    setTopProduts(TopProducts);
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const PriceContainer = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width:800px) {
      display: block;
    }
  `;
  const screen = window.screen.width;
  return (
    <Container>
      <Performance />
      <Stats screen={screen} />
      <OtherActions />
      <Paper
        variant="outlined"
        style={{
          padding: '20px',
        }}
      >
        <Typography component="h1" variant="subtitle1">
          Top Products
        </Typography>

        <Carousel
          navButtonsAlwaysVisible
          autoPlay={false}
          swipe
          fade={false}
          cycleNavigation={false}
          indicators={false}
          responsive={responsive}
        >
          {topProducts.map((item, i) => (
            <Link key={i} to="##" style={{ textDecoration: 'none' }}>
              <Card
                mt={4}
                sx={{
                  Height: 305,
                  maxHeight: 305,
                  margin: '10px',
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image}
                  alt={item.description}
                />
                <CardContent>
                  <PriceContainer>
                    {item.strike ? (
                      <Typography
                        sx={{
                          color: '#bdbdbd',
                          textDecoration: 'line-through',
                        }}
                        mr={2}
                        component="h4"
                        variant="p"
                      >
                        {item.strike}
                      </Typography>
                    ) : null}

                    <Typography mb={1} component="h4" variant="p">
                      ${item.price}
                    </Typography>
                  </PriceContainer>
                  <p>
                    <Rating
                      readOnly
                      value={item.rating}
                      name="product-rating"
                      size="small"
                    ></Rating>
                  </p>
                  <Typography sx={{ fontSize: '13px' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Carousel>
      </Paper>
    </Container>
  );
};

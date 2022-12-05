import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogImgs } from '../assests/img_links';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
} from '@mui/material';
import { Loading, Flashdiv } from './FlashSale';

export const Blog = () => {
  const [isLoading, setLoading] = useState(false);
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    setLoading(true);
    setImgs(BlogImgs);
    setLoading(false);
  }, []);
  return (
    <Container>
      <Flashdiv>
        <h2>Blog</h2>
        <div style={{ listStyle: 'none', fontSize: '12px' }}>
          <li style={{ display: 'inline', marginRight: '5px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          <span>/</span>
          <li style={{ display: 'inline', marginLeft: '5px' }}>
            <Link style={{ textDecoration: 'none' }} to="/blog">
              "Blog"
            </Link>
          </li>
        </div>
      </Flashdiv>
      <Grid container spacing={3}>
        {isLoading ? (
          <Loading />
        ) : (
          imgs &&
          imgs.map((img) => {
            return (
              <Grid key={img.subtitle} item md={4} xs={12}>
                <Card>
                  <Link to={img.link} style={{ textDecoration: 'none' }}>
                    <CardMedia
                      component="img"
                      alt={img.subtitle}
                      image={img.url}
                      height="180"
                    />
                  </Link>

                  <CardContent style={{ padding: '20px' }}>
                    <h3>{img.subtitle}</h3>
                    <p>
                      <small>
                        <i>{img.topic}</i>
                      </small>
                    </p>
                    <p>
                      <small>{img.description}</small>
                    </p>
                  </CardContent>
                  <CardActions style={{ padding: '20px' }}>
                    <Link to={img.link} style={{ textDecoration: 'none' }}>
                      <Button size="medium" variant="contained" color="error">
                        View More
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
};

import React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Delete, ShoppingCart } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import Rating from '@mui/material/Rating';
import styled from 'styled-components';
import DashboardSidebar from './DashboardSidebar';

const Containers = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 7rem;
`;

const imgStyle = {
  width: '100%',
  height: '15rem',
};

function Card(props) {
  return (
    <Grid item xs={4}>
      <Paper elevation={6} sx={{ maxHeight: 380, marginBottom: 0 }}>
        <img src={props.img} alt="" style={imgStyle} />
        <Box paddingX={2}>
          <Typography variant="body2" component="h3" noWrap="true">
            {props.title}
          </Typography>
          <Box>
            <Rating size="small" />
          </Box>
          <Box>
            <Typography
              variant="caption"
              sx={{ textDecoration: 'line-through' }}
            >
              {props.oldprice}
            </Typography>
            <Typography variant="caption" marginLeft={1} color="error">
              {props.newprice}
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Paper elevation={6} sx={{ marginTop: 0 }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}
          paddingY={2}
        >
          <Box marginLeft={2}>
            <IconButton aria-label="delete">
              <Delete color="error" />
            </IconButton>
          </Box>
          <Box>
            <Button variant="contained" color="error">
              <ShoppingCart />
              <Typography variant="caption">Add to cart</Typography>
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export const WishList = () => {
  return (
    <Containers>
      <div>
        <Container maxWidth="md">
          <Typography>Wishlist</Typography>
          <Grid container spacing={5}>
            <Card
              img="https://demo.activeitzone.com/ecommerce/public/uploads/all/HQboSmyuvf2TShvV4NfJAgeCwm6Qnx1y6xQ2B8gI.png"
              title="Women's Embellished Tiered Sequin Jacket Dress"
              oldprice="$150.000"
              newprice="$99.000"
            />

            <Card
              img="https://demo.activeitzone.com/ecommerce/public/uploads/all/xgkm8TcXVQTwQEGFyJcwTj3yJLKOlnACY5wXLWYx.png"
              title="Self Design, Embellished, Embroidered Satin Blend, Net Semi Stitched Flared/A-line Gown "
              oldprice="$120.000"
              newprice="$96.000"
            />

            <Card
              img="https://demo.activeitzone.com/ecommerce/public/uploads/all/6o18mK28NHiLcWPbhSRPUXnBBuQlzBMp7fa0wPwe.png"
              title="Ariana Grande Ari Eau de Parfum Spray for Women"
              newprice="$99.000"
            />

            <Card
              img="https://demo.activeitzone.com/ecommerce/public/uploads/all/DPaU1Z5wc7Xb89jXwI85Nv4ve5d4Gt5FmyxszFfK.png"
              title="Men's Running Shoes Non Slip Athletic Tennis Walking Blade Type Sneakers"
              oldprice="$95.000"
              newprice="$76.000"
            />

            <Card
              img="https://demo.activeitzone.com/ecommerce/public/uploads/all/NEmbbgNnGnM79GkteGwsFcOSzxlRmNoopmSx6d0Y.png"
              title="HP Stream 9VK97UA#ABA 14 inches HD(1366x768) Display"
              oldprice="$350.000"
              newprice="$280.000"
            />

            <Card
              img="https://demo.activeitzone.com/ecommerce/public/uploads/all/SQvraqHCYJaiDHLEwa3dkcYPFjff6zVHLm4w2pEQ.jpg"
              title="Apple iPad Pro 512GB 11IN MTXU"
              oldprice="$1,500.000"
              newprice="$795.000"
            />
          </Grid>
        </Container>
      </div>
    </Containers>
  );
};

export { Card };

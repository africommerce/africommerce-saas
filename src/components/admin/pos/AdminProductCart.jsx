import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Add } from '@mui/icons-material';
import classes from './AdminProductCart.module.css';
import { useState } from 'react';
import styled from 'styled-components';
const TopWrapper = styled.div`
  display: ${(props) => (props.showHover ? 'flex' : 'none')};
  position: absolute;
  z-index: 33;
  width: 100%;
  background: gray;
  height: 100%;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
const Container = styled(Card)`
  display: flex !important;
  height: 400px !important;
  max-height: 300px !important;
  max-width: 200px !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  position: relative !important;
  :hover {
  }
`;
export const AdminProductCart = ({ title, inStock, price, image }) => {
  const [showHover] = useState(false);
  return (
    <>
      <Container className={classes.container}>
        <TopWrapper showHover={showHover}>
          <span>
            <Add style={{ width: '100px', height: '100px' }} />
          </span>
        </TopWrapper>
        <div style={{ maxHeight: '70%' }}>
          <Typography
            gutterBottom
            variant="h5"
            style={{
              background: 'yellow',
              width: 'fit-content',
              padding: '5px',
              fontSize: '12px',
              fontWeight: 'bold',
              position: 'absolute',
            }}
            component="div"
          >
            Instock: {inStock}
          </Typography>
          <CardMedia
            component="img"
            height="100%"
            image={image}
            alt="Product"
          />
        </div>
        <div>
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <div>{title}</div>
              <span>${price.toFixed(3)}</span>
            </Typography>
          </CardContent>
        </div>
      </Container>
    </>
  );
};

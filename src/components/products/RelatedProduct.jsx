// import { useState } from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  gap: 1rem;

  flex-wrap: nowrap;
  /* left: 30px; */
  overflow-x: hidden;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  max-width: 100%;
  width: auto;
  min-height: 400px;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: 400px;
`;
const Bottom = styled.div`
  display: flex;

  flex-direction: column;
  gap: 0.7rem;
  .price {
    color: rgb(230, 46, 4);
    font-weight: bolder;
  }
  .title {
    font-weight: bold;
  }

  .club-points {
    display: flex;
    justify-content: space-between;
    background: rgb(252, 224, 217);
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgb(250, 198, 185);
  }
`;
const arrowStyle = {
  borderRadius: '50%',
  padding: '5px',
  background: 'white',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
};
const SlideArrows = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  /* background: red; */
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 5;
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;

  transition: all 700ms ease;
`;
export const RelatedProduct = () => {
  // const [initial, setInitial] = useState(0);

  const slideLeft = (e) => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <Container>
      <SlideArrows>
        <KeyboardArrowLeft onClick={slideLeft} style={arrowStyle} />
        <KeyboardArrowRight onClick={slideRight} style={arrowStyle} />
      </SlideArrows>
      <Wrapper className="slider">
        {[1, 2, 3, 4, 6, 3, 3, 4].map((product) => (
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            <Box display="flex" flexDirection="column">
              <Top>
                <Image src="../../assets/watch_2.webp" />
              </Top>
              <Bottom>
                <div className="price">${(234).toFixed(3)}</div>
                <div className="rate">
                  <Rating style={{ fontSize: '20px' }} />
                </div>
                <div className="title">Wristch Watch</div>
                <div className="club-points">
                  <span>Club Pont: </span>
                  <span>345</span>
                </div>
              </Bottom>
            </Box>
          </Link>
        ))}
      </Wrapper>
    </Container>
  );
};

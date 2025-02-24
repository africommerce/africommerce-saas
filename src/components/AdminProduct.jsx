import { Rating } from '@mui/material';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';

// styles
const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid #99999f;
  margin-bottom: 10px;
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    h3 {
      font-size: 24px;
      margin-right: 10px;
    }
    p {
      background: red;
      color: #ffff;
      font-size: 16px;
      padding: 10px;
      border-radius: 5px;
    }
  }
  button {
    background: red;
    color: #ffff;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;

    border: none;
    cursor: pointer;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  }
`;

const Card = styled.div`
  width: 183px;
  position: relative;
  padding: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 30px;
  img {
    width: 128px;
    height: 161px;
  }
`;
const Promo = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 0px 15px 15px 0px;
  padding: 5px;
  position: absolute;
  top: 10px;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  z-index: 1;
  h3 {
    color: red;
    font-size: 14px;
    font-weight: 600;
  }
  p {
    padding: 5px;
    border-radius: 50%;
    background: red;
    color: #ffff;
    font-size: 14px;
  }
`;
const Price = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: 10px;
  p {
    text-decoration: line-through;
    color: #99999f;
    &:nth-child(2) {
      text-decoration: none;
      color: red;
      font-weight: 600;
    }
  }
`;

const Rate = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 5px;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledArrowContainerRight = styled.div`
  font-size: 35px;
  width: 50px;
  height: 50px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  background: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50%;
  right: 0;
  :hover {
    background: gray;
    color: #ffff;
  }
  cursor: pointer;
  z-index: 1;
  @media only screen and (max-width: 550px) {
    display: none;
  }
`;
const StyledArrowContainerLeft = styled.div`
  font-size: 35px;
  width: 50px;
  height: 50px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  background: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50%;
  left: 0;
  :hover {
    background: gray;
    color: #ffff;
  }
  cursor: pointer;
  z-index: 1;

  @media only screen and (max-width: 550px) {
    display: none;
  }
`;
const Point = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background: #fce0d9;
  border-radius: 5px;
  text-align: center;

  p {
    &:nth-child(2) {
      font-weight: 600;
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffff;
  position: relative;
  /* margin: 0 auto !important; */
  /* overflow: hidden; */
  padding: 20px;
  width: 100%;
`;
const AdminProducts = () => {
  // const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  // const [visible, setVisible] = useState(5);

  const slideLeft = (e) => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://fakestoreapi.com/products?limit=12',
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, [setData]);

  return (
    <Container>
      <Head>
        <span>
          <h4>Top 12 Products</h4>
        </span>
      </Head>
      <div id="slider">
        <StyledArrowContainerLeft onClick={slideLeft}>
          <MdKeyboardArrowLeft />
        </StyledArrowContainerLeft>
        {data.map((values) => {
          return (
            <Link
              key={values.id}
              to={`/product/${values.id}`}
              style={{ textDecoration: 'none', color: 'gray' }}
            >
              <Card>
                <Promo>
                  <h3>OFF</h3>
                  <p>20%</p>
                </Promo>
                <Image>
                  <img src={values.image} alt="" />
                </Image>

                <Price>
                  <p>$90,000</p>
                  <p>${values.price}</p>
                </Price>
                <Rate>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                    size="small"
                  />
                  <p>{values.description}</p>
                  <Point>
                    <p>Club Point:</p>
                    <p>{values.rating.count}</p>
                  </Point>
                </Rate>
              </Card>
            </Link>
          );
        })}
        <StyledArrowContainerRight onClick={slideRight}>
          <MdKeyboardArrowRight />
        </StyledArrowContainerRight>
      </div>
    </Container>
  );
};

export default AdminProducts;

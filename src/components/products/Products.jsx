import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import Product from './Product';
import Spinner from '../spinner/spinner';

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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  position: relative;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
`;
const Products = ({ title, endPoint}) => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    axios({
      method: 'GET',
      url: `https://fakestoreapi.com/products`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })

    return () => {};
  }, [setData, endPoint]);

  return (
    <Container>
      <Head>
        <span>
          <h3>{title}</h3>
          <span className="Home__flash--buttons">
            <p>811</p> : <p>11</p> : <p>11</p> : <p>11</p>
          </span>
        </span>
        <button>View More</button>
      </Head>
      <div id="slider">
        <StyledArrowContainerLeft onClick={slideLeft}>
          <MdKeyboardArrowLeft />
        </StyledArrowContainerLeft>
        {data ? (
          data.map((values) => {
            // console.log(values);
            return <Product product={values} key={values.id} />;
          })
        ) : (
          <Spinner />
        )}
        { !loading &&<div>No Product Found</div>}
        <StyledArrowContainerRight onClick={slideRight}>
          <MdKeyboardArrowRight />
        </StyledArrowContainerRight>
      </div>
    </Container>
  );
};

export default Products;

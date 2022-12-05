import {
  Email,
  Facebook,
  Image,
  LinkedIn,
  Twitter,
  WhatsApp,
} from '@mui/icons-material';
import { Button, Divider, Rating } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ProductButtom } from '../components/products/ProductButtom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin: 0 auto;
  align-items: center;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 100%;
  margin: 0 auto;
  align-items: center;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 5px;
  color: gray;
  justify-content: space-between;
  padding: 14px;
  width: 85%;
  flex-flow: wrap;
  height: 100%;
`;

const LeftSlide = styled.div`
  display: flex;
  flex: 0.8;
`;

const ProductImage = styled.div`
  position: relative;
  flex: 4;
  display: flex;
  margin: 0 auto;
  margin-left: 10px;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  max-width: 80%;
`;

const ProductInfo = styled.div`
  display: flex;
  padding: 0 10px;
  gap: 10px;
  flex-direction: column;
  flex: 5;
`;

const LeftSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
`;

const LeftSlideImage = styled.img`
  display: flex;
  width: 100%;
  max-width: 70px;
  border: 2px rgb(247, 247, 247) solid;
  border-radius: 5px;
  background: rgb(242, 242, 242);
  padding: 10px;
`;

const ProductImageContainer = styled.div`
  /* background: rgb(244, 244, 244); */
  border-radius: 5px;
  position: static;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const MainImage = styled.img`
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  justify-content: center;
  align-items: center;
`;

const ProductName = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
  span {
    font-size: 15px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 2rem;
`;
const Rate = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;
const Info = styled.div`
  display: flex;

  padding: 10px 0;
  div {
    display: flex;

    div {
      display: flex;
      background: red;
    }
  }
`;

const InfoProperty = styled.div`
  display: flex;
  flex: 1;
  font-size: 12px;
  font-weight: 100;
  flex-direction: column;
  span {
    font-weight: bold;
  }
`;

const InfoValue = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 4;
`;

const SellerLogo = styled(Image)`
  border-radius: 50%;
`;
const PriceContainer = styled.div`
  display: flex;
  padding: 10px 0;
  gap: 10px;
  font-size: 1rem;
  flex-direction: column;
  div {
    display: flex;
    div {
      display: flex;
      flex: 1;
      align-items: center;
    }
    .price-property {
      flex: 4;
      font-size: 2rem;
      span {
        font-size: 15px;
      }
    }
  }
`;
const Sizing = styled.div`
  display: flex;
  padding: 10px 0;
  gap: 15px;
  flex-direction: column;
  div {
    display: flex;
    div {
      display: flex;
      flex: 1;
      align-items: center;
    }
    .price-property {
      flex: 4;
      font-weight: bold;
      gap: 3px;
    }
  }
`;

const QuantityInput = styled.input`
  display: flex;
  align-items: center;
  text-align: center;
  border: none;
  max-width: 30px;
  outline: none;
`;

const Total = styled.div`
  display: flex;
  padding: 10px 0;
  gap: 15px;
  flex-direction: column;
  div {
    display: flex;
    div {
      display: flex;
      flex: 1;
      align-items: center;
    }
    .price-property {
      flex: 4;
      font-size: 2rem;
      gap: 3px;
      img {
        max-width: 200px;
      }
    }
  }
`;
const SocialMedia = styled.div`
  display: flex;
  max-width: 250px;
`;
const images = [
  { title: 'Women', src: '../../../assets/earphones_b_4.webp' },
  { title: 'Mobile', src: '../../../assets/watch_1.webp' },
  { title: 'Baby Dress', src: '../../../assets/watch_2.webp' },
];

export const ProductDetail = () => {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const param = useParams();

  const addQuantityHadler = () => {
    setQuantity((prev) => prev + 1);
  };

  const removeQuantityHadler = () => {
    if (quantity > 1) {
      return setQuantity((prev) => prev - 1);
    }
    if (quantity === 1) {
      return setQuantity((prev) => 1);
    }
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://fakestoreapi.com/products/1${param.id}`,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
    return () => {};
  }, [setData, param.id]);

  return (
    <Container>
      <TopContainer>
        <ProductContainer>
          <LeftSlide>
            <LeftSlideContainer>
              {images.map((image) => (
                <LeftSlideImage
                  key={image.title}
                  style={{ cursor: 'pointer' }}
                  src={data.image}
                />
              ))}
            </LeftSlideContainer>
          </LeftSlide>
          <ProductImage>
            <ProductImageContainer>
              <MainImage src={data.image} alt="" />
            </ProductImageContainer>
          </ProductImage>
          <ProductInfo>
            <ProductName>
              <Title>{data.title}</Title>
              <Rate>
                <Rating />
                (0 review)
              </Rate>
              <span>
                Estimate Shipping Time: <span>5 Days</span>
              </span>
              <Divider style={{ marginTop: '10px' }} />
            </ProductName>
            <Info>
              <InfoProperty>
                Sold by <span>Africommerce</span>
              </InfoProperty>
              <InfoValue>
                <Button
                  style={{
                    color: 'red',
                    textTransform: 'capitalize',
                    background: 'rgb(252,224,217)',
                  }}
                >
                  Message Seller
                </Button>
                <SellerLogo />
              </InfoValue>
            </Info>
            <PriceContainer>
              <div>
                <div>Price</div>
                <div className="price-property">
                  ${500}
                  <span>/pc</span>
                </div>
              </div>
              <div>
                <div>Discount</div>
                <div className="price-property">
                  ${400} <span>/pc</span>
                </div>
              </div>
              <div>
                <div>Club Points</div>
                <div className="price-property">
                  <Button
                    style={{ background: 'rgb(252,224,217)', color: 'red' }}
                  >
                    245
                  </Button>
                </div>
              </div>
            </PriceContainer>
            <Divider />
            <Sizing>
              <div>
                <div>Size</div>
                <div className="price-property">
                  {['M', 'L', 'XL', 'XXl'].map((btn) => (
                    <Button>{btn}</Button>
                  ))}
                </div>
              </div>
              <div>
                <div>Quantity</div>
                <div className="price-property">
                  <button
                    onClick={addQuantityHadler}
                    style={{
                      width: '30px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
                      cursor: 'pointer',
                      height: '30px',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: 'none',
                      padding: '5px',
                    }}
                  >
                    +
                  </button>
                  <QuantityInput type="text" min={1} value={quantity} />
                  <button
                    onClick={removeQuantityHadler}
                    style={{
                      width: '30px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
                      cursor: 'pointer',
                      height: '30px',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: 'none',
                      padding: '5px',
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </Sizing>
            <Divider />
            <Total>
              <div>
                <div>Total Price</div>
                <div className="price-property">${400 * quantity}</div>
              </div>
              <div>
                <div>
                  {' '}
                  <button
                    style={{
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
                      cursor: 'pointer',
                      alignItems: 'center',
                      border: 'none',
                      width: '100px',
                      background: '#FF0000',
                      color: 'white',
                      borderRadius: '10px',
                      fontWeight: 'bold',
                      justifyContent: 'center',
                      padding: '10px',
                    }}
                  >
                    Check Item
                  </button>
                </div>
              </div>
              <div>
                <div>
                  <Link to="/">Add to wishlist</Link>
                </div>
                <div className="price-property"></div>
              </div>
              <div>
                <div>Refund</div>
                <div className="price-property">
                  <img
                    src="../../../assets/refund-sticker.jpg"
                    alt="refund sticker"
                  />
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(230,46,4)',
                      fontSize: '15px',
                    }}
                    to="/"
                  >
                    View Policy
                  </Link>
                </div>
              </div>
              <div>
                <div>Share </div>
                <div className="price-property">
                  {' '}
                  <SocialMedia>
                    <div>
                      <Facebook
                        style={{
                          background: 'rgb(59,89,152)',
                          width: '30px',
                          height: '30px',
                          color: 'white',
                          padding: '5px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                      />
                    </div>
                    <div>
                      <Twitter
                        style={{
                          background: 'rgb(0,172,237)',
                          width: '30px',
                          height: '30px',
                          color: 'white',
                          padding: '5px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                      />
                    </div>
                    <div>
                      <Email
                        style={{
                          background: 'rgb(52,144,243)',
                          width: '30px',
                          height: '30px',
                          color: 'white',
                          padding: '5px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                      />
                    </div>
                    <div>
                      <LinkedIn
                        style={{
                          background: '#007BB6',
                          width: '30px',
                          height: '30px',
                          color: 'white',
                          padding: '5px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                      />
                    </div>
                    <div>
                      <WhatsApp
                        style={{
                          background: '#29A628',
                          width: '30px',
                          height: '30px',
                          color: 'white',
                          padding: '5px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                      />
                    </div>
                  </SocialMedia>
                </div>
              </div>
            </Total>
          </ProductInfo>
        </ProductContainer>
      </TopContainer>
      <ProductButtom />
    </Container>
  );
};

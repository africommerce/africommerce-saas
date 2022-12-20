import {
  Facebook,
  Google,
  Twitter,
  VerifiedUser,
  YouTube,
} from '@mui/icons-material';
import { Divider, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductCardLanscape } from './ProductCardLanscape';
import { ProductTabs } from './ProductTabs';
import { RelatedProduct } from './RelatedProduct';

const Container = styled.div`
  display: flex;
  width: 90vw;
  max-width: 100%;
  margin: 0 auto;
  gap: 1rem;
  /* align-items: center; */
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 5px;
`;

const Left = styled.div`
  display: flex;
  flex: 2;
  gap: 1rem;
  flex-direction: column;
  max-width: 300px;
`;
const Right = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex: 6;
  width: auto;
  max-width: 80%;
`;

const SellerInfo = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;

  .customers-review {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-direction: column;
  }
`;
const SellerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const SellerAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  a {
    text-decoration: none;
    color: black;
  }
  .head {
    font-weight: bolder;
  }
  .address {
    font-size: 15px;
  }
`;
const SellerRating = styled.div``;
const SellerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
  }
  .visit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    text-decoration: none;
    font-weight: bolder;
    color: rgb(255, 0, 0);
    background: rgb(252, 224, 217);
    &:hover {
      background: rgb(255, 0, 0);
      color: rgb(252, 224, 217);
    }
  }
  .social {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
const Top = styled.div`
  display: flex;
  font-weight: bolder;
  font-size: 1rem;
`;
const TopSellingProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 1rem;
`;
export const ProductButtom = () => {
  return (
    <Container>
      <Left>
        <SellerInfo>
          <SellerHead>
            <div className="left">Sold by</div>
            <div className="right">
              <VerifiedUser
                style={{
                  color: 'rgb(248,181,23)',
                }}
              />
            </div>
          </SellerHead>
          <SellerAddress>
            <Link to="/seller">
              <div className="head">Africommerce</div>
            </Link>
            <div className="address">
              Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257)
              563-7401
            </div>
          </SellerAddress>
          <SellerRating>
            {' '}
            <div className="customers-review">
              <Rating />
              <span> (0 customer reviews)</span>
            </div>
          </SellerRating>
          <SellerFooter>
            <Link className="visit" to="/seller">
              Visit Store{' '}
            </Link>

            <div className="social">
              <Facebook style={{ cursor: 'pointer' }} />
              <Google style={{ cursor: 'pointer' }} />
              <Twitter style={{ cursor: 'pointer' }} />
              <YouTube style={{ cursor: 'pointer' }} />
            </div>
          </SellerFooter>
        </SellerInfo>
        <TopSellingProducts>
          <Top>Top Selling Products</Top>
          <Divider />
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <>
              <ProductCardLanscape />
              <Divider />
            </>
          ))}
        </TopSellingProducts>
      </Left>
      <Right>
        <RightTop>
          <ProductTabs />
        </RightTop>
        <RelatedProducts>
          {' '}
          <RelatedProduct />
        </RelatedProducts>
        <ProductQueries>
          {' '}
          <div className="header">Product Queries (0)</div>
          <Divider />
          <div className="body">
            <div className="auth">
              <Link to={`/auth`}> Login</Link> or{' '}
              <Link to={`/auth`}> Register</Link>to submit your questions to
              seller
            </div>
            <div className="other__questions">Other Questions</div>
          </div>
          <Divider />
          <div className="footer">No none asked to seller yet</div>
        </ProductQueries>
      </Right>
    </Container>
  );
};

const RightTop = styled.div`
  padding: 10px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;
const RelatedProducts = styled.div`
  background: white;
  padding: 10px;
  width: auto;
  max-width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  display: flex;
`;
const ProductQueries = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  background: white;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  .header {
    display: flex;
    font-weight: bold;
  }
  .body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

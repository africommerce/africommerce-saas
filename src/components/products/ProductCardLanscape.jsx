import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopBody = styled.div`
  display: flex;
  align-items: center;

  .image {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      max-width: 100px;
    }
  }
  .detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: space-between;
    .price {
      font-weight: bold;
      color: rgb(230, 46, 4);
    }
  }
`;
export const ProductCardLanscape = () => {
  return (
    <>
      <Link style={{ textDecoration: 'none', color: 'gray' }} to="/">
        <TopBody>
          <div className="image">
            {' '}
            <img src="../../assets/watch_2.webp" alt="" />
          </div>
          <div className="detail">
            <span>Wrist Watch</span>
            <span>
              <Rating />
            </span>
            <span className="price">${(433).toFixed(3)}</span>
          </div>
        </TopBody>
      </Link>
    </>
  );
};

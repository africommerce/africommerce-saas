import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';

const SearchNavbars = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 2em;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
  padding: 1em;

  border-color: var(--soft-secondary) !important;
  border-bottom: 1px solid #dee2e6 !important;
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const SearchContainer = styled.div`
  justify-content: center;
  display: flex;
  flex: 3;
  align-items: center;
  margin: 0 !important;
  

  .form-group-container {
    display: flex;
    align-items: center;

    .form-search input {
      padding: 0.73em;
      border: 1px solid #eee;
      width: 30em;
      font-size: 15px;
      color: gray;
      border-radius: 4px 0 0 4px;
      outline: none;

      &::placeholder {
        font-size: inherit;
        transition: all 300ms ease-in-out;
        text-transform: capitalize;
      }
    }

    .form-icon-btn {
      background-color: red;
      padding: 0.5em 1em;
      color: white !important;
      border-radius: 0 4px 4px 0;
      min-height: 20px;
    }
  }
`;

const Options = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  gap: 1em;

  .options-list {
    display: flex;
    align-items: center;
    gap: 0.2em;
  }
`;
const Logo = styled.img`
  max-width: 150px;
`;

const Iname = styled.p`
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 400;
`;
export const SearchNavbar = () => {
  // CART FROM STORE CART SLICE
  // const cart = useSelector((state) => state.cart.items.length);

  return (
    <SearchNavbars>
      <LogoContainer className="logo">
        <Logo src="../../assets/logo.png" />
      </LogoContainer>
      <SearchContainer>
        <form>
          <div className="form-group-container">
            <div className="form-search">
              <input placeholder="search for your products" />
            </div>
            <div className="form-icon-btn">
              <SearchIcon />
            </div>
          </div>
        </form>
      </SearchContainer>
      <Options className="options">
        <div className="options-list">
          <div>
            <FlipCameraAndroidIcon />
          </div>
          <div>
            <Iname>Compare</Iname>
          </div>
        </div>
        <div className="options-list">
          <div>
            <FavoriteBorderIcon />
          </div>
          <div>
            <Iname>Wishlist</Iname>
          </div>
        </div>
        <div className="options-list" style={{ cursor: 'pointer' }}>
          <div>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
          <div>
            <Iname>Cart</Iname>
          </div>
        </div>
      </Options>
    </SearchNavbars>
  );
};

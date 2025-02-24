import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BottomNavbars = styled.div`
  padding: 1em 0;
  text-align: center;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2em;
    @media only screen and (max-device-width: 780px) and (-webkit-min-device-pixel-ratio: 1) {
      max-width: 510px;
      overflow-x: scroll;
    }

    a {
      flex-shrink: 0;
      text-decoration: none;
      color: gray;
    }
  }
`;

export const BottomNavbar = () => {
  return (
    <BottomNavbars>
      <ul>
        {' '}
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/flash-sale">
          <li>Flash Sale</li>
        </Link>
        <Link to="/blog">
          <li>Blogs</li>
        </Link>
        <Link to="/all-brands">
          <li>All Brands</li>
        </Link>
        <Link to="/all-categories">
          {' '}
          <li>All Categories</li>
        </Link>
        <Link to="/all-sellers">
          <li>All Sellers</li>
        </Link>
        <Link to="/coupons">
          {' '}
          <li>Coupons</li>
        </Link>
      </ul>
    </BottomNavbars>
  );
};

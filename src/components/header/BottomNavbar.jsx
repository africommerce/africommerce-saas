import React from 'react';
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
  }
`;

export const BottomNavbar = () => {
  return (
    <BottomNavbars>
      <ul>
        {' '}
        <li>Home</li>
        <li>Flash Sale</li>
        <li>Blogs</li>
        <li>All Brands</li>
        <li>All Categories</li>
        <li>All Sellers</li>
        <li>Coupons</li>
      </ul>
    </BottomNavbars>
  );
};

import React from 'react';
import styled from 'styled-components';
import { BottomNavbar } from './BottomNavbar';
import { TopNavbar } from './TopNavbar';
import { SearchNavbar } from './SearchNavbar';

const Navbar = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  background: rgb(255, 255, 255);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-bottom: 1px solid #dee2e6 !important;
  margin: 0 auto;
`;

export const NavBar = () => {
  return (
    <>
      <Navbar>
        <div style={{ borderBottom: '0.1px solid rgb(204 204 204 / 52)' }}>
          <TopNavbar />
        </div>
        <hr />
        <div style={{ borderBottom: '0.1px solid rgb(204 204 204 / 52)' }}>
          <SearchNavbar />
        </div>
        <div style={{ borderBottom: '0.1px solid rgb(204 204 204 / 52)' }}>
          <BottomNavbar />
        </div>
      </Navbar>
    </>
  );
};

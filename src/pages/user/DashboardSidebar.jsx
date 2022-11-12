import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import DownloadIcon from '@mui/icons-material/Download';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DiamondIcon from '@mui/icons-material/Diamond';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import GavelIcon from '@mui/icons-material/Gavel';
import ChatIcon from '@mui/icons-material/Chat';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupportIcon from '@mui/icons-material/Support';
import PersonIcon from '@mui/icons-material/Person';
import styled from 'styled-components';

const Wraps = styled.div`
  margin: 1rem auto;
  padding: 1rem;
`;

const Nav = styled(NavLink)`
  margin-left: 20px;
  text-decoration: none;
`;

const PersonDetails = styled.div`
 box-sizing: border-box;
  background-color: #e62e04;
  padding: 2rem;
`;

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  top: 0;
  padding: 2rem;
  align-items:center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  line-height: 19.5px;
  color: rgb(99, 102, 107);
  /* margin: 0 auto; */
  background: #fff;
`;

const Content = styled.div`
  text-decoration: none;
  margin-bottom: 3%;
  /* margin: 0 auto; */
  &:hover {
    border: 1pc solid #fbe0da;
    background-color: #fbe0da;
  }
`;


function DashboardSidebar() {
  return (
    <Wraps>
      <PersonDetails>
        <img src="" />
        <h3>Paul K. Jensen</h3>
        <p>208-295-8053</p>
      </PersonDetails>
      <Container>
        <Content>
          <HomeIcon />
          <Nav to ="/dashboard">Dashboard</Nav>
        </Content>
        <Content>
          {' '}
          <RequestPageIcon />
          <Nav to="/purchase-history">Purchase History</Nav>
        </Content>
        <Content>
          <DownloadIcon />
          <Nav to="downloads">Download</Nav>
        </Content>
        <Content>
          <FastRewindIcon />
          <Nav>Sent Refund Request</Nav>
        </Content>
        <Content>
          <FavoriteBorderIcon />
          <Nav to="/wishlist">Wishlist</Nav>
        </Content>
        <Content>
          <AutorenewIcon />
          <Nav>Compare</Nav>
        </Content>
        <Content>
          <DiamondIcon />
          <Nav>Classified Products</Nav>
        </Content>
        <Content>
          <GavelIcon />
          <Nav>Auction</Nav>
        </Content>
        <Content>
          <ChatIcon />
          <Nav>Conversations</Nav>
        </Content>
        <Content>
          <AttachMoneyIcon />
          <Nav>My Wallet</Nav>
        </Content>
        <Content>
          <AttachMoneyIcon />
          <Nav>Earning Points</Nav>
        </Content>
        <Content>
          <AttachMoneyIcon />
          <Nav>Affliate</Nav>
        </Content>
        <Content>
          <SupportIcon />
          <Nav>Support Ticket</Nav>
        </Content>
        <Content>
          <PersonIcon />
          <Nav>Manage Profile</Nav>
        </Content>
      </Container>
    </Wraps>
  );
}

export default DashboardSidebar;

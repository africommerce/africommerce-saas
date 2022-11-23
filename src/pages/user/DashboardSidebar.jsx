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
  width: 220px;
  margin: 0 auto;
  padding: 1rem;
  font-family: 'Open Sans', sans-serif !important;
`;

const Profilepic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Nav = styled(NavLink)`
  margin-left: 20px;
  margin-bottom:8px;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  font-weight: 500;
  line-height: 19.5px;
  color: rgb(99, 102, 107);
  box-sizing: border-box;
`;

const PersonDetails = styled.div`
  box-sizing: border-box;
  background-color: #e62e04;
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  line-height: 19.2px;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: rgb(255, 255, 255);
`;

const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  top: 0;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif !important;
  font-size: 13px;
  line-height: 19.5px;
  color: rgb(99, 102, 107);
  background: #fff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  margin: 0 auto;
  &:hover {
    background-color: #fbe0da;
  }
`;

function DashboardSidebar() {
  return (
    <Wraps>
      <PersonDetails>
        <Profilepic
          src="https://tulikettu.me/wp-content/uploads/2022/03/TK-temp20-1080x1080-1.jpg"
          alt="person's page"
        />
        <h3>Paul K. Jensen</h3>
        <p>208-295-8053</p>
      </PersonDetails>
      <Container>
        <Content>
          <div>
            <HomeIcon />
          </div>
          <div style={{marginBottom:"3%"}}>
            <Nav to="/user/dashboard">Dashboard</Nav>
          </div>
        </Content>
        <Content>
          {' '}
          <RequestPageIcon />
          <Nav to="/user/purchase-history">Purchase History</Nav>
        </Content>
        <Content>
          <DownloadIcon />
          <Nav to="/user/download">Download</Nav>
        </Content>
        <Content>
          <FastRewindIcon />
          <Nav to="/user/sent-refund">Sent Refund Request</Nav>
        </Content>
        <Content>
          <FavoriteBorderIcon />
          <Nav to="/user/wishlist">Wishlist</Nav>
        </Content>
        <Content>
          <AutorenewIcon />
          <Nav to="/user/compare">Compare</Nav>
        </Content>
        <Content>
          <DiamondIcon />
          <Nav to="/user/classified-products">Classified Products</Nav>
        </Content>
        <Content>
          <GavelIcon />
          <Nav to="/user/auction-bidded">Auction</Nav>
        </Content>
        <Content>
          <ChatIcon />
          <Nav to="/user/conversation">Conversations</Nav>
        </Content>
        <Content>
          <AttachMoneyIcon />
          <Nav to="/user/wallet">My Wallet</Nav>
        </Content>
        <Content>
          <AttachMoneyIcon />
          <Nav to="/user/earning-point">Earning Points</Nav>
        </Content>
        <Content>
          <AttachMoneyIcon />
          <Nav to="/user/affliate">Affliate</Nav>
        </Content>
        <Content>
          <SupportIcon />
          <Nav to="/user/support">Support Ticket</Nav>
        </Content>
        <Content>
          <PersonIcon />
          <Nav to="/user/manageprofile">Manage Profile</Nav>
        </Content>
      </Container>
    </Wraps>
  );
}

export default DashboardSidebar;

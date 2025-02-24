import React, { useContext } from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/authContext';
import { NotificationAdd, NotificationsOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

const TopNavbars = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  border-color: var(--soft-secondary) !important;
`;

const Container1 = styled.div`
  display: flex !important;
  align-items: center;
  gap: 2em;
  text-align: center;
  list-style: none;
  flex: 1;
  @media only screen and (max-device-width: 1000px) and (-webkit-min-device-pixel-ratio: 1) {
    justify-content: space-between;
    padding: 10px;
  }
`;

const List1 = styled.div`
  display: flex;
  align-items: center;
  color: #333;
  opacity: 0.8;
  font-weight: 400;

  p {
    padding: 0;
    font-size: 13px;
  }
`;

const List2 = styled.div`
  display: flex;
  align-items: center;
  color: #333;
  opacity: 0.8;
  font-weight: 400;

  p {
    font-size: 13px;
    padding: 0;
  }
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-device-width: 1000px) and (-webkit-min-device-pixel-ratio: 1) {
    display: none;
  }
`;

const Phone = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #333;
  opacity: 0.8;
  font-weight: 400;
`;

const Log = styled.div`
  font-size: 13px;
  color: #333;
  opacity: 0.8;
  font-weight: 400;
`;

const Reg = styled.div`
  font-size: 13px;
  color: #333;
  opacity: 0.8;
  font-weight: 400;
`;

const Line = styled.div`
  height: 40px;
  background-color: rgb(204, 204, 204);
  width: 1px;
  margin-right: 30px;
  margin-left: 20px;
`;

const Span = styled.div`
  margin-left: 10px;
`;

export const TopNavbar = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <>
      {' '}
      <TopNavbars>
        <Container1>
          <List1>
            {/* <img src="" alt="" /> */}
            <p>English</p>
            <span>
              <ArrowDropDownIcon />
            </span>
          </List1>
          <List2>
            {/* <img src="" alt="" /> */}
            <p> U.SDollar</p>
            <ArrowDropDownIcon />
          </List2>
        </Container1>
        <Container2>
          <Phone>
            <PhoneIcon style={{ fontSize: '13px' }} />
            <Span>Helps Line +903 343333</Span>
          </Phone>

          {authCtx.isLoggedIn && <Line />}
          {authCtx.isLoggedIn && (
            <Link to="/auth" style={{ textDecoration: 'none' }}>
              <Reg>
                <Badge badgeContent={4} color="primary">
                  <NotificationsOutlined />
                </Badge>
              </Reg>
            </Link>
          )}
          <Line />
          {!authCtx.isLoggedIn && (
            <Link to="/auth" style={{ textDecoration: 'none' }}>
              <Reg>Registration</Reg>
            </Link>
          )}

          {authCtx.isLoggedIn && (
            <Link to="/user" style={{ textDecoration: 'none' }}>
              <Reg>My Panel</Reg>
            </Link>
          )}
          <Line />
          {!authCtx.isLoggedIn && (
            <Link to="/auth/login" style={{ textDecoration: 'none' }}>
              <Log>Login</Log>
            </Link>
          )}
          {authCtx.isLoggedIn && (
            <Link
              to="/"
              onClick={logoutHandler}
              style={{ textDecoration: 'none' }}
            >
              <Log>Logout</Log>
            </Link>
          )}
        </Container2>
      </TopNavbars>
    </>
  );
};

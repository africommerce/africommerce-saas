import React from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';

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
`;

const List1 = styled.div`
  display: flex;
  align-items: center;
  color: #333;
  opacity: 0.8;
  font-weight: 400;

  p {
    font-size: 13px;
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
    font-size: 13px;
  }
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  return (
    <>
      {' '}
      <TopNavbars>
        <Container1>
          <List1>
            <img src="" alt="" />
            <p>English</p>
            <ArrowDropDownIcon />
          </List1>
          <List2>
            <img src="" alt="" />
            <p> U.SDollar</p>
            <ArrowDropDownIcon />
          </List2>
        </Container1>
        <Container2>
          <Phone>
            <PhoneIcon style={{ fontSize: '13px' }} />
            <Span>Helps Line +903 343333</Span>
          </Phone>
          <Line></Line>
          <Log>Login</Log>
          <Line></Line>
          <Reg>Registration</Reg>
        </Container2>
      </TopNavbars>
    </>
  );
};

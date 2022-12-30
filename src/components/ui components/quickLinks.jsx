import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Content = styled.section`
  margin: 20px;
  cursor: default;
  display: flex;
  flex-direction: column;
`;
export const Heading = styled.h3`
  font-size: 12px;
`;

export const ListItem = styled.li`
  list-style: none;
  text-align: left;
  line-height: 0.6rem;
  margin-bottom: 20px;
  color: #f2f3f8;
  cursor: default;
`;
export const Details = styled.div`
  margin-top: 20px;
  padding-top: 10px;
`;
export const Links = styled(Link)`
  color: #f2f3f8;
  text-decoration: none;
  opacity: 0.5;
`;
export const QuickLinks = () => {
  return (
    <Content>
      <Heading>QUICK LINKS</Heading>
      <Divider
        style={{ color: 'white', background: 'gray', marginTop: '1rem' }}
      />
      <Details>
        <ListItem>
          <Links to="/support-policy">Support Policy Page</Links>
        </ListItem>
        <ListItem>
          <Links to="/return-policy">Return Policy Page</Links>
        </ListItem>
        <ListItem>
          <Links to="/about-us">About Us</Links>
        </ListItem>
        <ListItem>
          <Links to="/privacy-policy">Privacy Policy Page</Links>
        </ListItem>
        <ListItem>
          <Links to="/sellers-policy">Seller Policy Page</Links>
        </ListItem>
        <ListItem>
          <Links to="/terms">Terms Conditions Page</Links>
        </ListItem>
      </Details>
    </Content>
  );
};

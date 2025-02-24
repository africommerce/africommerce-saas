import { MyAccount } from './ui components/myAccount';
import { QuickLinks } from './ui components/quickLinks';
import { ContactInfo } from './ui components/contactInfo';
import { Subscribe } from './ui components/subscribe';
import { FooterEnd } from './ui components/footerEnd';
import { Policy } from './ui components/policy';

import { Grid } from '@mui/material';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  margin: 0;
  background-color: #111723;
  padding: 30px;
  color: #fff;
  font-size: 13px;
  font-family: 'sens-sarif';
`;

export const Footer = () => {
  return (
    <main style={{ marginTop: '10px' }}>
      <Policy />
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4} sm={9}>
            <Subscribe />
          </Grid>
          <Grid item md={2} sm={9}>
            <ContactInfo />
          </Grid>
          <Grid item md={3} sm={9}>
            <QuickLinks />
          </Grid>
          <Grid item md={3} sm={9}>
            <MyAccount />
          </Grid>
        </Grid>
      </Container>
      <FooterEnd />
    </main>
  );
};

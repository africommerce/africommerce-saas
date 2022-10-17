import { ListItem } from './quickLinks';

import {Stack, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styled from 'styled-components';

import PaymentsLogo from '../../assests/payments.png';

const LogoImg = styled.img`
  width: 200px;
  max-width: 250px;
`;

const FooterSection = styled.section`
  border-top: 1px solid black;
  margin-top: 0.5px;
  padding: 10px;
  padding-top: 20px;
  padding-left: 50px;
  color: #fff;
  background-color: #0d111b;
  font-size: 13px;
  font-family: 'sens-sarif';
`;

export const FooterEnd = () => {
  return (
    <FooterSection>
      <Grid spacing={1} container>
        <Grid item md={4} sm={12}>
          <div style={{marginLeft:"10px"}}>@ Active eCommerce CMS 2021</div>
        </Grid>
        <Grid item md={4} sm={12}>
          <Stack direction="row">
            <ListItem>
              <IconButton style={{ color: '#3b5998' }}>
                <FacebookIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton style={{ color: '#1da1f2' }}>
                <TwitterIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton style={{ color: '#bd32a2' }}>
                <InstagramIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton style={{ color: '#ff0000' }}>
                <YouTubeIcon />
              </IconButton>
            </ListItem>
            <ListItem>
              <IconButton style={{ color: '#0070ac' }}>
                <LinkedInIcon />
              </IconButton>
            </ListItem>
          </Stack>
        </Grid>
        <Grid item md={4} sm={12}>
          <LogoImg src={PaymentsLogo} alt="payments_logo"></LogoImg>
        </Grid>
      </Grid>
    </FooterSection>
  );
};

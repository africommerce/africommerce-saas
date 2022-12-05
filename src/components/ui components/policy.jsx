import { Links } from './quickLinks';

import { Grid } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import ReplyIcon from '@mui/icons-material/Reply';
import SupportIcon from '@mui/icons-material/Support';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import styled from 'styled-components';

const PolicySection = styled.section`
  margin: 0;
  max-width: 100%;
  background-color: #fff;
  margin-top: 50px;
  font-size: 13px;
  font-family: 'sens-sarif';
`;

export const Policy = () => {
  return (
    <PolicySection>
      <Grid container spacing={2}>
        <Grid
          item
          md={1}
          xs={12}
          style={{
            borderTop: '1px solid #dee2e6',
            borderRight: '1px solid #dee2e6',
            padding: '30px',
            textAlign: 'center',
          }}
        ></Grid>
        <Grid
          item
          md={2.5}
          xs={12}
          style={{
            borderTop: '1px solid #dee2e6',
            borderRight: '1px solid #dee2e6',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <Links to="/terms" style={{ color: 'red' }}>
            <DescriptionIcon />
            <p style={{ color: '#000' }}>Terms and Conditions</p>
          </Links>
        </Grid>
        <Grid
          item
          md={2.5}
          xs={12}
          style={{
            borderTop: '1px solid #dee2e6',
            borderRight: '1px solid #dee2e6',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <Links terms="/return" style={{ color: 'red' }}>
            <ReplyIcon />
            <p style={{ color: '#000' }}>Return Policy</p>
          </Links>
        </Grid>
        <Grid
          item
          md={2.5}
          xs={12}
          style={{
            borderTop: '1px solid #dee2e6',
            borderRight: '1px solid #dee2e6',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <Links terms="/support" style={{ color: 'red' }}>
            <SupportIcon />
            <p style={{ color: '#000' }}>Support Policy</p>
          </Links>
        </Grid>
        <Grid
          item
          md={2.5}
          xs={12}
          style={{
            borderTop: '1px solid #dee2e6',
            borderRight: '1px solid #dee2e6',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          <Links to="/privacy" style={{ color: 'red' }}>
            <ErrorOutlineIcon />
            <p style={{ color: '#000' }}>Privacy Policy</p>
          </Links>
        </Grid>
        <Grid
          item
          md={1}
          xs={12}
          style={{
            borderTop: '1px solid #dee2e6',
            padding: '30px',
            textAlign: 'center',
          }}
        ></Grid>
      </Grid>
    </PolicySection>
  );
};

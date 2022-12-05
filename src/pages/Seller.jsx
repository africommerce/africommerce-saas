import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Rating } from '@mui/material';
import styled from 'styled-components';
import { SellerHome } from '../components/seller/SellerHome';
import { SellerTopSellPage } from '../components/seller/SellerTopSellPage';
import { SellerAllProducts } from '../components/seller/SellerAllProducts';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{ borderBottom: 1, borderColor: 'divider', background: 'white' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{ background: 'white', width: '80%', margin: '0 auto' }}
        >
          <Tab
            style={{
              fontWeight: 'bold',
              color: 'black',
              textTransform: 'capitalize',
              fontSize: '1rem',
            }}
            label="Store Home"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              fontWeight: 'bold',
              color: 'black',
              textTransform: 'capitalize',
              fontSize: '1rem',
            }}
            label="Top Selling"
            {...a11yProps(1)}
          />
          <Tab
            style={{
              fontWeight: 'bold',
              color: 'black',
              textTransform: 'capitalize',
              fontSize: '1rem',
            }}
            label="All Products"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SellerHome />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SellerTopSellPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SellerAllProducts />
      </TabPanel>
    </Box>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100vw;
  max-width: 100%;
  margin: 0 auto;
  /* gap: 1rem; */
  position: relative;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: white;
  min-height: 150px;

  gap: 1rem;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    img {
      display: flex;
      width: auto;
      align-items: center;
      max-width: 50px;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    height: 100%;

    gap: 5px;
    .title {
      display: flex;
      font-weight: bolder;
      font-size: 1rem;
      text-transform: uppercase;
      flex-wrap: wrap;
    }
  }
`;

export const Seller = () => {
  return (
    <Container>
      <Header>
        <div className="logo">
          <img src="../../assets/logo2.png" alt="" />
        </div>
        <div className="info">
          <span className="title">Africommerce</span>
          <span className="rating">
            <Rating />
          </span>
          <span className="address">
            Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257)
            563-7401
          </span>
        </div>
      </Header>
      <Divider />

      <Divider />
      <BasicTabs />
    </Container>
  );
};

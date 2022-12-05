import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import styled from 'styled-components';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

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

export default function TopsellingCard() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=20').then((res) => {
      setData(res.data);
    });
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          width: '100%',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={{
              color: 'black',
              fontSize: '1.4rem',
              fontWeight: '800',
              textTransform: 'capitalize',
            }}
            label="Top Selling"
            {...a11yProps(0)}
          />
        </Tabs>
      </Box>
      <TabPanel style={{ position: 'relative' }} value={value} index={0}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            position: 'relative',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {data.map((el) => (
            <Card key={el.id}>
              <Link
                to={`/product/${el.id}`}
                style={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                <div className="top">
                  <img src={el.image} alt="" />
                </div>
                <div className="bottom">
                  <span className="price">${el.price.toFixed(3)}</span>
                  <span className="rating">
                    <Rating value={el.rating.rate} />
                  </span>
                  <span className="title">{el.title}</span>
                  <span className="club-point">
                    <span>Club Point:</span>
                    <span>{el.rating.count}</span>
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </TabPanel>
    </Box>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 200px;
  width: auto;
  margin: 0 auto;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 120px;
      height: 120px;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .price {
      font-weight: bolder;
      color: rgb(255, 0, 0);
      font-size: 1.2rem;
    }
    .title {
      display: flex;
      font-weight: bold;
    }
    .club-point {
      display: flex;
      justify-content: space-between;
      background: rgb(252, 224, 217);
      padding: 5px;
      border-radius: 5px;
    }
  }
`;

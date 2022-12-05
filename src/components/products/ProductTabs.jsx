import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export const ProductTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            style={{
              fontWeight: 'bolder',
              fontSize: '1rem',
              color: 'black',
              textTransform: 'capitalize',
            }}
            label="Description"
            {...a11yProps(0)}
          />
          <Tab
            label="Video"
            style={{
              fontWeight: 'bolder',
              fontSize: '1rem',
              color: 'black',
              textTransform: 'capitalize',
            }}
            {...a11yProps(1)}
          />
          <Tab
            label="Reviews"
            {...a11yProps(2)}
            style={{
              fontWeight: 'bolder',
              fontSize: '1rem',
              color: 'black',
              textTransform: 'capitalize',
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ul>
          <li>Care Instructions: Machine Wash</li>
          <li>Fit Type: Regular</li>
          <li>
            Pattern : Solid print jogger set | Sleeves Type : Full Sleeves |
            Neck-Type- Round Neck|Color : Navy Blue
          </li>
          <li>Fabric : Top and Bottom :100% cotton</li>
          <li>
            Fit Type: Regular (Relaxed) Fit. Please refer Size Chart or perfect
            fit nightwear.
          </li>
          <li>
            Package Contents : 1 Pair of Night Suit/Lounge wear set (1 Jogger, 1
            Top)
          </li>
          <li>
            Wash care instructions: Turn garments inside out before machine
            washing and Ironing. Do not Iron on Decoration. Wash
          </li>
          <li>
            Dark Colors Separately. Do not tumble dry. Line dry. Do not bleach.
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <video src="" width="50%" height="50%" controls autoPlay="true"></video>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>There have been no reviews for this product yet.</div>
      </TabPanel>
    </Box>
  );
};

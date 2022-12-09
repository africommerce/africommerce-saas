import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { Button, Divider } from '@mui/material';
import classes from './AdminFooter.module.css';
import logo from '../../../assests/admin/logo.png';
import { Close } from '@mui/icons-material';
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

export default function BasicTabs() {
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
          <Tab label="English" {...a11yProps(0)} />
          <Tab label="Bangla" {...a11yProps(1)} />
          <Tab label="Arabic" {...a11yProps(2)} />
          <Tab label="French" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack direction={'column'}>
          <Stack direction={'row'}>Footer Widget</Stack>
          <Divider />
          <Stack direction={'row'} display={'flex'} spacing={2}>
            <Stack
              direction={'column'}
              bgcolor={'rgb(242,243,248)'}
              flex={'1'}
              style={{ width: '100%' }}
            >
              <Box sx={{ padding: '0.51rem', fontWeight: 'bold' }}>
                About Widget
              </Box>
              <Divider />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <form className={classes.about_form}>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>Footer Logo</label>
                    </span>
                    <span className={classes.form_input}>
                      <span className={classes.btn_wrapper}>
                        <Button
                          sx={[
                            {
                              background: 'rgb(227,230,237)',
                              transition: 'all 300ms ease',
                              color: 'black',
                              boxShadow: 'none',
                              textTransform: 'none',
                              '&:hover': {
                                background: 'rgb(227,230,237)',
                                color: 'black',
                                boxShadow: 'none',
                              },
                            },
                          ]}
                          variant="contained"
                          component="upload"
                        >
                          Browse
                          <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <span className={classes.logo_input}>
                          1 File Selected
                        </span>
                      </span>
                      <span className={classes.footer_img}>
                        <img src={logo} alt="" />
                        <span style={{ dispay: 'flex', flexWrap: 'wrap' }}>
                          TOsJZbcQEJ17LVpSulYq2LXlmhJ8xEwCPNxaA6FY .png
                        </span>
                        <span>
                          <Close sx={[{ fontSize: '12px' }]} />
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>About description (Translatable)</label>
                    </span>
                    <span className={classes.form_input}>
                      <textarea
                        className={classes.textArea_input}
                        style={{ width: '100px', padding: '0.2rem' }}
                        placeholder="1 File Selected"
                      />
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>Play Store Link</label>
                    </span>
                    <span className={classes.form_input}>
                      <input
                        className={classes.textArea_input}
                        placeholder="#"
                      />
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>App Store Link</label>
                    </span>
                    <span className={classes.form_input}>
                      <input
                        className={classes.textArea_input}
                        placeholder="#"
                      />
                    </span>
                  </span>
                </form>
              </Box>
            </Stack>
            <Stack
              direction={'column'}
              bgcolor={'rgb(242,243,248)'}
              flex={'1'}
              style={{ width: '100%' }}
            >
              <Box sx={{ padding: '0.51rem', fontWeight: 'bold' }}>
                Contact Info Widget
              </Box>
              <Divider />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <form className={classes.about_form}>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>Contact address (Translatable)</label>
                    </span>
                    <span className={classes.form_input}>
                      <input className={classes.textArea_input} value="demo" />
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>Contact phone</label>
                    </span>
                    <span className={classes.form_input}>
                      <input
                        type="phone"
                        className={classes.textArea_input}
                        value={'1232323232'}
                      />
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <span className={classes.form_label}>
                      <label>Contact phone</label>
                    </span>
                    <span className={classes.form_input}>
                      <input
                        type="email"
                        className={classes.textArea_input}
                        value={'demo@example.com'}
                      />
                    </span>
                  </span>
                  <span className={classes.form_group}>
                    <Button
                      sx={[
                        {
                          background: 'orange',
                          color: 'white',
                          width: 'fitConent',
                          '&:hover': {
                            background: 'orange',
                            color: 'white',
                            width: 'fitConent',
                          },
                        },
                      ]}
                    >
                      Update
                    </Button>
                  </span>
                </form>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

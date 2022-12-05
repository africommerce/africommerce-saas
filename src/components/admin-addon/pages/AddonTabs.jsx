import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import classes from './AdminAddonManager.module.css';
export default function AddonTabs() {
  const [value, setValue] = React.useState('Install Addon');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack direction={'column'} spacing={3} padding={2}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {' '}
        <Box sx={{ width: '50%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="Install Addon" label="Install Addon" />
            <Tab value="Available Addon" label="Available Addon" />
          </Tabs>
        </Box>
        <Box
          sx={{ width: '50%', gap: '2rem' }}
          display={'flex'}
          justifyContent={'center'}
        >
          <span className={classes.button}>
            <button>Activate Addon Link</button>
          </span>
          <span className={classes.button}>
            <button>Install/Update Addon</button>
          </span>
        </Box>
      </div>
    </Stack>
  );
}

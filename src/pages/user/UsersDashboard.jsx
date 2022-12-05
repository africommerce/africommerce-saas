import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import WhiteBox from './components/whiteBox';
import PurpleBox from './components/whiteBox';
import classes from '../../styles/users.module.css';

const Dashboard = () => (
      <div>
        <Box >
          <div className={classes.SystemBoxes}>
            <PurpleBox
              caption="Affiliate Balance"
              value="$10, 000"
              symbol="$"
            />

            <WhiteBox caption="Configure Payout" icon="Settings" />
            <WhiteBox caption="Withdrawal Request" icon="Plus" />
          </div>
        </Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <div>1</div>
          </Grid>
          <Grid item xs={6}>
            <div>2</div>
          </Grid>
        </Grid>
      </div>
);

export default Dashboard;

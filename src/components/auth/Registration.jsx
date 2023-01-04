import React from 'react';
import TextField from '@mui/material/TextField';

import { Typography, Button, Box, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f2f3f8',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        gap={2}
        sx={{
          width: 400,
          height: '35rem',
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          borderRadius: '6px',
          boxShadow: 1,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          marginBottom={2}
          textAlign="center"
        >
          Create an Account
        </Typography>
        <TextField
          id="filled-disabled"
          label="Full Name"
          type="text"
          variant="outlined"
          size="small"
        />
        <TextField
          id="filled-disabled"
          label="Phone Number"
          variant="outlined"
          type="phone"
          name="phone"
          size="small"
        />
        <Typography variant="h7" textAlign="end" color="#8D8D93">
          Use Email Instead
        </Typography>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          size="small"
        />
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          size="small"
        />
        <Typography variant="h7" color="#8D8D93">
          {<Checkbox />}
          By Signing Up You agree to Our Termas and Condition
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#E62E04',
            '&:hover': {
              backgroundColor: '#dd2c04',
            },
          }}
        >
          Create Account
        </Button>
        <Box textAlign="center" paddingTop="20px">
          <Typography variant="h7" color="#8D8D93">
            Already have an account?
          </Typography>
          <Box sx={{ typography: 'body1' }}>
            <Link
              to="/auth/login"
              sx={{ color: '#E62E04', textDecoration: 'none' }}
            >
              Login
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Registration;

import React, { useCallback, useEffect, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';

import {
  Typography,
  Button,
  Box,
  Checkbox,
  Alert,
  AlertTitle,
} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const [mailSwitch, setMailSwitch] = useState(false);
  let [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const isInvalidHandler = () => {
    setTimeout(() => {
      setIsInvalid(false);
    }, 7000);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    

    fetch(`https://africommerce.cyclic.app/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        firstname: firstname,
        lastname: lastName,
        email: email,
        password: password,
        phonenumber: phone,
      }),
    }).then((res) => {
      if (res.ok) {
        console.log(res);
        return res;
      }
    });
    // axios
    //   .post('https://africommerce.cyclic.app/users/signup', {
    // username: username,
    // firstname: firstname,
    // lastname: lastName,
    // email: email,
    // password: password,
    // phonenumber: phone,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // const response = await axios.post(
    //   'https://africommerce.cyclic.app/users/signup',
    //   { enteredData }
    // );
    // const data = await response;
    // console.log(data);

    // setUsername(e.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f2f3f8',
        display: 'flex',
        height: 'auto',
        justifyContent: 'center',
      }}
    >
      <Box
        gap={2}
        sx={{
          width: 400,
          height: 'auto',
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
        <form
          onSubmit={submitHandler}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <TextField
            id="filled-disabled"
            label="Username"
            required
            type="text"
            value={username}
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
            size="small"
          />
          <TextField
            id="filled-disabled"
            label="First Name"
            type="text"
            variant="outlined"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            size="small"
          />
          <TextField
            id="filled-disabled"
            label="Last Name"
            type="text"
            variant="outlined"
            size="small"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            id="filled-disabled"
            label="Email"
            type="email"
            variant="outlined"
            size="small"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="filled-disabled"
            label="Phone"
            type="tel"
            variant="outlined"
            size="small"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <Typography
            variant="h7"
            sx={{
              textDecoration: 'underline',
              width: 'fitContent',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
            textAlign="end"
            color="#8D8D93"
          >
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setMailSwitch((prev) => !prev)}
            >
              Use Email Instead
            </span>
          </Typography>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            size="small"
          />
          <TextField
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="current-password"
            size="small"
          />
          <span></span>
          <Typography variant="h7" color="#8D8D93">
            {<Checkbox />}
            By Signing Up You agree to Our Termas and Condition
          </Typography>
          <Button
            type="submit"
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
        </form>
      </Box>
      {isInvalid && (
        <span
          style={{ position: 'absolute', transition: 'all ease-in-out 2sm' }}
        >
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Invalid Credentials — <strong>check it out!</strong>
          </Alert>
        </span>
      )}
    </Box>
  );
};

export default Registration;

import React, { useState } from 'react';
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

  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setIsInvalid(true);
      return;
    }
    axios.post('https://africommerce.cyclic.app/users/signup', formData)
      .then((res) => {
        console.log(res.data);
        // Redirect or perform any other action upon successful registration
      })
      .catch((error) => {
        console.error('Registration error:', error);
        // Handle registration error
      });
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
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
           <TextField
            label="Username"
            name="username"
            type="text"
            variant="outlined"
            required
            value={formData.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
         <TextField
            label="First Name"
            name="firstname"
            type="text"
            variant="outlined"
            required
            value={formData.firstname}
            onChange={handleChange}
            fullWidth
            margin="normal"
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
            fullWidth
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

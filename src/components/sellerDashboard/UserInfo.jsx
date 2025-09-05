import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  CircularProgress,
  Alert,
} from '@mui/material';
import axios from 'axios';
import { baseUrl } from '../../adapter/api';

export const UserInfo = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${baseUrl}api/v1/users/me`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUserData(response.data);
        setError(null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" p={3}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={2}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!userData) {
    return null;
  }

  return (
    <Paper
      sx={{
        padding: '20px',
        marginBottom: '20px',
        backgroundColor: '#E9E9F0',
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar
          src={userData.avatar}
          alt={userData.name}
          sx={{ width: 64, height: 64, mr: 2 }}
        />
        <Box>
          <Typography variant="h6" component="h2">
            {userData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userData.email}
          </Typography>
        </Box>
      </Box>

      <Box mt={2}>
        <Typography variant="subtitle2" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body2" paragraph>
          Phone: {userData.phone || 'Not provided'}
        </Typography>
        <Typography variant="body2" paragraph>
          Address: {userData.address || 'Not provided'}
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="subtitle2" gutterBottom>
          Account Information
        </Typography>
        <Typography variant="body2" paragraph>
          Member Since: {new Date(userData.createdAt).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" paragraph>
          Last Updated: {new Date(userData.updatedAt).toLocaleDateString()}
        </Typography>
      </Box>
    </Paper>
  );
}; 
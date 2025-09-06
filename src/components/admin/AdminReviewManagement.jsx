import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Rating,
  TextField,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import styled from 'styled-components';
import { reviewApi } from '../../adapter/reviewApi';

const Container = styled(Box)`
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled(Typography)`
  margin-bottom: 24px;
  font-weight: 600;
  color: #333;
`;

const ActionButton = styled(IconButton)`
  margin: 0 4px;
`;

const AdminReviewManagement = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchAllReviews();
  }, []);

  const fetchAllReviews = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await reviewApi.getAllReviews();
      setReviews(response.reviews || []);
    } catch (err) {
      setError(err.message);
      console.error('Failed to fetch reviews:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleViewReview = (review) => {
    setSelectedReview(review);
    setEditMode(false);
    setDialogOpen(true);
  };

  const handleEditReview = (review) => {
    setSelectedReview(review);
    setEditMode(true);
    setDialogOpen(true);
  };

  const handleDeleteReview = async (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      try {
        await reviewApi.deleteReview(reviewId);
        setReviews(prevReviews => 
          prevReviews.filter(review => review._id !== reviewId)
        );
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleUpdateReview = async (updatedData) => {
    try {
      const response = await reviewApi.updateReview(selectedReview._id, updatedData);
      setReviews(prevReviews => 
        prevReviews.map(review => 
          review._id === selectedReview._id ? response.review : review
        )
      );
      setDialogOpen(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <Container>
        <Header variant="h5">Review Management</Header>
        <Typography>Loading reviews...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Header variant="h5">Review Management</Header>
        <Typography color="error">Error: {error}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Header variant="h5">Review Management</Header>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Comment</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.map((review) => (
              <TableRow key={review._id}>
                <TableCell>
                  <Typography variant="body2" noWrap>
                    {review.product}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Rating value={review.rating} readOnly size="small" />
                </TableCell>
                <TableCell>
                  <Typography variant="body2" noWrap sx={{ maxWidth: 200 }}>
                    {review.comment}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {review.owner_id?.slice(-8) || 'N/A'}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {formatDate(review.createdAt)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <ActionButton
                    size="small"
                    onClick={() => handleViewReview(review)}
                    title="View Review"
                  >
                    <Visibility />
                  </ActionButton>
                  <ActionButton
                    size="small"
                    onClick={() => handleEditReview(review)}
                    title="Edit Review"
                  >
                    <Edit />
                  </ActionButton>
                  <ActionButton
                    size="small"
                    onClick={() => handleDeleteReview(review._id)}
                    title="Delete Review"
                    color="error"
                  >
                    <Delete />
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Review Detail Dialog */}
      <Dialog 
        open={dialogOpen} 
        onClose={() => setDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {editMode ? 'Edit Review' : 'Review Details'}
        </DialogTitle>
        <DialogContent>
          {selectedReview && (
            <Box sx={{ mt: 2 }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Product ID:
                </Typography>
                <Typography variant="body2">
                  {selectedReview.product}
                </Typography>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Rating:
                </Typography>
                <Rating value={selectedReview.rating} readOnly />
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Comment:
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  value={selectedReview.comment}
                  disabled={!editMode}
                  onChange={(e) => setSelectedReview({
                    ...selectedReview,
                    comment: e.target.value
                  })}
                />
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  User ID:
                </Typography>
                <Typography variant="body2">
                  {selectedReview.owner_id}
                </Typography>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Created At:
                </Typography>
                <Typography variant="body2">
                  {formatDate(selectedReview.createdAt)}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>
            {editMode ? 'Cancel' : 'Close'}
          </Button>
          {editMode && (
            <Button 
              onClick={() => handleUpdateReview(selectedReview)}
              variant="contained"
            >
              Save Changes
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminReviewManagement;

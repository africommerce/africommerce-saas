import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Rating,
  Card,
  CardContent,
  Alert,
  Snackbar,
} from '@mui/material';
import { Send } from '@mui/icons-material';
import styled from 'styled-components';

const FormCard = styled(Card)`
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FormTitle = styled(Typography)`
  margin-bottom: 16px;
  font-weight: 600;
  color: #333;
`;

const RatingContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const SubmitButton = styled(Button)`
  background-color: #e62e04;
  color: white;
  
  &:hover {
    background-color: #d02500;
  }
`;

const ReviewForm = ({ productId, onReviewSubmitted }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }

    if (!comment.trim()) {
      setError('Please write a comment');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const reviewData = {
        rating: rating,
        comment: comment.trim(),
        product_id: productId,
      };

      // Call the parent's review submission handler
      if (onReviewSubmitted) {
        await onReviewSubmitted(reviewData);
      }
      
      setSuccess(true);
      setRating(0);
      setComment('');
    } catch (err) {
      setError(err.message || 'Failed to submit review');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
    setError(null);
  };

  return (
    <FormCard>
      <CardContent>
        <FormTitle variant="h6">
          Write a Review
        </FormTitle>
        
        <form onSubmit={handleSubmit}>
          <RatingContainer>
            <Typography variant="body1">Rating:</Typography>
            <Rating
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              size="large"
            />
            <Typography variant="body2" color="text.secondary">
              {rating > 0 ? `${rating} star${rating > 1 ? 's' : ''}` : 'Select rating'}
            </Typography>
          </RatingContainer>

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Your Review"
            placeholder="Share your thoughts about this product..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant="outlined"
            margin="normal"
            required
          />

          <Box display="flex" justifyContent="flex-end" marginTop={2}>
            <SubmitButton
              type="submit"
              variant="contained"
              startIcon={<Send />}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Review'}
            </SubmitButton>
          </Box>
        </form>

        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Review submitted successfully!
          </Alert>
        </Snackbar>

        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="error">
            {error}
          </Alert>
        </Snackbar>
      </CardContent>
    </FormCard>
  );
};

export default ReviewForm;

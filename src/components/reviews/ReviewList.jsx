import React from 'react';
import { Rating, Typography, Box, Card, CardContent, Avatar, Divider } from '@mui/material';
import { Person } from '@mui/icons-material';
import styled from 'styled-components';

const ReviewCard = styled(Card)`
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const ReviewHeader = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const UserInfo = styled(Box)`
  margin-left: 12px;
`;

const UserName = styled(Typography)`
  font-weight: 600;
  color: #333;
`;

const ReviewDate = styled(Typography)`
  color: #666;
  font-size: 0.875rem;
`;

const ReviewComment = styled(Typography)`
  color: #555;
  line-height: 1.6;
  margin-top: 8px;
`;

const EmptyState = styled(Box)`
  text-align: center;
  padding: 40px 20px;
  color: #666;
`;

const ReviewList = ({ reviews, loading = false }) => {
  if (loading) {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Reviews
        </Typography>
        <Typography>Loading reviews...</Typography>
      </Box>
    );
  }

  if (!reviews || reviews.length === 0) {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Reviews
        </Typography>
        <EmptyState>
          <Typography variant="body1">
            No reviews yet. Be the first to review this product!
          </Typography>
        </EmptyState>
      </Box>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Reviews ({reviews.length})
      </Typography>
      {reviews.map((review) => (
        <ReviewCard key={review._id}>
          <CardContent>
            <ReviewHeader>
              <Avatar>
                <Person />
              </Avatar>
              <UserInfo>
                <UserName variant="subtitle1">
                  User {review.owner_id?.slice(-4) || 'Anonymous'}
                </UserName>
                <Box display="flex" alignItems="center" gap={1}>
                  <Rating
                    value={review.rating}
                    readOnly
                    size="small"
                    precision={0.1}
                  />
                  <ReviewDate variant="body2">
                    {formatDate(review.createdAt)}
                  </ReviewDate>
                </Box>
              </UserInfo>
            </ReviewHeader>
            <Divider sx={{ marginY: 1 }} />
            <ReviewComment variant="body1">
              {review.comment}
            </ReviewComment>
          </CardContent>
        </ReviewCard>
      ))}
    </Box>
  );
};

export default ReviewList;

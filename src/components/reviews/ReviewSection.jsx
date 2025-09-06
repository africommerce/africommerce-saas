import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Divider } from '@mui/material';
import { RateReview, List } from '@mui/icons-material';
import styled from 'styled-components';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import { useReviews } from '../../hooks/useReviews';

const ReviewSectionContainer = styled(Box)`
  margin-top: 32px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`review-tabpanel-${index}`}
      aria-labelledby={`review-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const ReviewSection = ({ productId, productName }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { reviews, loading, error, addReview } = useReviews(productId);

  const handleReviewSubmitted = async (reviewData) => {
    try {
      await addReview(reviewData);
    } catch (err) {
      console.error('Failed to submit review:', err);
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  return (
    <ReviewSectionContainer>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="review tabs">
          <Tab
            icon={<List />}
            label={`Reviews (${reviews.length})`}
            iconPosition="start"
          />
          <Tab
            icon={<RateReview />}
            label="Write Review"
            iconPosition="start"
          />
        </Tabs>
      </Box>

      <TabPanel value={activeTab} index={0}>
        {error ? (
          <Typography color="error">
            Failed to load reviews: {error}
          </Typography>
        ) : (
          <ReviewList reviews={reviews} loading={loading} />
        )}
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        <ReviewForm
          productId={productId}
          onReviewSubmitted={handleReviewSubmitted}
        />
      </TabPanel>
    </ReviewSectionContainer>
  );
};

export default ReviewSection;

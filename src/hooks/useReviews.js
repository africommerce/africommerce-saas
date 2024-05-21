import { useState, useEffect, useCallback } from 'react';
import { reviewApi } from '../adapter/reviewApi';

export const useReviews = (productId) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReviews = useCallback(async () => {
    if (!productId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await reviewApi.getProductReviews(productId);
      setReviews(response.reviews || []);
    } catch (err) {
      setError(err.message);
      console.error('Failed to fetch reviews:', err);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  const addReview = useCallback(async (reviewData) => {
    try {
      const response = await reviewApi.createReview(reviewData);
      setReviews(prevReviews => [response.review, ...prevReviews]);
      return response.review;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const updateReview = useCallback(async (reviewId, reviewData) => {
    try {
      const response = await reviewApi.updateReview(reviewId, reviewData);
      setReviews(prevReviews => 
        prevReviews.map(review => 
          review._id === reviewId ? response.review : review
        )
      );
      return response.review;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const deleteReview = useCallback(async (reviewId) => {
    try {
      await reviewApi.deleteReview(reviewId);
      setReviews(prevReviews => 
        prevReviews.filter(review => review._id !== reviewId)
      );
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return {
    reviews,
    loading,
    error,
    fetchReviews,
    addReview,
    updateReview,
    deleteReview,
  };
};

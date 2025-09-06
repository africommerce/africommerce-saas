import { baseUrl } from './api';

const REVIEWS_ENDPOINT = `${baseUrl}reviews`;

export const reviewApi = {
  // Create a new review
  createReview: async (reviewData) => {
    const response = await fetch(REVIEWS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });

    if (!response.ok) {
      throw new Error(`Failed to create review: ${response.statusText}`);
    }

    return await response.json();
  },

  // Get all reviews
  getAllReviews: async () => {
    const response = await fetch(REVIEWS_ENDPOINT);

    if (!response.ok) {
      throw new Error(`Failed to fetch reviews: ${response.statusText}`);
    }

    return await response.json();
  },

  // Get reviews for a specific product
  getProductReviews: async (productId) => {
    const response = await fetch(`${REVIEWS_ENDPOINT}?product_id=${productId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch product reviews: ${response.statusText}`);
    }

    return await response.json();
  },

  // Get a specific review by ID
  getReviewById: async (reviewId) => {
    const response = await fetch(`${REVIEWS_ENDPOINT}/${reviewId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch review: ${response.statusText}`);
    }

    return await response.json();
  },

  // Update a review (if supported by API)
  updateReview: async (reviewId, reviewData) => {
    const response = await fetch(`${REVIEWS_ENDPOINT}/${reviewId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update review: ${response.statusText}`);
    }

    return await response.json();
  },

  // Delete a review (if supported by API)
  deleteReview: async (reviewId) => {
    const response = await fetch(`${REVIEWS_ENDPOINT}/${reviewId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete review: ${response.statusText}`);
    }

    return await response.json();
  },
};

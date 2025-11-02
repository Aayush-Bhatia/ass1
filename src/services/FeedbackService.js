/**
 * FeedbackService
 * Handles all logic for interacting with localStorage.
 */

// Ek unique key taaki data doosre apps se mix na ho
const STORAGE_KEY = 'vips-feedback-portal';

/**
 * Retrieves all feedback entries from localStorage.
 * @returns {Array} An array of feedback items.
 */
export const getFeedback = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting feedback from localStorage', error);
    return [];
  }
};

/**
 * Saves the entire feedback list to localStorage.
 * (Yeh ek private helper function hai)
 * @param {Array} feedbackList - The full array of feedback items to save.
 */
const saveFeedback = (feedbackList) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackList));
  } catch (error) {
    console.error('Error saving feedback to localStorage', error);
  }
};

/**
 * Adds a new feedback item to the list.
 * @param {Object} newFeedback - The new feedback item to add.
 * @returns {Array} The updated feedback list.
 */
export const addFeedback = (newFeedback) => {
  const currentFeedback = getFeedback();
  // Naya feedback list mein sabse upar add karo
  const updatedFeedbackList = [newFeedback, ...currentFeedback];
  saveFeedback(updatedFeedbackList);
  return updatedFeedbackList;
};

/**
 * Deletes a feedback item by its ID.
 * @param {string} idToDelete - The ID of the feedback item to delete.
 * @returns {Array} The updated feedback list.
 */
export const deleteFeedback = (idToDelete) => {
  const currentFeedback = getFeedback();
  const updatedFeedbackList = currentFeedback.filter(
    (item) => item.id !== idToDelete
  );
  saveFeedback(updatedFeedbackList);
  return updatedFeedbackList;
};
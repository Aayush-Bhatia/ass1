import React, { useState, useEffect } from 'react';
import * as FeedbackService from '../services/FeedbackService.js';
import { v4 as uuidv4 } from 'uuid'; // ID banane ke liye

// Import all the required components
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import ModalComponent from '../components/ModalComponent';
import { Paper, Typography, Divider } from '@mui/material';

/**
 * Main page for collecting and viewing feedback.
 * This component acts as the "brain", managing all data and logic.
 */
function FeedbackPage() {
  // --- STATE ---
  const [allFeedback, setAllFeedback] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // --- DATA LOADING ---
  /**
   * Load initial feedback from the service (localStorage).
   * Runs only once when the component first mounts.
   */
  useEffect(() => {
    const loadedFeedback = FeedbackService.getFeedback();
    setAllFeedback(loadedFeedback);
  }, []); // [] ka matlab: "Sirf ek baar chalao"

  // --- HANDLER FUNCTIONS ---
  /**
   * Handles adding a new feedback entry.
   * Called by FeedbackForm.
   * @param {Object} formData - The data from the form { name, email, message }
   */
  const handleAddFeedback = (formData) => {
    const newFeedback = {
      id: uuidv4(), // Unique ID
      ...formData,
      timestamp: new Date().toISOString(),
    };

    // Service ka use karke data save karo
    const updatedFeedbackList = FeedbackService.addFeedback(newFeedback);
    
    // React state ko update karo taaki list re-render ho
    setAllFeedback(updatedFeedbackList);
  };

  /**
   * Initiates the delete process (opens the modal).
   * Called by FeedbackItem (via FeedbackList).
   * @param {string} id - The ID of the feedback item to delete.
   */
  const handleDeleteRequest = (id) => {
    setItemToDelete(id);
    setIsModalOpen(true);
  };

  /**
   * Confirms and executes the deletion.
   * Called by ModalComponent.
   */
  const handleConfirmDelete = () => {
    if (itemToDelete) {
      const updatedFeedbackList = FeedbackService.deleteFeedback(itemToDelete);
      setAllFeedback(updatedFeedbackList);
      handleCloseModal(); // Modal band karo
    }
  };

  /**
   * Closes the delete confirmation modal.
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  // --- RENDER ---
  return (
    <div className="space-y-8">
      {/* --- Feedback Form Section --- */}
      <Paper elevation={3} className="p-4 md:p-6">
        <Typography variant="h5" component="h2" className="font-semibold mb-4">
          Submit New Feedback
        </Typography>
        <FeedbackForm onFeedbackSubmit={handleAddFeedback} />
      </Paper>

      {/* --- Feedback List Section --- */}
      <Paper elevation={3} className="p-4 md:p-6">
        <Typography variant="h5" component="h2" className="font-semibold mb-4">
          Submitted Feedback
        </Typography>
        <Divider className="mb-4" />
        <FeedbackList
          feedbackList={allFeedback}
          onDeleteRequest={handleDeleteRequest}
        />
      </Paper>

      {/* --- Confirmation Modal --- */}
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this feedback? This action cannot be undone."
      />
    </div>
  );
}

export default FeedbackPage;
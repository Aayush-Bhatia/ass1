import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';

// EmailJS Configuration 
const EMAILJS_SERVICE_ID = 'service_e5w4oz8';
const EMAILJS_TEMPLATE_ID = 'template_v6d9k19';
const EMAILJS_PUBLIC_KEY = 'jlorVxZYH73YIzIPk';


/**
 * A form for submitting new feedback, using MUI.
 * On submit, it calls the parent prop AND sends an email via EmailJS.
 * @param {Object} props
 * @param {Function} props.onFeedbackSubmit - Callback function to call when form is submitted.
 */
function FeedbackForm({ onFeedbackSubmit }) {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // --- UI/UX State ---
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state

  /**
   * Handles the form submission event.
   * @param {Event} e - The form submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('All fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true); // Loading start

    // Prepare data for EmailJS template
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // Send the email
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      // Email successful, ab data ko app state (localStorage) mein save karo
      console.log('EmailJS SUCCESS!', response.status, response.text);
      onFeedbackSubmit({ name, email, message }); // Parent function call
      
      // Success message dikhao aur form clear karo
      setSuccess('Thank you! Your feedback has been sent.');
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      // Email fail ho gaya
      console.error('EmailJS FAILED...', err);
      setError('Failed to send feedback. Please try again later.');
    })
    .finally(() => {
      // Loading state hamesha band karo
      setIsSubmitting(false);
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Alert Messages */}
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      {/* Form Fields */}
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isSubmitting}
        error={!!error && !name.trim()} // Agar error hai aur field khaali hai toh red dikhao
      />
      
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
        error={!!error && (!email.trim() || (error && !/\S+@\S+\.\S+/.test(email)))}
      />

      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        required
        multiline
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={isSubmitting}
        error={!!error && !message.trim()}
      />

      {/* Submit Button with Loading Spinner */}
      <Box sx={{ position: 'relative' }}>
        <Button 
          type="submit" 
          variant="contained"
          color="primary" // Blue color
          fullWidth
          size="large"
          disabled={isSubmitting}
          className="py-3 font-semibold"
        >
          {isSubmitting ? 'Sending...' : 'Submit Feedback'}
        </Button>
        {isSubmitting && (
          <CircularProgress
            size={24}
            color="inherit" // Button ke text ka color (white) lega
            className="absolute top-1/2 left-1/2 -mt-3 -ml-3"
          />
        )}
      </Box>
    </Box>
  );
}

export default FeedbackForm;
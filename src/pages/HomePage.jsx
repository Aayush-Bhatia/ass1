import React from 'react';
import { Typography } from '@mui/material';

export default function HomePage() {
  return (
    <div className="p-6 text-center">
      <Typography variant="h4" className="font-semibold mb-4">
        Welcome to Feedback Portal
      </Typography>
      <Typography variant="body1" className="text-gray-600 mb-4">
        Your thoughts help us improve our product. Use the navigation bar to
        submit or review feedback.
      </Typography>
      <img
        src="https://illustrations.popsy.co/gray/customer-feedback.svg"
        alt="Feedback Illustration"
        className="mx-auto w-80"
        onError={(e) => { e.target.style.display = 'none'; }} // Hide if image fails
      />
    </div>
  );
}

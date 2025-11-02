import React from 'react';
import { Typography, Paper } from '@mui/material';

export default function AboutPage() {
  return (
    <Paper elevation={3} className="p-6 max-w-3xl mx-auto">
      <Typography variant="h4" className="font-semibold mb-3">
        About This Platform
      </Typography>
      <Typography className="text-gray-700 mb-2">
        This feedback collection system is built with React, MUI, and Tailwind
        CSS to offer a clean and modern interface.
      </Typography>
      <Typography className="text-gray-700 mb-2">
        You can easily share your feedback, report bugs, or suggest new features.
      </Typography>
      <Typography className="text-gray-700">
        Designed and developed by the R&D Team at VIPS-TC.
      </Typography>
    </Paper>
  );
}

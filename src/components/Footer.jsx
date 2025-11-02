import React from 'react';
import { Typography } from '@mui/material';


function Footer() {
  return (
    <footer className="w-full bg-blue-600 text-white text-center py-3">
          {/* Yeh 'mt-auto' ki zaroorat nahi hai kyunki parent (main) grow kar raha hai */}
          <Typography variant="body2">
            © 2025 Feedback Portal | Designed by Aayush Bhatia
          </Typography>
    </footer>
  );
}

export default Footer;
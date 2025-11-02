import React from 'react';
import { Typography } from '@mui/material';

export default function SettingsPage() {
  return (
    <div className="p-6 text-center">
      <Typography variant="h4" className="font-semibold mb-4">
        Settings
      </Typography>
      <Typography className="text-gray-600 mb-2">
        Customize your experience (coming soon!)
      </Typography>
    </div>
  );
}

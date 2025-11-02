import React from 'react';
import {
  Typography,
  Paper,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
} from '@mui/material';

// Import icons to make the page more visual
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import EmailIcon from '@mui/icons-material/Email';
import StorageIcon from '@mui/icons-material/Storage';

/**
 * Renders the enhanced About page content with a richer UI.
 */
export default function AboutPage() {
  return (
    // Use responsive padding (p-4 for mobile, md:p-8 for desktop)
    <Paper elevation={3} className="p-4 md:p-8 max-w-3xl mx-auto">
      <Typography
        variant="h4"
        component="h1"
        className="font-semibold mb-4 text-gray-800"
      >
        About This Platform
      </Typography>

      <Typography variant="body1" color="text.secondary" className="mb-6">
        This feedback collection system is built with a modern tech stack to
        offer a clean, responsive, and intuitive interface for collecting
        valuable user insights.
      </Typography>

      <Divider className="mb-6" />

      {/* --- Key Features Section --- */}
      <Typography variant="h6" component="h2" className="font-semibold mb-3">
        Key Features
      </Typography>
      <List disablePadding>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Seamless Feedback Submission"
            secondary="A simple, validated form for submitting feedback, bug reports, or new ideas."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Dynamic Filtering & Search"
            secondary="Instantly find feedback by keyword or filter by the date of submission."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Instant Email Notifications"
            secondary="Powered by EmailJS to notify administrators of new submissions in real-time."
          />
        </ListItem>
      </List>

      {/* --- Tech Stack Section --- */}
      <Typography
        variant="h6"
        component="h2"
        className="font-semibold mt-8 mb-4"
      >
        Technology Stack
      </Typography>
      <Box className="flex flex-wrap gap-2">
        <Chip
          icon={<CodeIcon />}
          label="React"
          color="primary"
          variant="outlined"
          className="font-medium"
        />
        <Chip
          icon={<PaletteIcon />}
          label="Material-UI (MUI)"
          color="secondary"
          variant="outlined"
          className="font-medium"
        />
        <Chip
          label="Tailwind CSS"
          color="info"
          variant="outlined"
          className="font-medium"
        />
        <Chip
          icon={<EmailIcon />}
          label="EmailJS"
          color="success"
          variant="outlined"
          className="font-medium"
        />
        <Chip
          icon={<StorageIcon />}
          label="LocalStorage"
          color="default"
          variant="outlined"
          className="font-medium"
        />
      </Box>

      {/* --- About the Team Section --- */}
      <Typography
        variant="h6"
        component="h2"
        className="font-semibold mt-8 mb-3"
      >
        About the Team
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This platform was designed and developed by{' '}
        <span className="font-semibold text-gray-800">Aayush Bhatia</span> as
        part of the R&D Team at VIPS-TC.
      </Typography>
    </Paper>
  );
}


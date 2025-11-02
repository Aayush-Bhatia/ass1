import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatTimestamp } from '../utils/formatDate.js'; // Helper function

/**
 * Renders a single feedback item as an MUI Card.
 * @param {Object} props
 * @param {Object} props.item - The feedback item object.
 * @param {Function} props.onDeleteRequest - Function to call when delete is clicked.
 */
function FeedbackItem({ item, onDeleteRequest }) {
  return (
    <Card variant="outlined" className="transition-all duration-300 hover:shadow-lg">
      <CardContent>
        {/* Header with Name and Delete Button  */}
        <Box className="flex justify-between items-start">
          {/* Name and Email */}
          <div>
            <Typography variant="h6" component="h3" className="font-semibold">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="mb-2">
              {item.email}
            </Typography>
          </div>
          {/* Delete Button */}
          <IconButton
            aria-label="delete feedback"
            onClick={() => onDeleteRequest(item.id)}
            color="error" // Red color
            className="transition-colors hover:bg-red-100"
          >
            <DeleteIcon />
          </IconButton>
        </Box>

        {/* Message Content */}
        <Typography variant="body1" className="text-gray-800 my-3">
          {item.message}
        </Typography>
      </CardContent>
      
      {/* Footer with Timestamp */}
      <Divider />
      <CardActions className="justify-end bg-gray-50">
        <Typography variant="caption" color="text.secondary">
          {formatTimestamp(item.timestamp)}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default FeedbackItem;
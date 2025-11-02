import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Paper,
  Divider,
} from '@mui/material';

// Modal ke box ke liye style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2, // 8px
};

/**
 * A reusable confirmation modal (MUI).
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {Function} props.onClose - Function to call on close.
 * @param {Function} props.onConfirm - Function to call on confirm.
 * @param {string} props.title - The title of the modal.
 * @param {string} props.message - The message/body of the modal.
 */
function ModalComponent({ isOpen, onClose, onConfirm, title, message }) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Paper sx={style}>
        {/* Header */}
        <Box className="p-4">
          <Typography id="modal-title" variant="h6" component="h2" className="font-semibold">
            {title}
          </Typography>
        </Box>
        
        <Divider />

        {/* Body */}
        <Box className="p-4">
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {message}
          </Typography>
        </Box>

        <Divider />

        {/* Footer */}
        <Box className="flex justify-end gap-2 p-4 bg-gray-50">
          <Button variant="outlined" color="inherit" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error" // Red button
            onClick={onConfirm}
            autoFocus
          >
            Confirm Delete
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}

export default ModalComponent;
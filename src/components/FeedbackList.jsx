import React, { useState } from 'react';
import FeedbackItem from './FeedbackItem.jsx'; // Child component
import { Box, TextField, Typography, Grid } from '@mui/material';

// Date picker ke liye imports (Install karna zaroori hai)
// npm install @mui/x-date-pickers date-fns @date-io/date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { enUS } from 'date-fns/locale';

/**
 * Renders the list of feedback with filter controls.
 * @param {Object} props
 * @param {Array} props.feedbackList - full list of feedback items.
 * @param {Function} props.onDeleteRequest - Function to initiate deletion.
 */
function FeedbackList({ feedbackList, onDeleteRequest }) {
  // STATE FOR FILTERS
  const [keyword, setKeyword] = useState('');
  const [selectedDate, setSelectedDate] = useState(null); // Date picker ke liye

  /**
   * Filter logic
   * @returns {Array} The filtered list of feedback.
   */
  const getFilteredList = () => {
    return feedbackList
      .filter((item) => {
        // Keyword filter (name, email, message check karega)
        const keywordLower = keyword.toLowerCase();
        const matchesKeyword =
          item.name.toLowerCase().includes(keywordLower) ||
          item.email.toLowerCase().includes(keywordLower) ||
          item.message.toLowerCase().includes(keywordLower);
        return matchesKeyword;
      })
      .filter((item) => {
        // Date filter
        if (!selectedDate) return true; // Agar date select nahi ki toh sab dikhao
        const itemDate = new Date(item.timestamp);
        // compare date, not time 
        return itemDate.toDateString() === selectedDate.toDateString();
      });
  };

  const filteredList = getFilteredList();

  return (
    // Date picker ke liye LocalizationProvider zaroori hai
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
      <div className="space-y-6">
        {/* FILTER CONTROLS */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              label="Search by keyword..."
              variant="outlined"
              fullWidth
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <DatePicker
              label="Filter by date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
        </Grid>

        {/* FEEDBACK LIST */}
        <div className="space-y-4">
          {filteredList.length === 0 ? (
            // Empty State UI
            <Box className="text-center bg-gray-100 p-10 rounded-lg">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {feedbackList.length > 0 ? (
                  // Case 1: Filter ki wajah se list khaali hai
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                ) : (
                  // Case 2: Data hi nahi hai
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                )}
              </svg>
              <Typography variant="h6" className="mt-2 font-semibold text-gray-800">
                {feedbackList.length > 0
                  ? 'No Results Found'
                  : 'No Feedback Yet'}
              </Typography>
              <Typography variant="body2" className="text-gray-500 mt-1">
                {feedbackList.length > 0
                  ? 'Try adjusting your search keyword or date filter.'
                  : "Submit new feedback to see it here!"}
              </Typography>
            </Box>
          ) : (
            //Render List Items 
            filteredList.map((item) => (
              <FeedbackItem
                key={item.id}
                item={item}
                onDeleteRequest={onDeleteRequest}
              />
            ))
          )}
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default FeedbackList;
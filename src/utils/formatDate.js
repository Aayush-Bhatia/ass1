/**
 * Formats an ISO 8601 timestamp into a readable string.
 * e.g., "October 30, 2025 at 10:30 AM"
 * @param {string} isoString - The ISO 8601 timestamp.
 * @returns {string} A human-readable date and time.
 */
export const formatTimestamp = (isoString) => {
  if (!isoString) return 'No date provided';
  try {
    const date = new Date(isoString);
    // 'en-US' format use karega
    return date.toLocaleString('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};
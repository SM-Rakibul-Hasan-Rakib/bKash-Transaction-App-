/**
 * Get Time and Date form timestamps
 * @param {*} timestamp
 * @returns
 */
function teansactionTime(timestamp) {
  // Create a new Date object using the timestamp
  const date = new Date(timestamp);

  // Format date and time components
  const options = {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Set to false for 24-hour format
  };

  return date.toLocaleString("en-US", options);
}

/**
 *
 * @returns
 */
function trxID() {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
  const transactionId = `TRX${timestamp} ${randomPart}`;
  return transactionId;
}

const fs = require('fs');

// Function to log data to a file
function logger(data) {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp}: ${data}\n`;

  fs.appendFile('logs.txt', logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    } else {
      console.log('Data logged successfully.');
    }
  });
}

module.exports = logger;

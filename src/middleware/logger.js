'use strict';
// Logger middleware function
const logger = (req, res, next) => {
  // Log the request method and URL
  console.log(`${req.method} ${req.url}`);
  // Move to the next middleware function
  next();
};

// Export the logger middleware function
module.exports = logger;

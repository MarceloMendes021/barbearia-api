const errorResponse = (res, statusCode, error, details) => {
  return res.status(statusCode).json({ success: false, error, details });
};

module.exports = errorResponse;

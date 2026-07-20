export function errorHandler(error, _request, response, _next) {
  const statusCode = error.statusCode || 500;
  const message =
    error.message || "Something went wrong while processing the backend request.";

  response.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV !== "production" && { stack: error.stack })
  });
}

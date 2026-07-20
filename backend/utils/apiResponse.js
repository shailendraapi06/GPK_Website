export function sendSuccessResponse(response, { statusCode = 200, message, data = null, meta } = {}) {
  return response.status(statusCode).json({
    success: true,
    message,
    ...(data !== null && { data }),
    ...(meta && { meta })
  });
}

export function sendErrorResponse(response, { statusCode = 500, message, errors, stack } = {}) {
  return response.status(statusCode).json({
    success: false,
    message,
    ...(errors && { errors }),
    ...(stack && { stack })
  });
}

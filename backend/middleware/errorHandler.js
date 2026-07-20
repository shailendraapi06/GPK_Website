import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import { sendErrorResponse, CustomError, logger } from "../utils/index.js";

export function errorHandler(error, request, response, _next) {
  const normalizedError =
    error instanceof CustomError
      ? error
      : new CustomError(
          HTTP_STATUS.INTERNAL_SERVER_ERROR,
          error.message || API_MESSAGES.INTERNAL_SERVER_ERROR
        );

  logger.error(`Error on ${request.method} ${request.originalUrl}`, normalizedError);

  return sendErrorResponse(response, {
    statusCode: normalizedError.statusCode,
    message: normalizedError.message,
    errors: normalizedError.errors,
    stack: process.env.NODE_ENV !== "production" ? normalizedError.stack : undefined
  });
}

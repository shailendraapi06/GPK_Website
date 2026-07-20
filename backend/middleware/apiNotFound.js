import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import { createHttpError } from "../utils/index.js";

export function apiNotFound(request, _response, next) {
  next(
    createHttpError(
      HTTP_STATUS.NOT_FOUND,
      `${API_MESSAGES.ROUTE_NOT_FOUND}: ${request.originalUrl}`
    )
  );
}

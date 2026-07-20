import { createHttpError } from "../utils/createHttpError.js";

export function notFound(request, _response, next) {
  next(createHttpError(404, `Route not found: ${request.originalUrl}`));
}

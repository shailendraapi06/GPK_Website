import { CustomError } from "./CustomError.js";

export function createHttpError(statusCode, message, errors = null) {
  return new CustomError(statusCode, message, errors);
}

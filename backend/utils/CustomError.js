export class CustomError extends Error {
  constructor(statusCode, message, errors = null) {
    super(message);
    this.name = "CustomError";
    this.statusCode = statusCode;
    this.errors = errors;

    Error.captureStackTrace?.(this, this.constructor);
  }
}

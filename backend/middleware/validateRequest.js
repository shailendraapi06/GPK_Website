import { validationResult } from "express-validator";
import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import { CustomError } from "../utils/index.js";

export function validateRequest(request, _response, next) {
  const validationErrors = validationResult(request);

  if (validationErrors.isEmpty()) {
    return next();
  }

  const errors = validationErrors.array().map((error) => ({
    field: error.path,
    message: error.msg,
    value: error.value
  }));

  return next(
    new CustomError(
      HTTP_STATUS.UNPROCESSABLE_ENTITY,
      API_MESSAGES.VALIDATION_FAILED,
      errors
    )
  );
}

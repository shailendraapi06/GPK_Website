import { param } from "express-validator";

export const cloudinaryUrlPattern = /^https:\/\/res\.cloudinary\.com\/.+/i;
export const httpUrlPattern = /^https?:\/\/.+/i;

export const mongoIdParamValidator = (fieldName = "id") =>
  param(fieldName).isMongoId().withMessage(`Invalid ${fieldName} value.`);

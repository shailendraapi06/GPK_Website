import { body } from "express-validator";
import { httpUrlPattern, mongoIdParamValidator } from "./commonValidators.js";

export const createNotificationValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Notification title is required.")
    .isLength({ max: 220 })
    .withMessage("Notification title cannot exceed 220 characters."),
  body("linkUrl")
    .trim()
    .notEmpty()
    .withMessage("Notification link is required.")
    .matches(httpUrlPattern)
    .withMessage("Notification link must be a valid URL."),
  body("displayOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Display order must be a non-negative integer."),
  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Active status must be true or false.")
];

export const updateNotificationValidator = [
  mongoIdParamValidator(),
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Notification title cannot be empty.")
    .isLength({ max: 220 })
    .withMessage("Notification title cannot exceed 220 characters."),
  body("linkUrl")
    .optional()
    .trim()
    .matches(httpUrlPattern)
    .withMessage("Notification link must be a valid URL."),
  body("displayOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Display order must be a non-negative integer."),
  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Active status must be true or false.")
];

export const notificationIdValidator = [mongoIdParamValidator()];

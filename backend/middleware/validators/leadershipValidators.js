import { body } from "express-validator";
import { cloudinaryUrlPattern, mongoIdParamValidator } from "./commonValidators.js";

export const createLeadershipValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Leadership name is required.")
    .isLength({ max: 120 })
    .withMessage("Leadership name cannot exceed 120 characters."),
  body("designation")
    .trim()
    .notEmpty()
    .withMessage("Leadership designation is required.")
    .isLength({ max: 180 })
    .withMessage("Leadership designation cannot exceed 180 characters."),
  body("photoUrl")
    .trim()
    .notEmpty()
    .withMessage("Leadership image URL is required.")
    .matches(cloudinaryUrlPattern)
    .withMessage("Leadership image URL must be a valid Cloudinary URL."),
  body("displayOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Display order must be a non-negative integer."),
  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Active status must be true or false.")
];

export const updateLeadershipValidator = [
  mongoIdParamValidator(),
  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Leadership name cannot be empty.")
    .isLength({ max: 120 })
    .withMessage("Leadership name cannot exceed 120 characters."),
  body("designation")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Leadership designation cannot be empty.")
    .isLength({ max: 180 })
    .withMessage("Leadership designation cannot exceed 180 characters."),
  body("photoUrl")
    .optional()
    .trim()
    .matches(cloudinaryUrlPattern)
    .withMessage("Leadership image URL must be a valid Cloudinary URL."),
  body("displayOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Display order must be a non-negative integer."),
  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Active status must be true or false.")
];

export const leadershipIdValidator = [mongoIdParamValidator()];

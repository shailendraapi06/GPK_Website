import { body } from "express-validator";
import { cloudinaryUrlPattern, httpUrlPattern, mongoIdParamValidator } from "./commonValidators.js";

const socialPlatforms = ["facebook", "instagram", "linkedin", "youtube", "x", "whatsapp"];

export const createWebsiteSettingsValidator = [
  body("siteName")
    .trim()
    .notEmpty()
    .withMessage("College name is required.")
    .isLength({ max: 160 })
    .withMessage("College name cannot exceed 160 characters."),
  body("logoUrl")
    .trim()
    .notEmpty()
    .withMessage("Logo URL is required.")
    .matches(cloudinaryUrlPattern)
    .withMessage("Logo URL must be a valid Cloudinary URL."),
  body("address")
    .trim()
    .notEmpty()
    .withMessage("Address is required.")
    .isLength({ max: 300 })
    .withMessage("Address cannot exceed 300 characters."),
  body("contactEmail")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Enter a valid contact email address."),
  body("contactPhone")
    .trim()
    .notEmpty()
    .withMessage("Phone is required.")
    .isLength({ max: 30 })
    .withMessage("Phone cannot exceed 30 characters."),
  body("socialLinks")
    .optional()
    .isArray()
    .withMessage("Social links must be an array."),
  body("socialLinks.*.platform")
    .optional()
    .isIn(socialPlatforms)
    .withMessage("Invalid social platform."),
  body("socialLinks.*.url")
    .optional()
    .matches(httpUrlPattern)
    .withMessage("Social link must be a valid URL.")
];

export const updateWebsiteSettingsValidator = [
  mongoIdParamValidator(),
  body("siteName")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("College name cannot be empty.")
    .isLength({ max: 160 })
    .withMessage("College name cannot exceed 160 characters."),
  body("logoUrl")
    .optional()
    .trim()
    .matches(cloudinaryUrlPattern)
    .withMessage("Logo URL must be a valid Cloudinary URL."),
  body("address")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Address cannot be empty.")
    .isLength({ max: 300 })
    .withMessage("Address cannot exceed 300 characters."),
  body("contactEmail")
    .optional()
    .trim()
    .isEmail()
    .withMessage("Enter a valid contact email address."),
  body("contactPhone")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Phone cannot be empty.")
    .isLength({ max: 30 })
    .withMessage("Phone cannot exceed 30 characters."),
  body("socialLinks")
    .optional()
    .isArray()
    .withMessage("Social links must be an array."),
  body("socialLinks.*.platform")
    .optional()
    .isIn(socialPlatforms)
    .withMessage("Invalid social platform."),
  body("socialLinks.*.url")
    .optional()
    .matches(httpUrlPattern)
    .withMessage("Social link must be a valid URL.")
];

export const websiteSettingsIdValidator = [mongoIdParamValidator()];

import { body } from "express-validator";
import { cloudinaryUrlPattern, httpUrlPattern, mongoIdParamValidator } from "./commonValidators.js";

const heroBaseValidators = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Hero title is required.")
    .isLength({ max: 160 })
    .withMessage("Hero title cannot exceed 160 characters."),
  body("tagline")
    .trim()
    .notEmpty()
    .withMessage("Hero tagline is required.")
    .isLength({ max: 320 })
    .withMessage("Hero tagline cannot exceed 320 characters."),
  body("primaryCta.label")
    .trim()
    .notEmpty()
    .withMessage("Primary CTA label is required.")
    .isLength({ max: 80 })
    .withMessage("Primary CTA label cannot exceed 80 characters."),
  body("primaryCta.url")
    .trim()
    .notEmpty()
    .withMessage("Primary CTA URL is required.")
    .matches(httpUrlPattern)
    .withMessage("Primary CTA URL must be valid."),
  body("secondaryCta.label")
    .trim()
    .notEmpty()
    .withMessage("Secondary CTA label is required.")
    .isLength({ max: 80 })
    .withMessage("Secondary CTA label cannot exceed 80 characters."),
  body("secondaryCta.url")
    .trim()
    .notEmpty()
    .withMessage("Secondary CTA URL is required.")
    .matches(httpUrlPattern)
    .withMessage("Secondary CTA URL must be valid."),
  body("highlights")
    .isArray({ min: 1, max: 6 })
    .withMessage("Hero highlights must contain between 1 and 6 items."),
  body("highlights.*")
    .trim()
    .notEmpty()
    .withMessage("Hero highlight cannot be empty."),
  body("slides")
    .isArray({ min: 1 })
    .withMessage("At least one hero slide is required."),
  body("slides.*.imageUrl")
    .trim()
    .notEmpty()
    .withMessage("Hero slide image URL is required.")
    .matches(cloudinaryUrlPattern)
    .withMessage("Hero slide image URL must be a valid Cloudinary URL."),
  body("slides.*.altText")
    .trim()
    .notEmpty()
    .withMessage("Hero slide alt text is required.")
    .isLength({ max: 180 })
    .withMessage("Hero slide alt text cannot exceed 180 characters."),
  body("slides.*.displayOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Hero slide display order must be a non-negative integer."),
  body("slides.*.isActive")
    .optional()
    .isBoolean()
    .withMessage("Hero slide active status must be true or false."),
  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Hero active status must be true or false.")
];

export const createHeroValidator = heroBaseValidators;

export const updateHeroValidator = [
  mongoIdParamValidator(),
  body("title")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Hero title cannot be empty.")
    .isLength({ max: 160 })
    .withMessage("Hero title cannot exceed 160 characters."),
  body("tagline")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Hero tagline cannot be empty.")
    .isLength({ max: 320 })
    .withMessage("Hero tagline cannot exceed 320 characters."),
  body("primaryCta.label")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Primary CTA label cannot be empty.")
    .isLength({ max: 80 })
    .withMessage("Primary CTA label cannot exceed 80 characters."),
  body("primaryCta.url")
    .optional()
    .trim()
    .matches(httpUrlPattern)
    .withMessage("Primary CTA URL must be valid."),
  body("secondaryCta.label")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Secondary CTA label cannot be empty.")
    .isLength({ max: 80 })
    .withMessage("Secondary CTA label cannot exceed 80 characters."),
  body("secondaryCta.url")
    .optional()
    .trim()
    .matches(httpUrlPattern)
    .withMessage("Secondary CTA URL must be valid."),
  body("highlights")
    .optional()
    .isArray({ min: 1, max: 6 })
    .withMessage("Hero highlights must contain between 1 and 6 items."),
  body("highlights.*")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Hero highlight cannot be empty."),
  body("slides")
    .optional()
    .isArray({ min: 1 })
    .withMessage("At least one hero slide is required."),
  body("slides.*.imageUrl")
    .optional()
    .trim()
    .matches(cloudinaryUrlPattern)
    .withMessage("Hero slide image URL must be a valid Cloudinary URL."),
  body("slides.*.altText")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Hero slide alt text cannot be empty.")
    .isLength({ max: 180 })
    .withMessage("Hero slide alt text cannot exceed 180 characters."),
  body("slides.*.displayOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Hero slide display order must be a non-negative integer."),
  body("slides.*.isActive")
    .optional()
    .isBoolean()
    .withMessage("Hero slide active status must be true or false."),
  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("Hero active status must be true or false.")
];

export const heroIdValidator = [mongoIdParamValidator()];

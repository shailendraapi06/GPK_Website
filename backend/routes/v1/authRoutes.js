import { Router } from "express";
import { body } from "express-validator";
import { getMe, login, logout } from "../../controllers/authController.js";
import { authenticateAdmin, validateRequest } from "../../middleware/index.js";
import { asyncHandler } from "../../utils/index.js";

const authRouter = Router();

const loginValidationRules = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .bail()
    .isEmail()
    .withMessage("Enter a valid email address."),
  body("password")
    .notEmpty()
    .withMessage("Password is required.")
    .bail()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.")
];

authRouter.post("/login", loginValidationRules, validateRequest, asyncHandler(login));
authRouter.post("/logout", asyncHandler(logout));
authRouter.get("/me", asyncHandler(authenticateAdmin), asyncHandler(getMe));

export { authRouter };

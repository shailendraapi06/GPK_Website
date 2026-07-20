import { Router } from "express";
import {
  editWebsiteSettings,
  listWebsiteSettings,
  removeWebsiteSettings,
  showWebsiteSettings,
  storeWebsiteSettings
} from "../../controllers/index.js";
import { authenticateAdmin, validateRequest } from "../../middleware/index.js";
import {
  createWebsiteSettingsValidator,
  updateWebsiteSettingsValidator,
  websiteSettingsIdValidator
} from "../../middleware/validators/index.js";
import { asyncHandler } from "../../utils/index.js";

const websiteSettingsRouter = Router();

websiteSettingsRouter.get("/", asyncHandler(listWebsiteSettings));
websiteSettingsRouter.get("/:id", websiteSettingsIdValidator, validateRequest, asyncHandler(showWebsiteSettings));
websiteSettingsRouter.post(
  "/",
  authenticateAdmin,
  createWebsiteSettingsValidator,
  validateRequest,
  asyncHandler(storeWebsiteSettings)
);
websiteSettingsRouter.put(
  "/:id",
  authenticateAdmin,
  updateWebsiteSettingsValidator,
  validateRequest,
  asyncHandler(editWebsiteSettings)
);
websiteSettingsRouter.delete(
  "/:id",
  authenticateAdmin,
  websiteSettingsIdValidator,
  validateRequest,
  asyncHandler(removeWebsiteSettings)
);

export { websiteSettingsRouter };

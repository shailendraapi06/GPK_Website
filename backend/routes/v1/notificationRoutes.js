import { Router } from "express";
import {
  editNotification,
  listNotifications,
  removeNotification,
  showNotification,
  storeNotification
} from "../../controllers/index.js";
import { authenticateAdmin, validateRequest } from "../../middleware/index.js";
import {
  createNotificationValidator,
  notificationIdValidator,
  updateNotificationValidator
} from "../../middleware/validators/index.js";
import { asyncHandler } from "../../utils/index.js";

const notificationRouter = Router();

notificationRouter.get("/", asyncHandler(listNotifications));
notificationRouter.get("/:id", notificationIdValidator, validateRequest, asyncHandler(showNotification));
notificationRouter.post(
  "/",
  authenticateAdmin,
  createNotificationValidator,
  validateRequest,
  asyncHandler(storeNotification)
);
notificationRouter.put(
  "/:id",
  authenticateAdmin,
  updateNotificationValidator,
  validateRequest,
  asyncHandler(editNotification)
);
notificationRouter.delete(
  "/:id",
  authenticateAdmin,
  notificationIdValidator,
  validateRequest,
  asyncHandler(removeNotification)
);

export { notificationRouter };

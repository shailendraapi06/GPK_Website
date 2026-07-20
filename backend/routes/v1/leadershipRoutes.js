import { Router } from "express";
import {
  editLeadership,
  listLeadership,
  removeLeadership,
  showLeadership,
  storeLeadership
} from "../../controllers/index.js";
import { authenticateAdmin, validateRequest } from "../../middleware/index.js";
import {
  createLeadershipValidator,
  leadershipIdValidator,
  updateLeadershipValidator
} from "../../middleware/validators/index.js";
import { asyncHandler } from "../../utils/index.js";

const leadershipRouter = Router();

leadershipRouter.get("/", asyncHandler(listLeadership));
leadershipRouter.get("/:id", leadershipIdValidator, validateRequest, asyncHandler(showLeadership));
leadershipRouter.post(
  "/",
  authenticateAdmin,
  createLeadershipValidator,
  validateRequest,
  asyncHandler(storeLeadership)
);
leadershipRouter.put(
  "/:id",
  authenticateAdmin,
  updateLeadershipValidator,
  validateRequest,
  asyncHandler(editLeadership)
);
leadershipRouter.delete(
  "/:id",
  authenticateAdmin,
  leadershipIdValidator,
  validateRequest,
  asyncHandler(removeLeadership)
);

export { leadershipRouter };

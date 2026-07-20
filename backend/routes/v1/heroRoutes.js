import { Router } from "express";
import {
  editHero,
  listHeroes,
  removeHero,
  showHero,
  storeHero
} from "../../controllers/index.js";
import { authenticateAdmin, validateRequest } from "../../middleware/index.js";
import {
  createHeroValidator,
  heroIdValidator,
  updateHeroValidator
} from "../../middleware/validators/index.js";
import { asyncHandler } from "../../utils/index.js";

const heroRouter = Router();

heroRouter.get("/", asyncHandler(listHeroes));
heroRouter.get("/:id", heroIdValidator, validateRequest, asyncHandler(showHero));
heroRouter.post("/", authenticateAdmin, createHeroValidator, validateRequest, asyncHandler(storeHero));
heroRouter.put("/:id", authenticateAdmin, updateHeroValidator, validateRequest, asyncHandler(editHero));
heroRouter.delete("/:id", authenticateAdmin, heroIdValidator, validateRequest, asyncHandler(removeHero));

export { heroRouter };

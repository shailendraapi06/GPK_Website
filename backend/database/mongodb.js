import mongoose from "mongoose";
import { env } from "../config/env.js";
import { logger } from "../utils/logger.js";

export async function connectDatabase() {
  try {
    await mongoose.connect(env.mongodbUri);
    logger.info("MongoDB connected successfully.");
  } catch (error) {
    logger.error("MongoDB connection failed.", error);
    throw error;
  }
}

import dotenv from "dotenv";
import { createHttpError } from "../utils/createHttpError.js";

dotenv.config();

const requiredEnvVariables = [
  "PORT",
  "CLIENT_URL",
  "MONGODB_URI",
  "JWT_SECRET",
  "JWT_EXPIRES_IN"
];

for (const variable of requiredEnvVariables) {
  if (!process.env[variable]) {
    throw createHttpError(500, `Missing required environment variable: ${variable}`);
  }
}

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 5000,
  clientUrl: process.env.CLIENT_URL,
  mongodbUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN
};

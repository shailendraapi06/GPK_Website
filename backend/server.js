import { app } from "./app.js";
import { env } from "./config/env.js";
import { connectDatabase } from "./database/mongodb.js";
import { logger } from "./utils/logger.js";

async function startServer() {
  try {
    await connectDatabase();

    const server = app.listen(env.port, () => {
      logger.info(`Backend server running on port ${env.port} in ${env.nodeEnv} mode.`);
    });

    const shutdown = (signal) => {
      logger.info(`${signal} received. Shutting down backend server...`);

      server.close(() => {
        logger.info("Backend server stopped successfully.");
        process.exit(0);
      });
    };

    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  } catch (error) {
    logger.error("Failed to start backend server.", error);
    process.exit(1);
  }
}

startServer();

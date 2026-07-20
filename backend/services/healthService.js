import { API_MESSAGES } from "../constants/index.js";

export function getHealthStatus() {
  return {
    message: API_MESSAGES.BACKEND_HEALTHY
  };
}

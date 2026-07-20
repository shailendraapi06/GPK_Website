import { getHealthStatus } from "../services/healthService.js";

export const getHealth = (_request, response) => {
  response.status(200).json(getHealthStatus());
};

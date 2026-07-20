import { HTTP_STATUS } from "../constants/index.js";
import { getHealthStatus } from "../services/index.js";
import { sendSuccessResponse } from "../utils/index.js";

export const getHealth = (_request, response) => {
  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    ...getHealthStatus()
  });
};

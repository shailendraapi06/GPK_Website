import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import { getAuthenticatedAdmin, loginAdmin } from "../services/authService.js";
import { sendSuccessResponse } from "../utils/index.js";

export async function login(request, response) {
  const result = await loginAdmin(request.body);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.LOGIN_SUCCESS,
    data: result
  });
}

export function logout(_request, response) {
  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.LOGOUT_SUCCESS
  });
}

export function getMe(request, response) {
  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.AUTH_PROFILE_FETCHED,
    data: {
      admin: getAuthenticatedAdmin(request.admin)
    }
  });
}

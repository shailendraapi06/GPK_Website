import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import {
  createLeadership,
  deleteLeadership,
  getLeadershipById,
  getLeadershipList,
  updateLeadership
} from "../services/index.js";
import { sendSuccessResponse } from "../utils/index.js";

export async function listLeadership(_request, response) {
  const leadership = await getLeadershipList();

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.LEADERSHIP_LIST_FETCHED,
    data: { leadership }
  });
}

export async function showLeadership(request, response) {
  const leader = await getLeadershipById(request.params.id);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.LEADERSHIP_FETCHED,
    data: { leader }
  });
}

export async function storeLeadership(request, response) {
  const leader = await createLeadership(request.body);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.CREATED,
    message: API_MESSAGES.LEADERSHIP_CREATED,
    data: { leader }
  });
}

export async function editLeadership(request, response) {
  const leader = await updateLeadership(request.params.id, request.body);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.LEADERSHIP_UPDATED,
    data: { leader }
  });
}

export async function removeLeadership(request, response) {
  const leader = await deleteLeadership(request.params.id);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.LEADERSHIP_DELETED,
    data: { leader }
  });
}

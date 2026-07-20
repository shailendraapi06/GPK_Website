import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import {
  createNotification,
  deleteNotification,
  getNotificationById,
  getNotifications,
  updateNotification
} from "../services/index.js";
import { sendSuccessResponse } from "../utils/index.js";

export async function listNotifications(_request, response) {
  const notifications = await getNotifications();

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.NOTIFICATION_LIST_FETCHED,
    data: { notifications }
  });
}

export async function showNotification(request, response) {
  const notification = await getNotificationById(request.params.id);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.NOTIFICATION_FETCHED,
    data: { notification }
  });
}

export async function storeNotification(request, response) {
  const notification = await createNotification(request.body);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.CREATED,
    message: API_MESSAGES.NOTIFICATION_CREATED,
    data: { notification }
  });
}

export async function editNotification(request, response) {
  const notification = await updateNotification(request.params.id, request.body);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.NOTIFICATION_UPDATED,
    data: { notification }
  });
}

export async function removeNotification(request, response) {
  const notification = await deleteNotification(request.params.id);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.NOTIFICATION_DELETED,
    data: { notification }
  });
}

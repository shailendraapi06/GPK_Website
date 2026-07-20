import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import {
  createWebsiteSettings,
  deleteWebsiteSettings,
  getWebsiteSettings,
  getWebsiteSettingsById,
  updateWebsiteSettings
} from "../services/index.js";
import { sendSuccessResponse } from "../utils/index.js";

export async function listWebsiteSettings(_request, response) {
  const settings = await getWebsiteSettings();

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.WEBSITE_SETTINGS_FETCHED,
    data: { settings }
  });
}

export async function showWebsiteSettings(request, response) {
  const settings = await getWebsiteSettingsById(request.params.id);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.WEBSITE_SETTINGS_FETCHED,
    data: { settings }
  });
}

export async function storeWebsiteSettings(request, response) {
  const settings = await createWebsiteSettings(request.body);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.CREATED,
    message: API_MESSAGES.WEBSITE_SETTINGS_CREATED,
    data: { settings }
  });
}

export async function editWebsiteSettings(request, response) {
  const settings = await updateWebsiteSettings(request.params.id, request.body);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.WEBSITE_SETTINGS_UPDATED,
    data: { settings }
  });
}

export async function removeWebsiteSettings(request, response) {
  const settings = await deleteWebsiteSettings(request.params.id);

  return sendSuccessResponse(response, {
    statusCode: HTTP_STATUS.OK,
    message: API_MESSAGES.WEBSITE_SETTINGS_DELETED,
    data: { settings }
  });
}

import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import { WebsiteSettings } from "../models/index.js";
import { CustomError } from "../utils/index.js";

function mapWebsiteSettingsPayload(payload = {}) {
  const mappedPayload = {};

  if ("siteName" in payload) mappedPayload.siteName = payload.siteName;
  if ("logoUrl" in payload) mappedPayload.logoUrl = payload.logoUrl;
  if ("address" in payload) mappedPayload.address = payload.address;
  if ("contactEmail" in payload) mappedPayload.contactEmail = payload.contactEmail;
  if ("contactPhone" in payload) mappedPayload.contactPhone = payload.contactPhone;
  if ("socialLinks" in payload) mappedPayload.socialLinks = payload.socialLinks ?? [];

  return mappedPayload;
}

export async function getWebsiteSettings() {
  return WebsiteSettings.findOne().lean();
}

export async function getWebsiteSettingsById(id) {
  const settings = await WebsiteSettings.findById(id).lean();

  if (!settings) {
    throw new CustomError(HTTP_STATUS.NOT_FOUND, API_MESSAGES.WEBSITE_SETTINGS_NOT_FOUND);
  }

  return settings;
}

export async function createWebsiteSettings(payload) {
  return WebsiteSettings.create(mapWebsiteSettingsPayload(payload));
}

export async function updateWebsiteSettings(id, payload) {
  const settings = await WebsiteSettings.findByIdAndUpdate(id, mapWebsiteSettingsPayload(payload), {
    new: true,
    runValidators: true
  });

  if (!settings) {
    throw new CustomError(HTTP_STATUS.NOT_FOUND, API_MESSAGES.WEBSITE_SETTINGS_NOT_FOUND);
  }

  return settings;
}

export async function deleteWebsiteSettings(id) {
  const settings = await WebsiteSettings.findByIdAndDelete(id);

  if (!settings) {
    throw new CustomError(HTTP_STATUS.NOT_FOUND, API_MESSAGES.WEBSITE_SETTINGS_NOT_FOUND);
  }

  return settings;
}

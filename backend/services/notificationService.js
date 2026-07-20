import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import { Notification } from "../models/index.js";
import { CustomError } from "../utils/index.js";

function mapNotificationPayload(payload = {}) {
  const mappedPayload = {};

  if ("title" in payload) mappedPayload.title = payload.title;
  if ("linkUrl" in payload) mappedPayload.linkUrl = payload.linkUrl;
  if ("displayOrder" in payload) mappedPayload.displayOrder = payload.displayOrder;
  if ("isActive" in payload) mappedPayload.isActive = payload.isActive;

  return mappedPayload;
}

export async function getNotifications() {
  return Notification.find().sort({ displayOrder: 1, createdAt: -1 }).lean();
}

export async function getNotificationById(id) {
  const notification = await Notification.findById(id).lean();

  if (!notification) {
    throw new CustomError(HTTP_STATUS.NOT_FOUND, API_MESSAGES.NOTIFICATION_NOT_FOUND);
  }

  return notification;
}

export async function createNotification(payload) {
  return Notification.create(mapNotificationPayload(payload));
}

export async function updateNotification(id, payload) {
  const notification = await Notification.findByIdAndUpdate(id, mapNotificationPayload(payload), {
    new: true,
    runValidators: true
  });

  if (!notification) {
    throw new CustomError(HTTP_STATUS.NOT_FOUND, API_MESSAGES.NOTIFICATION_NOT_FOUND);
  }

  return notification;
}

export async function deleteNotification(id) {
  const notification = await Notification.findByIdAndDelete(id);

  if (!notification) {
    throw new CustomError(HTTP_STATUS.NOT_FOUND, API_MESSAGES.NOTIFICATION_NOT_FOUND);
  }

  return notification;
}

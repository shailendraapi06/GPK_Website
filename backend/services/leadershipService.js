import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import { Leadership } from "../models/index.js";
import { CustomError } from "../utils/index.js";

function mapLeadershipPayload(payload = {}) {
  const mappedPayload = {};

  if ("name" in payload) mappedPayload.name = payload.name;
  if ("designation" in payload) mappedPayload.designation = payload.designation;
  if ("photoUrl" in payload) mappedPayload.photoUrl = payload.photoUrl;
  if ("displayOrder" in payload) mappedPayload.displayOrder = payload.displayOrder;
  if ("isActive" in payload) mappedPayload.isActive = payload.isActive;

  return mappedPayload;
}

export async function getLeadershipList() {
  return Leadership.find().sort({ displayOrder: 1, createdAt: -1 }).lean();
}

export async function getLeadershipById(id) {
  const leadership = await Leadership.findById(id).lean();

  if (!leadership) {
    throw new CustomError(HTTP_STATUS.NOT_FOUND, API_MESSAGES.LEADERSHIP_NOT_FOUND);
  }

  return leadership;
}

export async function createLeadership(payload) {
  return Leadership.create(mapLeadershipPayload(payload));
}

export async function updateLeadership(id, payload) {
  const leadership = await Leadership.findByIdAndUpdate(id, mapLeadershipPayload(payload), {
    new: true,
    runValidators: true
  });

  if (!leadership) {
    throw new CustomError(HTTP_STATUS.NOT_FOUND, API_MESSAGES.LEADERSHIP_NOT_FOUND);
  }

  return leadership;
}

export async function deleteLeadership(id) {
  const leadership = await Leadership.findByIdAndDelete(id);

  if (!leadership) {
    throw new CustomError(HTTP_STATUS.NOT_FOUND, API_MESSAGES.LEADERSHIP_NOT_FOUND);
  }

  return leadership;
}

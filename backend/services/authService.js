import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../config/index.js";
import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import { Admin } from "../models/index.js";
import { CustomError } from "../utils/index.js";

function buildAdminResponse(adminDocument) {
  return {
    id: adminDocument._id,
    fullName: adminDocument.fullName,
    email: adminDocument.email,
    role: adminDocument.role,
    profileImageUrl: adminDocument.profileImageUrl || null,
    isActive: adminDocument.isActive,
    lastLoginAt: adminDocument.lastLoginAt,
    createdAt: adminDocument.createdAt,
    updatedAt: adminDocument.updatedAt
  };
}

function createTokenPayload(adminDocument) {
  return {
    adminId: adminDocument._id.toString(),
    email: adminDocument.email,
    role: adminDocument.role
  };
}

function createAccessToken(adminDocument) {
  return jwt.sign(createTokenPayload(adminDocument), env.jwtSecret, {
    expiresIn: env.jwtExpiresIn
  });
}

export async function loginAdmin({ email, password }) {
  const admin = await Admin.findOne({ email: email.toLowerCase().trim() }).select("+password");

  if (!admin) {
    throw new CustomError(HTTP_STATUS.UNAUTHORIZED, API_MESSAGES.INVALID_CREDENTIALS);
  }

  if (!admin.isActive) {
    throw new CustomError(HTTP_STATUS.FORBIDDEN, API_MESSAGES.ADMIN_INACTIVE);
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);

  if (!isPasswordValid) {
    throw new CustomError(HTTP_STATUS.UNAUTHORIZED, API_MESSAGES.INVALID_CREDENTIALS);
  }

  admin.lastLoginAt = new Date();
  await admin.save();

  const token = createAccessToken(admin);

  return {
    token,
    admin: buildAdminResponse(admin)
  };
}

export function getAuthenticatedAdmin(adminDocument) {
  return buildAdminResponse(adminDocument);
}

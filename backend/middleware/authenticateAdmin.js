import jwt from "jsonwebtoken";
import { env } from "../config/index.js";
import { API_MESSAGES, HTTP_STATUS } from "../constants/index.js";
import { Admin } from "../models/index.js";
import { CustomError } from "../utils/index.js";

export async function authenticateAdmin(request, _response, next) {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader?.startsWith("Bearer ")) {
    return next(new CustomError(HTTP_STATUS.UNAUTHORIZED, API_MESSAGES.AUTH_TOKEN_MISSING));
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, env.jwtSecret);

    const admin = await Admin.findById(decodedToken.adminId).select("-password");

    if (!admin) {
      return next(new CustomError(HTTP_STATUS.UNAUTHORIZED, API_MESSAGES.ADMIN_NOT_FOUND));
    }

    if (!admin.isActive) {
      return next(new CustomError(HTTP_STATUS.FORBIDDEN, API_MESSAGES.ADMIN_INACTIVE));
    }

    request.admin = admin;
    request.auth = decodedToken;

    return next();
  } catch (_error) {
    return next(new CustomError(HTTP_STATUS.UNAUTHORIZED, API_MESSAGES.AUTH_TOKEN_INVALID));
  }
}

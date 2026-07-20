import mongoose from "mongoose";
import { schemaOptions, cloudinaryUrlRule } from "./helpers.js";

const { Schema, model, models } = mongoose;

const adminSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 120,
      index: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false
    },
    role: {
      type: String,
      enum: ["super_admin", "editor"],
      default: "editor"
    },
    profileImageUrl: {
      type: String,
      trim: true,
      validate: cloudinaryUrlRule
    },
    isActive: {
      type: Boolean,
      default: true
    },
    lastLoginAt: {
      type: Date
    }
  },
  schemaOptions
);

adminSchema.index({ fullName: "text", email: "text" });

export const Admin = models.Admin || model("Admin", adminSchema);

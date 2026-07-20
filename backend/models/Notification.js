import mongoose from "mongoose";
import { schemaOptions, httpUrlRule } from "./helpers.js";

const { Schema, model, models } = mongoose;

const notificationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 220
    },
    linkUrl: {
      type: String,
      required: true,
      trim: true,
      validate: httpUrlRule
    },
    displayOrder: {
      type: Number,
      default: 0,
      min: 0
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  schemaOptions
);

notificationSchema.index({ isActive: 1, displayOrder: 1 });
notificationSchema.index({ title: "text" });

export const Notification =
  models.Notification || model("Notification", notificationSchema);

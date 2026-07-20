import mongoose from "mongoose";
import { schemaOptions } from "./helpers.js";

const { Schema, model, models } = mongoose;

const contactMessageSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 120
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30
    },
    subject: {
      type: String,
      required: true,
      trim: true,
      maxlength: 160
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 3000
    },
    status: {
      type: String,
      enum: ["new", "read", "replied", "closed"],
      default: "new"
    }
  },
  schemaOptions
);

contactMessageSchema.index({ status: 1, createdAt: -1 });
contactMessageSchema.index({ fullName: "text", email: "text", subject: "text" });

export const ContactMessage =
  models.ContactMessage || model("ContactMessage", contactMessageSchema);

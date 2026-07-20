import mongoose from "mongoose";
import { schemaOptions, cloudinaryUrlRule, httpUrlRule } from "./helpers.js";

const { Schema, model, models } = mongoose;

const socialLinkSchema = new Schema(
  {
    platform: {
      type: String,
      required: true,
      trim: true,
      enum: ["facebook", "instagram", "linkedin", "youtube", "x", "whatsapp"]
    },
    url: {
      type: String,
      required: true,
      trim: true,
      validate: httpUrlRule
    }
  },
  { _id: false }
);

const websiteSettingsSchema = new Schema(
  {
    key: {
      type: String,
      default: "global",
      unique: true,
      immutable: true,
      trim: true
    },
    siteName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 160
    },
    shortName: {
      type: String,
      trim: true,
      maxlength: 40
    },
    tagline: {
      type: String,
      trim: true,
      maxlength: 220
    },
    logoUrl: {
      type: String,
      required: true,
      trim: true,
      validate: cloudinaryUrlRule
    },
    contactEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    contactPhone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30
    },
    address: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300
    },
    mapUrl: {
      type: String,
      trim: true,
      validate: httpUrlRule
    },
    socialLinks: {
      type: [socialLinkSchema],
      default: []
    }
  },
  schemaOptions
);

export const WebsiteSettings =
  models.WebsiteSettings || model("WebsiteSettings", websiteSettingsSchema);

import mongoose from "mongoose";
import { schemaOptions, cloudinaryUrlRule } from "./helpers.js";

const { Schema, model, models } = mongoose;

const gallerySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 140
    },
    category: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "Campus",
        "Events",
        "Sports",
        "Workshops",
        "Seminars",
        "Laboratories",
        "Industrial Visits"
      ]
    },
    mediaType: {
      type: String,
      required: true,
      enum: ["image", "video"]
    },
    mediaUrl: {
      type: String,
      required: true,
      trim: true,
      validate: cloudinaryUrlRule
    },
    thumbnailUrl: {
      type: String,
      trim: true,
      validate: cloudinaryUrlRule
    },
    altText: {
      type: String,
      trim: true,
      maxlength: 180
    },
    description: {
      type: String,
      trim: true,
      maxlength: 320
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    isPublished: {
      type: Boolean,
      default: true
    },
    displayOrder: {
      type: Number,
      default: 0,
      min: 0
    }
  },
  schemaOptions
);

gallerySchema.index({ category: 1, isPublished: 1, displayOrder: 1 });
gallerySchema.index({ isFeatured: 1, isPublished: 1 });
gallerySchema.index({ title: "text", description: "text" });

export const Gallery = models.Gallery || model("Gallery", gallerySchema);

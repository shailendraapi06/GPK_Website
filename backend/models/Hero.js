import mongoose from "mongoose";
import { schemaOptions, cloudinaryUrlRule, httpUrlRule } from "./helpers.js";

const { Schema, model, models } = mongoose;

const ctaSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80
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

const slideSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
      trim: true,
      validate: cloudinaryUrlRule
    },
    altText: {
      type: String,
      required: true,
      trim: true,
      maxlength: 180
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
  { _id: false }
);

const heroSchema = new Schema(
  {
    key: {
      type: String,
      default: "home-hero",
      unique: true,
      immutable: true,
      trim: true
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 160
    },
    tagline: {
      type: String,
      required: true,
      trim: true,
      maxlength: 320
    },
    primaryCta: {
      type: ctaSchema,
      required: true
    },
    secondaryCta: {
      type: ctaSchema,
      required: true
    },
    highlights: {
      type: [String],
      required: true,
      validate: {
        validator(value) {
          return Array.isArray(value) && value.length >= 1 && value.length <= 6;
        },
        message: "Hero highlights must contain between 1 and 6 items."
      }
    },
    slides: {
      type: [slideSchema],
      required: true,
      validate: {
        validator(value) {
          return Array.isArray(value) && value.length >= 1;
        },
        message: "At least one hero slide is required."
      }
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  schemaOptions
);

heroSchema.index({ isActive: 1 });

export const Hero = models.Hero || model("Hero", heroSchema);

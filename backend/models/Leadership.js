import mongoose from "mongoose";
import { schemaOptions, cloudinaryUrlRule } from "./helpers.js";

const { Schema, model, models } = mongoose;

const leadershipSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    designation: {
      type: String,
      required: true,
      trim: true,
      maxlength: 180
    },
    photoUrl: {
      type: String,
      required: true,
      trim: true,
      validate: cloudinaryUrlRule
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

leadershipSchema.index({ isActive: 1, displayOrder: 1 });
leadershipSchema.index({ name: "text", designation: "text" });

export const Leadership = models.Leadership || model("Leadership", leadershipSchema);

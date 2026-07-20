import mongoose from "mongoose";
import { schemaOptions, cloudinaryUrlRule } from "./helpers.js";

const { Schema, model, models } = mongoose;

const facultySchema = new Schema(
  {
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: true,
      index: true
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    designation: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    qualification: {
      type: String,
      required: true,
      trim: true,
      maxlength: 180
    },
    experienceYears: {
      type: Number,
      required: true,
      min: 0,
      max: 60
    },
    officialEmail: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    photoUrl: {
      type: String,
      required: true,
      trim: true,
      validate: cloudinaryUrlRule
    },
    profilePdfUrl: {
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

facultySchema.index({ department: 1, isActive: 1, displayOrder: 1 });
facultySchema.index({ fullName: "text", designation: "text", qualification: "text" });

export const Faculty = models.Faculty || model("Faculty", facultySchema);

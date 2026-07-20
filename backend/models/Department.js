import mongoose from "mongoose";
import { schemaOptions, cloudinaryUrlRule } from "./helpers.js";

const { Schema, model, models } = mongoose;

const curriculumItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80
    },
    overview: {
      type: String,
      required: true,
      trim: true,
      maxlength: 320
    },
    syllabusPdfUrl: {
      type: String,
      trim: true,
      validate: cloudinaryUrlRule
    },
    labManualPdfUrl: {
      type: String,
      trim: true,
      validate: cloudinaryUrlRule
    }
  },
  { _id: false }
);

const recruiterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    logoUrl: {
      type: String,
      required: true,
      trim: true,
      validate: cloudinaryUrlRule
    }
  },
  { _id: false }
);

const galleryItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    category: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true,
      validate: cloudinaryUrlRule
    },
    altText: {
      type: String,
      trim: true,
      maxlength: 180
    }
  },
  { _id: false }
);

const departmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 140
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^[a-z0-9-]+$/
    },
    iconKey: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
      maxlength: 320
    },
    introduction: {
      type: String,
      required: true,
      trim: true,
      maxlength: 420
    },
    aboutText: {
      type: [String],
      required: true,
      validate: {
        validator(value) {
          return Array.isArray(value) && value.length >= 1;
        },
        message: "At least one department overview paragraph is required."
      }
    },
    focusAreas: {
      type: [String],
      default: []
    },
    hod: {
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
        trim: true,
        validate: cloudinaryUrlRule
      },
      message: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1200
      }
    },
    curriculumDescription: {
      type: String,
      trim: true,
      maxlength: 420
    },
    curriculumItems: {
      type: [curriculumItemSchema],
      default: []
    },
    placement: {
      description: {
        type: String,
        trim: true,
        maxlength: 420
      },
      supportPoints: {
        type: [String],
        default: []
      },
      recruiters: {
        type: [recruiterSchema],
        default: []
      }
    },
    galleryItems: {
      type: [galleryItemSchema],
      default: []
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

departmentSchema.index({ isActive: 1, displayOrder: 1 });
departmentSchema.index({ name: "text", shortDescription: "text", introduction: "text" });

export const Department = models.Department || model("Department", departmentSchema);

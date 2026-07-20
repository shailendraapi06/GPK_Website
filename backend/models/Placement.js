import mongoose from "mongoose";
import { schemaOptions, cloudinaryUrlRule } from "./helpers.js";

const { Schema, model, models } = mongoose;

const placementStatisticSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80
    },
    value: {
      type: Number,
      required: true,
      min: 0
    },
    suffix: {
      type: String,
      trim: true,
      maxlength: 20
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
    },
    isFeatured: {
      type: Boolean,
      default: false
    }
  },
  { _id: false }
);

const processStepSchema = new Schema(
  {
    step: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 320
    },
    displayOrder: {
      type: Number,
      default: 0,
      min: 0
    }
  },
  { _id: false }
);

const trainingProgramSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 320
    },
    iconKey: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    }
  },
  { _id: false }
);

const placementNoticeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 220
    },
    noticeDate: {
      type: Date,
      required: true
    },
    actionLabel: {
      type: String,
      default: "View",
      trim: true,
      maxlength: 40
    },
    pdfUrl: {
      type: String,
      required: true,
      trim: true,
      validate: cloudinaryUrlRule
    },
    isPublished: {
      type: Boolean,
      default: true
    }
  },
  { _id: false }
);

const placementDriveSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    },
    driveDate: {
      type: Date,
      required: true
    },
    eligibility: {
      type: String,
      required: true,
      trim: true,
      maxlength: 220
    },
    status: {
      type: String,
      required: true,
      enum: [
        "upcoming",
        "applications_open",
        "registration_soon",
        "shortlisting",
        "completed"
      ]
    },
    actionLabel: {
      type: String,
      default: "View",
      trim: true,
      maxlength: 40
    },
    pdfUrl: {
      type: String,
      trim: true,
      validate: cloudinaryUrlRule
    }
  },
  { _id: false }
);

const placementSchema = new Schema(
  {
    key: {
      type: String,
      default: "main-placement",
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
    introduction: {
      type: String,
      required: true,
      trim: true,
      maxlength: 420
    },
    overview: {
      title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 160
      },
      description: {
        type: [String],
        required: true,
        validate: {
          validator(value) {
            return Array.isArray(value) && value.length >= 1;
          },
          message: "Placement overview must contain at least one paragraph."
        }
      },
      imageUrl: {
        type: String,
        required: true,
        trim: true,
        validate: cloudinaryUrlRule
      }
    },
    officer: {
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
        maxlength: 160
      },
      message: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1200
      },
      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      },
      phone: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
      },
      officeHours: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
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
      }
    },
    processSteps: {
      type: [processStepSchema],
      default: []
    },
    recruiters: {
      type: [recruiterSchema],
      default: []
    },
    trainingPrograms: {
      type: [trainingProgramSchema],
      default: []
    },
    notices: {
      type: [placementNoticeSchema],
      default: []
    },
    drives: {
      type: [placementDriveSchema],
      default: []
    },
    statistics: {
      type: [placementStatisticSchema],
      default: []
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  schemaOptions
);

placementSchema.index({ isActive: 1 });

export const Placement = models.Placement || model("Placement", placementSchema);

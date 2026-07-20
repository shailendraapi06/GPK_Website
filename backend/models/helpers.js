export const schemaOptions = {
  timestamps: true,
  versionKey: false
};

export const cloudinaryUrlRule = {
  validator(value) {
    if (!value) {
      return true;
    }

    return /^https:\/\/res\.cloudinary\.com\/.+/i.test(value);
  },
  message: "Only valid Cloudinary URLs are allowed."
};

export const httpUrlRule = {
  validator(value) {
    if (!value) {
      return true;
    }

    return /^https?:\/\/.+/i.test(value);
  },
  message: "Only valid HTTP or HTTPS URLs are allowed."
};

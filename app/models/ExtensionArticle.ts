import mongoose, { Schema } from "mongoose";

const extensionArticle = new Schema(
  {
    title: String,
    content: String,
    image: String,
    slug: {
      type: String,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

const ExtensionArticle =
  mongoose.models.ExtensionArticle ||
  mongoose.model("ExtensionArticle", extensionArticle);

export default ExtensionArticle;

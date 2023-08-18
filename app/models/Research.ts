import mongoose, { Schema } from "mongoose";

const research = new Schema(
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

const Research =
  mongoose.models.Research || mongoose.model("Research", research);

export default Research;

import mongoose, { Schema } from "mongoose";

const publication = new Schema(
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

const Publication =
  mongoose.models.Publication || mongoose.model("Publication", publication);

export default Publication;

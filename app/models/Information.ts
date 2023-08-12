import mongoose, { Schema } from "mongoose";

const information = new Schema(
  {
    text: String,
    image: String,
    links: String,
  },
  { timestamps: true }
);

const Information =
  mongoose.models.Information || mongoose.model("Information", information);
export default Information;

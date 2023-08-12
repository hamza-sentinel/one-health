import mongoose, { Schema } from "mongoose";

const forthComing = new Schema(
  {
    text: String,
    image: String,
    links: String,
  },
  { timestamps: true }
);

const ForthComing =
  mongoose.models.ForthComing || mongoose.model("ForthComing", forthComing);
export default ForthComing;

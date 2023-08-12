import mongoose, { Schema } from "mongoose";

const news = new Schema(
  {
    text: String,
    image: String,
    links: String,
  },
  { timestamps: true }
);

const News = mongoose.models.News || mongoose.model("News", news);
export default News;

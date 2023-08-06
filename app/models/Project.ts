import mongoose, { Schema } from "mongoose";

const project = new Schema(
  {
    year: String,
    description: String,
    status: String,
    budget: String,
  },
  { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model("Project", project);

export default Project;

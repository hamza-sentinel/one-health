import mongoose, { Schema } from "mongoose";

const nationalCollaboratorSchema = new Schema(
  {
    name: String,
    university: String,
    telephone: String,
    email: String,
    image: String,
  },
  { timestamps: true }
);

const NationalCollaborator =
  mongoose.models.NationalCollaborator ||
  mongoose.model("NationalCollaborator", nationalCollaboratorSchema);

export default NationalCollaborator;

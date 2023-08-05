import mongoose, { Schema } from "mongoose";

const internationalCollaboratorSchema = new Schema(
  {
    name: String,
    university: String,
    telephone: String,
    email: String,
  },
  { timestamps: true }
);

const InternationalCollaborator =
  mongoose.models.InternationalCollaborator ||
  mongoose.model("InternationalCollaborator", internationalCollaboratorSchema);

export default InternationalCollaborator;

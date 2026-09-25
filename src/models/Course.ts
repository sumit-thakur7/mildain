import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    provider: { type: String },
    duration: { type: String },
    cohortStarts: { type: String },
    badge: { type: String },
    bannerImage: { type: String },
    logoImage: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
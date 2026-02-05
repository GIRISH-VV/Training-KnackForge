import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  status: {
    type: String,
    enum: ["Planned", "Watched"],
    default: "Planned"
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 0
  }
}, { timestamps: true });

export default mongoose.model("Movie", movieSchema);
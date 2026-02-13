import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    interval: {
      type: Number, // minutes
      required: true,
    },

    startTime: {
      type: String, // "08:00"
      required: true,
    },

    endTime: {
      type: String, // "22:00"
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isPaused: {
      type: Boolean,
      default: false,
    },

    sleepMode: {
      type: Boolean,
      default: false,
    },

    fcmToken: {
      type: String,
    },

    lastNotifiedAt: {
      type: Date,
    },

    activityLevel: {
      type: String,
      enum: ["Low", "Moderate", "High"],
      default: "Low",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reminder", reminderSchema);

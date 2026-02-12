import express from "express";
import { createOrUpdateReminder, pauseReminder, resumeReminder, toggleSleepMode ,getReminder } from "../controllers/reminderController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/set", protect, createOrUpdateReminder);
router.get("/", protect, getReminder);
router.put("/pause", protect, pauseReminder);
router.put("/resume", protect, resumeReminder);
router.put("/sleep", protect, toggleSleepMode);

export default router;

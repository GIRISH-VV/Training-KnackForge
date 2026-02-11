import express from "express";
import { createWaterLog, updateWaterLog, deleteWaterLog, getDailySummary } from "../controllers/waterLogController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, createWaterLog);
router.put("/add", protect, updateWaterLog);
router.delete("/:id", protect, deleteWaterLog);
router.get("/daily", protect, getDailySummary);

export default router;

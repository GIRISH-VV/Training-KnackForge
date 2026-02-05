import express from "express";
import { addMovie, getMovies, updateStatus, updateRating } from "../controllers/movieController.js";

const router = express.Router();

router.post("/", addMovie);
router.get("/", getMovies);
router.put("/:id/status", updateStatus);
router.put("/:id/rating", updateRating);

export default router;
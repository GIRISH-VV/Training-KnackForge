import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { registerValidator, loginValidator } from "../validators/authValidator.js";
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.post("/register", registerValidator, validate, registerUser);
router.post("/login", loginValidator, validate, loginUser);

export default router;  
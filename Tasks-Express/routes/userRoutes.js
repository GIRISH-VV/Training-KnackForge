// import express from 'express';
// import {createUser,loginUser,getUser,updateUser,deleteUser,getAllUsers,getUsers} from '../controllers/userController.js';

// import { refreshAccessToken } from "../controllers/authController.js";
// import {protect,adminOnly} from "../middlewares/authMiddleware.js";

// const router = express.Router();

// router.get("/me", protect, (req, res) => {
//   res.status(200).json({
//     success: true,
//     user: req.user
//   });
// });

// router.post("/refresh-token", refreshAccessToken);
// router.post('/register', createUser);
// router.post("/login", loginUser);
// router.get('/:id',protect, getUser);
// router.put('/:id', updateUser);
// router.delete("/", protect, adminOnly, deleteUser);
// router.get("/users", protect, adminOnly, getAllUsers);

// router.get("/", protect, getUsers);

// export default router;

import express from "express";
import {
  createUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
} from "../controllers/userController.js";

import { refreshAccessToken } from "../controllers/authController.js";
import { protect, adminOnly } from "../middlewares/authMiddleware.js";

const router = express.Router();

// AUTH
router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/refresh-token", refreshAccessToken);

// CURRENT LOGGED-IN USER
router.get("/me", protect, (req, res) => {
  res.status(200).json({ user: req.user });
});

// ADMIN: GET ALL USERS
router.get("/", protect, adminOnly, getAllUsers);

// USER BY ID
router.get("/:id", protect, getUser);

// ADMIN: UPDATE USER
router.put("/:id", protect, adminOnly, updateUser);

// ADMIN: DELETE USER
router.delete("/:id", protect, adminOnly, deleteUser);

export default router;

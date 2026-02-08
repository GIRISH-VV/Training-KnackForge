// import User from '../models/userModel.js'
// import bcrypt from "bcryptjs";
// import { generateAccessToken, generateRefreshToken } from "../utils/token.js";
// // import User from "../models/User.js";

// //Register
// export const createUser = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       role
//     });

//     res.status(201).json({
//       success: true,
//       message: "User registered successfully",
//     });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// //Login
// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(401).json({ message: "Invalid email or password" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(401).json({ message: "Invalid email or password" });

//     const accessToken = generateAccessToken(user._id);
//     const refreshToken = generateRefreshToken(user._id);

//     //store refresh token in DB
//     user.refreshToken = refreshToken;
//     await user.save();

//     res.status(200).json({
//       success: true,
//       accessToken,
//       refreshToken,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email
//       }
//     });

//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// export const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find().select("-password");
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const getUsers = async (req, res) => {
//   const users = await User.find().select("-password");
//   res.json(users);
// };


// export const getUser = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const user = await User.findById(id).select("-password");
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(400).json({
//             success: false,
//             message: err.message
//         });
//     }
// };

// // export const updateUser = async (req, res) => {
// //     const id = req.params.id;
// //     try {
// //         const user = await User.findByIdAndUpdate(
// //             id,
// //             req.body,
// //             { new: true }
// //         );

// //         if (!user) {
// //             return res.status(404).json({ message: "User not found" });
// //         }

// //         res.status(200).json(user);

// //     } catch (err) {
// //         res.status(400).json({
// //             success: false,
// //             message: err.message
// //         });
// //     }
// // };

// export const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { name, role } = req.body;

//   const user = await User.findByIdAndUpdate(
//     id,
//     { name, role },
//     { new: true }
//   ).select("-password");

//   res.json(user);
// };


// // export const deleteUser = async (req, res) => {
// //   try {
// //     const { email } = req.body;

// //     if (!email) {
// //       return res.status(400).json({success: false,message: "Email is required",});
// //     }
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(404).json({success: false,message: "User not found",
// //       });
// //     }
    
// //     await user.deleteOne();
// //     res.status(200).json({success: true,message: "User deleted successfully",
// //     });
// //     } catch (err) {
// //     res.status(400).json({success: false,message: err.message,
// //     });
// //   }
// // };
// export const deleteUser = async (req, res) => {
//   const { id } = req.params;

//   await User.findByIdAndDelete(id);
//   res.json({ message: "User deleted" });
// };
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/token.js";

// REGISTER
export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      success: true,
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET SINGLE USER
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE USER (ADMIN ONLY)
export const updateUser = async (req, res) => {
  const { name, role } = req.body;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { name, role },
    { new: true }
  ).select("-password");

  res.status(200).json(user);
};

// DELETE USER (ADMIN ONLY)
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "User deleted" });
};



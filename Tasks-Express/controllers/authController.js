// import jwt from "jsonwebtoken";
// import User from "../models/userModel.js";
// import { generateAccessToken } from "../utils/token.js";

// export const refreshAccessToken = async (req, res) => {
//   const { refreshToken } = req.body;

//   if (!refreshToken)
//     return res.status(401).json({ message: "Refresh token required" });

//   try {
//     const decoded = jwt.verify(
//       refreshToken,
//       process.env.JWT_REFRESH_TOKEN_SECRET
//     );

//     const user = await User.findById(decoded.id);
//     if (!user || user.refreshToken !== refreshToken)
//       return res.status(403).json({ message: "Invalid refresh token" });

//     const newAccessToken = generateAccessToken(user._id);

//     res.status(200).json({ accessToken: newAccessToken });

//   } catch (err) {
//     res.status(403).json({ message: "Invalid refresh token" });
//   }
// };
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { generateAccessToken } from "../utils/token.js";

export const refreshAccessToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken)
    return res.status(401).json({ message: "Refresh token required" });

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decoded.id);
    if (!user || user.refreshToken !== refreshToken)
      return res.status(403).json({ message: "Invalid refresh token" });

    const newAccessToken = generateAccessToken(user._id);

    res.status(200).json({ accessToken: newAccessToken });
  } catch {
    res.status(403).json({ message: "Invalid refresh token" });
  }
};




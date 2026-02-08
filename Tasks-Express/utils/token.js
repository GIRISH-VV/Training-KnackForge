// import jwt from "jsonwebtoken";

// export const generateAccessToken = (userId) =>
//   jwt.sign(
//     { id: userId },
//     process.env.JWT_ACCESS_TOKEN_SECRET,
//     { expiresIn: "15m" }
//   );

// export const generateRefreshToken = (userId) =>
//   jwt.sign(
//     { id: userId },
//     process.env.JWT_REFRESH_TOKEN_SECRET,
//     { expiresIn: "7d" }
// );
import jwt from "jsonwebtoken";

export const generateAccessToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_ACCESS_TOKEN_SECRET,     // ✅ SAME AS middleware
    { expiresIn: "15m" }
  );
};

export const generateRefreshToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
};










  













  



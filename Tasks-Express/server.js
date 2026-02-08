import dotenv from "dotenv";
dotenv.config({ path: ".env" });

if (!process.env.JWT_ACCESS_TOKEN_SECRET) {
  throw new Error("JWT_ACCESS_TOKEN_SECRET NOT LOADED");
}

import express from "express";
import cors from "cors";
import morgan from "morgan";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoutes);
app.use(errorHandler);

const startServer = async () => {
  await connectDB();
  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
};
console.log("JWT_ACCESS_TOKEN_SECRET =", process.env.JWT_ACCESS_TOKEN_SECRET);
startServer();

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { userRouter } from "./routes/userRoutes.js";
import { hotelRoutes } from "./routes/hotelRoutes.js";

dotenv.config();
const app = express();

// convert data from frontend into json
app.use(express.json());

//allow clients from different origins access to server
app.use(cors());

app.use(cookieParser());

app.use("/auth", userRouter);
app.use("/", hotelRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDbB connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
  });

app.listen(PORT, () => console.log("listening on port 5000"));

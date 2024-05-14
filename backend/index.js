import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { userRouter } from "./routes/userRoutes.js";
import { hotelRoutes } from "./routes/hotelRoutes.js";

const app = express();

// convert data from frontend into json
app.use(express.json());

//allow clients from different origins access to server
app.use(cors());

app.use(cookieParser());

app.use("/auth", userRouter);
app.use("/", hotelRoutes);

mongoose
  .connect(
    "mongodb+srv://quynhngaenglish:SzoT5sTWqb6UDate@hotelmern.1gkdyun.mongodb.net/hotelmern?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDbB connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
  });

app.listen(5000, () => console.log("listening on port 5000"));

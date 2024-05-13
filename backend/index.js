import express from "express";
import cors from "cors";
import { userRouter } from "./routes/users.js";
import mongoose from "mongoose";

const app = express();

// convert data from frontend into json
app.use(express.json());

//allow clients from different origins access to server
app.use(cors());

mongoose.connect(
  "mongodb+srv://quynhngaenglish:SzoT5sTWqb6UDate@hotelmern.1gkdyun.mongodb.net/"
);

app.use("/auth", userRouter);

app.listen(5000, () => console.log("listening on port 5000"));

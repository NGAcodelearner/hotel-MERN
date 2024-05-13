import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRoutes.js";
import mongoose from "mongoose";

const app = express();

// convert data from frontend into json
app.use(express.json());

//allow clients from different origins access to server
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", userRouter);

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

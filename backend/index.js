import express from "express";
import cors from "cors";
import { userRouter } from "./routes/users.js";

const app = express();

// convert data from frontend into json
app.use(express.json());

//allow clients from different origins access to server
app.use(cors());

app.use("/auth", userRouter);

app.listen(5000, () => console.log("listening on port 5000"));

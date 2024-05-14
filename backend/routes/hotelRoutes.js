import express from "express";
import { createHotel, getHotels } from "../controllers/hotelController.js";
import { authorization } from "../middleware/authMiddleware.js";
const hotelRoutes = express.Router();

hotelRoutes.get("/", getHotels);
hotelRoutes.post("/create", authorization, createHotel);

export { hotelRoutes };

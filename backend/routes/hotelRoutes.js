import express from "express";
import {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
} from "../controllers/hotelController.js";
import { authorization } from "../middleware/authMiddleware.js";
const hotelRoutes = express.Router();

hotelRoutes.get("/", getHotels);
hotelRoutes.get("/:id", getHotel);
hotelRoutes.post("/create", createHotel);
hotelRoutes.put("/:id/update", updateHotel);
hotelRoutes.delete("/:id/delete", deleteHotel);

export { hotelRoutes };

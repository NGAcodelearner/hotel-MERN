import { HotelModel } from "../models/HotelModel.js";

export const getHotels = async (req, res) => {
  try {
    const response = await HotelModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

export const createHotel = async (req, res) => {
  const hotel = new HotelModel(req.body);
  try {
    const response = await hotel.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

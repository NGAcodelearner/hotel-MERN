import { HotelModel } from "../models/HotelModel.js";

export const getHotels = async (req, res) => {
  try {
    const hotels = await HotelModel.find({});
    res.json(hotels);
  } catch (error) {
    res.json(error);
  }
};

export const getHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await HotelModel.findById(id);
    res.json(hotel);
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

export const updateHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await HotelModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (hotel) {
      return res
        .status(200)
        .json({ message: "Hotel updated successfully!", hotel });
    } else {
      res.status(404).json({ message: "Hotel not found" });
    }
  } catch (error) {
    res.json(error);
  }
};

export const deleteHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await HotelModel.findByIdAndDelete(id);

    if (hotel) {
      return res.status(200).json({ message: "Hotel deleted successfully!" });
    } else {
      res.status(404).json({ message: "Hotel not found" });
    }
  } catch (error) {
    res.json(error);
  }
};

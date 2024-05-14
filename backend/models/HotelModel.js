import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  review: { type: String, required: true },
});

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  imageURL: { type: String, required: true },
  price: { type: Number, required: true },
  reviews: [reviewSchema],
});

export const HotelModel = mongoose.model("hotels", HotelSchema);

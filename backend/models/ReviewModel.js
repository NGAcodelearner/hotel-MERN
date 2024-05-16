import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
});

export const ReviewModel = mongoose.model("Review", ReviewSchema);

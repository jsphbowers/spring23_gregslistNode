import mongoose from "mongoose";
const Schema = mongoose.Schema

export const HousesSchema = new Schema(
  {
    address: { type: String, required: true, minLength: 4 },
    color: { type: String },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    price: { type: Number, required: true, min: 50000 }
  }
)
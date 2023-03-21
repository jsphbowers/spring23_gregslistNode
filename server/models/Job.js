import mongoose from "mongoose";
const Schema = mongoose.Schema

export const JobsSchema = new Schema(
  {
    title: { type: String, required: true, minlength: 3, maxlength: 50 },
    pay: { type: Number, required: true, minlength: 2 },
    company: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)
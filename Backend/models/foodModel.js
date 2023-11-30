import mongoose from 'mongoose'

const foodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    cal: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Food = mongoose.model('Food', foodSchema);

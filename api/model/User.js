import mongoose, { model } from "mongoose";
import productModel from "../model/Product";

const userSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  date: {
    date: Date.now(),
  },
  total_order_count: {
    type: String,
  },

  orders: { productModel },
});

export default model("User", userSchema);

import mongoose, { model } from "mongoose";
import orderModel from "../model/Order";

const userSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  orders: { orderModel },
});

export default model("User", userSchema);

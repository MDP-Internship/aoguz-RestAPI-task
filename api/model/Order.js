import mongoose, { model } from "mongoose";
const orderScheme = mongoose.Schema({
  id: {
    type: String,
  },
  shippingType: {
    type: String,
    required: true,
    enum: ["Kara yolu", "demir yolu", "hava yolu", "deniz yolu"],
    default: "Kara yolu",
  },
  shipAdress: {
    type: String,
    required: true,
  },
});

export default model("Order", orderScheme);

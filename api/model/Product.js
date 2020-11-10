import mongoose, { model } from "mongoose";

const productSchema = mongoose.Schema({
  id: {
    type: String,
  },
  productInfo: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

export default model("Product", productSchema);

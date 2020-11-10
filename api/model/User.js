import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

export default model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your name"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "please enter your email"],
    },
    phone: {
      type: String,
      unique: true,
      required: [true, "please enter your phone-number"],
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
    },
    address: {
      type: String,
      default: false,
      required: [true, "please enter your address"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
    isShopowner: {
      type: Boolean,
      default: true,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;

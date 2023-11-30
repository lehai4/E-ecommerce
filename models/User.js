import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, "Incorrect email format"],
    },
    password: {
      type: String,
      default: "adj-081096",
      match: [/((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,8})/i],
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    provider: {
      type: String,
      default: "credentials",
    },
  },
  { timestamps: true }
);
const User = models.user || model("user", userSchema);
export default User;

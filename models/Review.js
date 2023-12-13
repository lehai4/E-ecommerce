import mongoose, { Schema, model, models } from "mongoose";
const reviewSchema = new Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    name: {
      type: String,
    },
    image: {
      type: String,
      default: "Image of user comment",
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
    rating: {
      type: String,
    },
  },
  { timestamps: true }
);
const Review = models.review || model("review", reviewSchema);
export default Review;

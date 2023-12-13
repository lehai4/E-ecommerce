import mongoose, { Schema } from "mongoose";
const productScheme = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    des: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    specification: {
      type: Object,
    },
  },
  { timestamps: true }
);
const Product =
  mongoose.models.product || mongoose.model("product", productScheme);
export default Product;

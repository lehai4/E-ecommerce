import { Schema, models, model } from "mongoose";
const productScheme = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    categoryID: {
      type: String,
      required: true,
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
  },
  { timestamps: true }
);
const Product = models.product || model("product", productScheme);
export default Product;

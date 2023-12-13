import { Schema, models, model } from "mongoose";
const categorySchema = new Schema({
  catelog: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "Image of Category",
  },
});
const Categories = models.categories || model("categories", categorySchema);
export default Categories;

import { Schema, models, model } from "mongoose";
const categorySchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  catelog: {
    type: String,
    required: true,
  },
});
const Categories = models.categories || model("categories", categorySchema);
export default Categories;

import { TypeCategory, TypeProduct } from "@/interface";
import { connect } from "@/lib/utils/database";
import Product from "@/models/Product";
import Categories from "@/models/Category";

export async function getAllProduct() {
  await connect();
  const product: TypeProduct[] = await Product.find();

  if (!product) throw new Error("Product not found");
  return product;
}

export async function getAllCategory() {
  await connect();
  const category: TypeCategory[] = await Categories.find();

  if (!category) throw new Error("Category not found");
  return category;
}

import { TypeCategory, TypeProduct } from "@/interface";
import { comparePath } from "@/lib/utils/convertPathname";
import { connect } from "@/lib/utils/database";
import Categories from "@/models/Category";
import Product from "@/models/Product";
import { redirect } from "next/navigation";

//getAllProduct
export async function GET() {
  await connect();

  const products = await Product.find();

  return Response.json({ products });
}

export async function getAllCategory() {
  await connect();
  const category: TypeCategory[] = await Categories.find();

  if (category.length < 0) throw new Error("Category not found");
  return category;
}

export async function getProductByName(data: string) {
  try {
    await connect();
    const name = await comparePath(data);
    const res = await Product.find({ name });
    let finalObj: any = {};

    // loop elements of the array
    for (let i = 0; i < res?.length; i++) {
      Object.assign(finalObj, res[i]);
    }

    return { ...finalObj._doc };
  } catch (err) {
    redirect(`/errors?error=${err}`);
  }
}

import { TypeCategory, TypeProduct } from "@/interface";
import {
  comparePath,
  compareToLowerSearchProduct,
} from "@/lib/utils/convertPathname";
import { connect } from "@/lib/utils/database";
import Categories from "@/models/Category";
import Product from "@/models/Product";
import { redirect } from "next/navigation";

export async function getAllProduct() {
  await connect();
  const products: TypeProduct[] = await Product.find();

  if (products.length < 0) throw new Error("Product not found");
  return products;
}
//POST
export async function POST(req: Request, res: Response) {
  const { type, ...rest } = await req.json();

  if (type === "getProductByPrice") {
    const res = await getProductByPrice(rest.rangePrice);

    const data = await res;

    return Response.json(data, { status: 200 });
  } else if (type === "getProductByCategory") {
    const data = await getProductByCategory(rest.catelog);

    const products = await data;

    return Response.json(products, { status: 200 });
  } else if (type === "getProductBySearch") {
    const data = await getProductBySearch(rest.search);

    const products = await data;

    return Response.json(products, { status: 200 });
  } else if (type === "getProductBySort") {
    const data = await getProductBySort(rest.sortValue);

    const products = await data;

    return Response.json(products, { status: 200 });
  }
}
// getProductByCategory
export async function getProductByCategory(catelog: string) {
  try {
    await connect();
    const category = await getCategoryByName(catelog);

    const products: TypeProduct[] = await Product.find({
      categoryID: category._id,
    });

    return products;
  } catch (err) {
    console.log("Err", err);
  }
}

// gerProductByPrice
export async function getProductByPrice(rangePrice: number[]) {
  try {
    await connect();

    const products = await Product.find();

    return products;
  } catch (err) {
    redirect(`/errors?error=${err}`);
  }
}

// getProductBySearch
export async function getProductBySearch(search: string) {
  try {
    await connect();
    const searchString = await compareToLowerSearchProduct(search);
    const products = await Product.find({
      name: searchString,
    });

    return products;
  } catch (err) {
    redirect(`/errors?error=${err}`);
  }
}
export async function getProductBySort(sortValue: string) {
  try {
    await connect();
    const products = await Product.find({
      priority: sortValue,
    });

    return products;
  } catch (err) {
    redirect(`/errors?error=${err}`);
  }
}
// getAllCategory
export async function getAllCategory() {
  await connect();
  const category: TypeCategory[] = await Categories.find();

  if (category.length < 0) throw new Error("Category not found");
  return category;
}
// getCategoryByName
export async function getCategoryByName(catelog: string) {
  try {
    await connect();

    const category = await Categories.findOne({ catelog: catelog });

    return category;
  } catch (e) {
    console.log(e);
  }
}
// getProductByName
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

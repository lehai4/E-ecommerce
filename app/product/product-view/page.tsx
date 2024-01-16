import { getAllCategory } from "@/app/api/product/route";
import ProductUIView from "@/app/ui/product/product-view";
import { ProductViewsSkeleton } from "@/app/ui/skeleton";
import { TypeCategory } from "@/interface";
import { Suspense } from "react";

const getDataProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/product", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "content-Type": "application/json",
      },
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json();
  } catch (e) {
    console.log("Failed");
  }
};

const ProductView = async ({
  countShowProduct,
}: {
  countShowProduct: number;
}) => {
  const products = await getDataProducts();
  const category: TypeCategory[] = await JSON.parse(
    JSON.stringify(await getAllCategory())
  );

  return (
    <Suspense fallback={<ProductViewsSkeleton />}>
      <ProductUIView
        products={products}
        category={category}
        countShowProduct={countShowProduct}
      />
    </Suspense>
  );
};

export default ProductView;

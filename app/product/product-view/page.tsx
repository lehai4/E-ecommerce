import { getAllCategory } from "@/app/api/product/route";
import ProductUIView from "@/app/ui/product/product-view";
import { TypeCategory, TypeProduct } from "@/interface";
import { API_URL } from "@/config";
const getDataProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/api/product`, {
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
  const products: TypeProduct[] = await getDataProducts();
  const category: TypeCategory[] = await JSON.parse(
    JSON.stringify(await getAllCategory())
  );

  return (
    <div>
      <ProductUIView
        products={products}
        category={category}
        countShowProduct={countShowProduct}
      />
    </div>
  );
};

export default ProductView;

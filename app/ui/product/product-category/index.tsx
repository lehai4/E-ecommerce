import { useAppDispatch, useAppSelector } from "@/hooks";
import { TypeCategory, TypeProduct } from "@/interface";
import { convertPathname } from "@/lib/utils/convertPathname";
import { AddToCart } from "@/redux/slice/cartSlice";
import { AddToWishList } from "@/redux/slice/wishListSlice";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { toast } from "react-toastify";

const getProducts = async () => {
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
const getProductByCategory = async (catelog: string, type: string) => {
  try {
    const res = await fetch("http://localhost:3000/api/product", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({ catelog, type }), // body data type must match "Content-Type" header
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

const getProductByPrice = async (rangePrice: number[], type: string) => {
  try {
    const res = await fetch("http://localhost:3000/api/product", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({ rangePrice, type }), // body data type must match "Content-Type" header
      headers: {
        "content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json();
  } catch (e) {
    console.log("Failed");
  }
};

const getProductBySearch = async (search: string, type: string) => {
  try {
    const res = await fetch("http://localhost:3000/api/product", {
      method: "POST",
      body: JSON.stringify({ search, type }),
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
const getProductBySort = async (sortValue: string, type: string) => {
  try {
    const res = await fetch("http://localhost:3000/api/product", {
      method: "POST",
      body: JSON.stringify({ sortValue, type }),
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

async function ProductByCategory({
  category,
  catelog,
  search,
  sortValue,
  rangePrice,
}: {
  category: TypeCategory[];
  catelog: string;
  search: string;
  sortValue: string;
  rangePrice: number[];
}) {
  const dispath = useAppDispatch();
  const wishListArrr: TypeProduct[] = useAppSelector(
    (state) => state.wishList.wishListArr
  );

  const data: TypeProduct[] = await getProducts();

  const productArr: TypeProduct[] =
    catelog !== ""
      ? await getProductByCategory(catelog, "getProductByCategory")
      : catelog === "" && search !== "" && sortValue === "Default sorting"
      ? await getProductBySearch(search, "getProductBySearch")
      : catelog === "" && search === "" && sortValue !== "Default sorting"
      ? await getProductBySort(sortValue, "getProductBySort")
      : data;

  return (
    <div className="container">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 -mx-[15px]`}
      >
        {productArr.length > 0 ? (
          productArr.map((product: any, i: number) => (
            <div key={i} className="px-[15px] w-full card-product mb-[30px]">
              <div className="card-product__img">
                <img
                  src={`${product?.image}`}
                  className="w-full h-full max-h-[270px]"
                  width={100}
                  height={100}
                  alt="product"
                />
                <div className="card-product__imgOverlay absolute left-0 bottom-0 w-full px-[5px] py-[30px] opacity-0 z-10 transition-all translate-y-[30px] ">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <button className="rounded-md p-2 bg-purple-700 border border-purple-700 hover:bg-sky-500 hover:border-sky-500 duration-200 ease-in transition-all">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-white"
                        onClick={() => {
                          toast.info("Temporary close function!");
                        }}
                      />
                    </button>
                    <button className="rounded-md p-2 bg-purple-700 border border-purple-700 hover:bg-sky-500 hover:border-sky-500 duration-200 ease-in transition-all">
                      <ShoppingCartIcon
                        className="h-5 w-5 text-white"
                        onClick={() => {
                          dispath(
                            AddToCart({
                              ...product,
                              quantity: 1,
                            })
                          );
                          toast.success("Add Product successfully!");
                        }}
                      />
                    </button>
                    <button className="rounded-md p-2 bg-purple-700 border border-purple-700 hover:bg-sky-500 hover:border-sky-500 duration-200 ease-in transition-all">
                      <HeartIcon
                        className="h-5 w-5 text-white"
                        onClick={() => {
                          let flag = true;
                          wishListArrr.filter((item) => {
                            if (item._id === product._id) {
                              flag = false;
                            } else if (item._id !== product._id) {
                              flag = true;
                            }
                          });
                          flag === true
                            ? dispath(AddToWishList(product)) &&
                              toast.success("Add WishList successfully!")
                            : toast.error(
                                "Add WishList Failed!. The product already exists in the wishlist"
                              );
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body p-[20px]">
                <div className="flex flex-col justify-center items-center">
                  {category.map((cate, i) => {
                    if (cate._id === product.categoryID) {
                      return (
                        <span key={i} className="text-[15px] font-normal">
                          {cate.catelog}
                        </span>
                      );
                    }
                  })}
                  <span className="card-product__title lg:mb-[8px] text-[20px] font-[500] tracking-tighter whitespace-nowrap text-ellipsis overflow-hidden">
                    <Link
                      href={`/product/product-view/${convertPathname(
                        product.name
                      )}`}
                    >
                      {product.name}
                    </Link>
                  </span>
                  <div
                    className="flex flex-row items-center text-[18px] font-medium"
                    style={{ color: "#777777" }}
                  >
                    ${`${product.price}.00`}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="container">
            <span className="px-5 py-2 bg-gray-100 text-red-600 text-base">
              There aren't any products
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductByCategory;

"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { TypeCategory, TypeProduct } from "@/interface";
import { convertPathname } from "@/lib/utils/convertPathname";
import { getProducts } from "@/lib/utils/getSliceProduct";
import { AddToCart } from "@/redux/slice/cartSlice";
import { AddToWishList } from "@/redux/slice/wishListSlice";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ProductUIView = ({
  products,
  category,
  countShowProduct,
}: {
  products: TypeProduct[];
  category: TypeCategory[];
  countShowProduct: number;
}) => {
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const wishListArrr = useAppSelector((state) => state.wishList.wishListArr);

  const router = useRouter();

  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mx-[15px]">
        {getProducts(countShowProduct, products)?.map((product, i) => (
          <div key={i} className="px-[15px] w-full card-product mb-[30px]">
            <div className="card-product__img">
              <Image
                src={`${product.image}`}
                className="w-full h-full max-h-[270px]"
                width={100}
                height={100}
                quality={100}
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
                        if (session?.user === undefined) {
                          toast.info("Please login for purchase");
                          router.push("/auth/signin");
                        } else {
                          dispatch(
                            AddToCart({
                              ...product,
                              quantity: 1,
                            })
                          );
                          toast.success("Add Product Successfully!");
                        }
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
                          ? dispatch(AddToWishList(product)) &&
                            toast.success("Add WishList Successfully!")
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
                  $ {`${product.price}.00`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductUIView;

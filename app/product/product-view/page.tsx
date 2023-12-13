"use client";
import { TypeCategory, TypeProduct } from "@/interface";
import { convertPathname } from "@/lib/utils/convertPathname";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Statistic } from "antd";
import Image from "next/image";
import Link from "next/link";
const ProductView = ({
  product,
  category,
}: {
  product: TypeProduct[];
  category: TypeCategory[];
}) => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mx-[15px]">
        {product.map((product, i) => (
          <div key={i} className="px-[15px] w-full card-product mb-[30px]">
            <div className="card-product__img">
              <Image
                src={`${product?.image}`}
                className="w-full h-full max-h-[270px]"
                quality="100"
                width={100}
                height={100}
                priority
                alt="product"
              />
              <div className="card-product__imgOverlay absolute left-0 bottom-0 w-full px-[5px] py-[30px] opacity-0 z-10 transition-all translate-y-[30px] ">
                <div className="flex flex-row items-center justify-center gap-2">
                  <Button
                    icon={<SearchOutlined />}
                    type="primary"
                    shape="default"
                    size="large"
                    className="bg-purple-700"
                  />
                  <Button
                    icon={<ShoppingCartOutlined />}
                    type="primary"
                    shape="default"
                    size="large"
                    className="bg-purple-700"
                  />
                  <Button
                    icon={<HeartOutlined />}
                    type="primary"
                    shape="default"
                    size="large"
                    className="bg-purple-700"
                  />
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
                <span className="card-product__title lg:mb-[8px] text-[20px] font-[500] tracking-tighter">
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
                  $
                  <Statistic
                    value={product.price}
                    precision={2}
                    valueStyle={{ color: "#777777", fontSize: 18 }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductView;

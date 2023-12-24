"use client";
import { TypeCategory } from "@/interface";
import {
  Divider,
  Radio,
  RadioChangeEvent,
  Slider,
  Space,
  Typography,
} from "antd";
import React, { Suspense, useState } from "react";
import { CategorysSkeleton } from "../skeleton";
import ProductByCategory from "./product-category";

const ProductIndex = ({ category }: { category: TypeCategory[] }) => {
  const [catelog, setCatelog] = useState<string>("");

  const [rangePrice, setRangePrice] = useState([1, 10000]);

  const handleCategoryChange = (e: RadioChangeEvent) => {
    setCatelog(e.target.value);
  };
  console.log("re-render...");

  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        <div className="col-span-1">
          <div>
            <div className="border px-8 py-2.5 bg-blue-600">
              <Typography.Text className="font-semibold tracking-tight text-[20px] text-white">
                Categories
              </Typography.Text>
            </div>
            <div className="px-8 py-5 bg-gray-100">
              <Radio.Group onChange={handleCategoryChange} value={catelog}>
                <Space direction="vertical">
                  {category.map((cate, i) => (
                    <Radio
                      value={cate.catelog}
                      key={i}
                      className="text-[16px] text-gray-500"
                    >
                      {cate.catelog}
                    </Radio>
                  ))}
                </Space>
              </Radio.Group>
            </div>
          </div>
          <Divider />
          <Space direction="vertical" className="w-full">
            <Typography.Text className="font-semibold text-[18px]">
              Price
            </Typography.Text>
            {/* Slider */}
            <Slider
              min={1}
              max={10000}
              range
              className="w-full"
              defaultValue={[1, 10000]}
              value={rangePrice.map((range) => range)}
              onChange={(e) => {
                setRangePrice(e);
              }}
            />
            <Typography.Text className="font-normal text-[16px] text-gray-500">
              Price: ${rangePrice[0]} to ${rangePrice[1]}
            </Typography.Text>
          </Space>
        </div>
        <div className="md:col-span-1 lg:col-span-3 xl:col-span-3">
          <Suspense fallback={<CategorysSkeleton />}>
            <ProductByCategory
              count={3}
              category={category}
              catelog={catelog}
              rangePrice={rangePrice}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductIndex);

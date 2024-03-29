"use client";
import { TypeCategory } from "@/interface";
import {
  Button,
  Divider,
  Radio,
  RadioChangeEvent,
  Select,
  Slider,
  Space,
  Typography,
} from "antd";
import { Suspense, useEffect, useState } from "react";

// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";
// import Search from "../search";
import { CategorysSkeleton } from "../skeleton";
import ProductByCategory from "./product-category";
import { toast } from "react-toastify";

type SortType = {
  value: string;
  label: string;
};
const sortArr: SortType[] = [
  { value: "popularity", label: "Sort by popularity" },
  { value: "latest", label: "Sort by latest" },
  { value: "low to high", label: "Sort by price: low to high" },
  { value: "high to low", label: "Sort by price: high to low" },
];

const ProductIndex = ({
  category,
  query,
  currentPage,
}: {
  category: TypeCategory[];
  query: string;
  currentPage: number;
}) => {
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();

  const [catelog, setCatelog] = useState<string>("");
  const [sortValue, setSortValue] = useState("Default sorting");
  const [rangePrice, setRangePrice] = useState([1, 10000]);

  const handleCategoryChange = (e: RadioChangeEvent) => {
    setCatelog(e.target.value);
  };
  const handleChangeSort = (value: string) => {
    setSortValue(value);
  };

  const handleClearFilter = () => {
    setCatelog("");
    setSortValue("Default sorting");
    setRangePrice([1, 10000]);
  };

  // const handleSearch = useDebouncedCallback((search: string) => {
  //   const params = new URLSearchParams(searchParams);

  //   params.set("page", "1");
  //   if (search) {
  //     params.set("query", search);
  //   } else {
  //     params.delete("query");
  //   }
  //   replace(`${pathname}?${params.toString()}`);
  // }, 300);

  useEffect(() => {
    window.scrollTo(0, 410);
  }, [query]);
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-1">
          <div>
            <div className="border px-8 py-2.5 bg-blue-600">
              <Typography.Text className="font-semibold tracking-tight text-[19px] text-white">
                Categories
              </Typography.Text>
            </div>
            <div className="px-8 py-5 bg-gray-100">
              <Radio.Group onChange={handleCategoryChange} value={catelog}>
                <Space direction="vertical">
                  {category?.map((cate, i) => (
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
            <Slider
              min={1}
              max={10000}
              range
              className="w-full"
              defaultValue={[1, 10000]}
              value={rangePrice.map((range) => range)}
              onChange={(e) => {
                toast.info("Temporary close function");
                setRangePrice(e);
              }}
            />
            <Typography.Text className="font-normal text-[16px] text-gray-500">
              Price: ${rangePrice[0]} to ${rangePrice[1]}
            </Typography.Text>
          </Space>
          <Space className="mt-5">
            <Button
              onClick={handleClearFilter}
              type="primary"
              className="bg-blue-500"
            >
              Clear Filter
            </Button>
          </Space>
        </div>
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-3">
          <div className="container">
            <div className="bg-gray-100 px-5 py-2.5 mb-8">
              <Space className="flex flex-row items-center flex-wrap justify-between">
                <Space className="flex-wrap">
                  <Select
                    style={{ width: 230 }}
                    onChange={handleChangeSort}
                    options={sortArr}
                    value={sortValue}
                    defaultValue={"Default sorting"}
                  />
                </Space>
                {/* <Search
                  placeholder="Search product..."
                  handleSearch={handleSearch}
                /> */}
              </Space>
            </div>
          </div>

          <Suspense fallback={<CategorysSkeleton />}>
            <ProductByCategory
              category={category}
              search={query}
              catelog={catelog}
              sortValue={sortValue}
              rangePrice={rangePrice}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProductIndex;

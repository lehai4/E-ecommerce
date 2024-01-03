"use client";
import React from "react";
import { Carousel, Image, Space, Typography } from "antd";
import Link from "next/link";

const BannerContent: React.FC = () => (
  <div className="bg-gray-100 mb-[60px]">
    <div className="h-[516px]">
      <Carousel autoplay className="container h-full flex">
        <div className="px-0 sm:px-0 md:px-0 lg:px-28 xl:px-28">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <Space
              align="start"
              direction="vertical"
              className="justify-center"
            >
              <h1 className="text-[50px] font-semibold leading-tight tracking-tigher">
                Product <br />
                Collection
              </h1>
              <Typography.Paragraph>
                Get Free Shipping on all orders over 99.000đ
              </Typography.Paragraph>
              <Link href="/product">
                <button className="rounded-full border border-blue-600 text-base px-[25px] md:px-[30px] lg:px-[42px] py-[8px] md:py-[12px] lg:py-[12px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white duration-300 ease-in">
                  Browse Now
                </button>
              </Link>
            </Space>
            <Image
              src="https://bazar-react.vercel.app/assets/images/products/bag.png"
              preview={false}
              style={{
                maxHeight: 400,
                maxWidth: "100%",
              }}
              alt="Bag"
              className="hidden md:hidden sm:block lg:block xl:block px-[0px] sm:px-[0px]  md:px-[0px] lg:px-[38px] xl:px-[38px] "
            />
          </div>
        </div>
        <div className="px-0 sm:px-0 md:px-0 lg:px-28 xl:px-28">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <Space
              align="start"
              direction="vertical"
              className="justify-center"
            >
              <h1 className="text-[50px] font-semibold leading-tight tracking-tigher">
                Product <br />
                Collection
              </h1>
              <Typography.Paragraph>
                Get Free Shipping on all orders over 99.000đ
              </Typography.Paragraph>
              <Link href="/product">
                <button className="rounded-full border border-blue-600 text-base px-[25px] md:px-[30px] lg:px-[42px] py-[8px] md:py-[12px] lg:py-[12px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white duration-300 ease-in">
                  Browse Now
                </button>
              </Link>
            </Space>
            <Image
              src="https://bazar-react.vercel.app/assets/images/products/nike-black.png"
              preview={false}
              style={{
                maxHeight: 400,
                maxWidth: "100%",
              }}
              alt="Nike Black"
              className="hidden md:hidden sm:block lg:block xl:block px-[0px] sm:px-[0px]  md:px-[0px] lg:px-[38px] xl:px-[38px] "
            />
          </div>
        </div>
      </Carousel>
    </div>
  </div>
);

export default BannerContent;

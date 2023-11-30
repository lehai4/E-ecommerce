"use client";
import Link from "next/link";

const BannerOffer = () => {
  return (
    <div className="section-offer">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 -mx-[15px]">
          <div className="text-center pt-[100px] pb-[110px] lg:pt-[122px] lg:pb-[135px] xl:pt-[122px] xl:pb-[135px]">
            <h3 className="text-[35px] font-[500] mb-[20px] leading-[55px] tracking-tighter xl:text-[50px] xl:mb-[25px]">
              Up to 50% off
            </h3>
            <h4 className="text-[30px] font-[400] tracking-tighter mb-[8px] leading-[39px]">
              Winter Sale
            </h4>
            <p
              className="text-[15px] mb-[16px] leading-[25px]"
              style={{ color: "#555555" }}
            >
              Him she'd let them sixth saw light
            </p>
            <Link href="/#">
              <button className="rounded-full border border-blue-600 text-base lg:mt-[25px] xl:mt-[25px] px-[25px] md:px-[30px] lg:px-[42px] py-[8px] md:py-[12px] lg:py-[12px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white  duration-300 ease-in">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOffer;

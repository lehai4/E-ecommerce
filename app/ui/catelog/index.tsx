"use client";
import { TypeCategory } from "@/interface";
import { convertPathname } from "@/lib/utils/convertPathname";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const CatelogView = ({ category }: { category: TypeCategory[] }) => (
  <div>
    <Carousel
      responsive={responsive}
      autoPlay={true}
      swipeable={true}
      draggable={true}
      infinite={true}
      keyBoardControl={false}
      renderArrowsWhenDisabled={true}
      removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
      partialVisible={false}
      containerClass="carousel-container"
      itemClass="px-[10px]"
    >
      {category.map((cate, i) => (
        <div className="card-catelog" key={i}>
          <div className="card-catelog__img relative w-full h-full">
            <img
              src={cate.image}
              alt="Catelog Image"
              height={533}
              style={{ height: 533, width: 613, backgroundPosition: "center" }}
            />

            <Link
              href={`/category/${convertPathname(cate.catelog)}`}
              className="card-catelog__imgOverlay"
            >
              <div className="relative before:absolute hover:before:w-full before:w-0 before:h-[1px] before:bg-slate-50 before:bottom-0 before:transition-all before:duration-150 before:ease-in">
                <p className="text-white text-[15px] font-[500] m-[0px] ">
                  {cate.catelog}
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

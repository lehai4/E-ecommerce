"use client";
import { TypeCategory } from "@/interface";
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
      transitionDuration={500}
      infinite
      swipeable={false}
      draggable={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      slidesToSlide={1}
      containerClass="carousel-container"
      itemClass="px-[10px]"
    >
      {category.map((cate, i) => (
        <div className="card-catelog" key={i}>
          <div className="card-catelog__img relative w-full h-full">
            <img src={cate.image} alt="Catelog Image" />
            <Link
              href={`/category/${cate.catelog}`}
              className="card-catelog__imgOverlay bg-sky-600 absolute bottom-[50px] transition-all py-[23px] pr-[90px] pl-[25px] opacity-0 -z-10 translate-y-[50px]"
            >
              <p className="text-white text-[15px] font-[500] m-[0px]">
                {cate.catelog}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

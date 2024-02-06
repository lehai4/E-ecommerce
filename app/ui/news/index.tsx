"use client";
import { newsBlog } from "@/mockAPI";
import Image from "next/image";
import Link from "next/link";
import { SmileOutlined, ArrowRightOutlined } from "@ant-design/icons";
const News = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 -mx-[15px]">
        {newsBlog.map((news) => (
          <div className="px-[15px] card card-news" key={news.id}>
            <div className="card-news__img">
              <Image
                src={`/${news.img}`}
                alt=""
                width="300"
                height="300"
                className="w-full h-full"
              />
            </div>
            <div className="card-body pt-[25px] pr-[25px] pb-[25px]">
              <div className="flex flex-row items-center gap-5 mb-[12px]">
                <Link href="/#">
                  <p style={{ color: "#777" }}>{news.info.creator}</p>
                </Link>
                <div className="flex flex-row items-center gap-2">
                  <SmileOutlined />
                  <p style={{ color: "#777" }}>
                    {news.info.comments.count}
                    Comments
                  </p>
                </div>
              </div>
              <h4 className="card-news__title mb-[20px] text-[20px] font-[500] leading-[26px] tracking-tighter">
                <Link href={news.path}>{news.title}</Link>
              </h4>
              <p
                className="mb-[16px] text-[15px] leading-[25px]"
                style={{ color: "#777" }}
              >
                {news.desc}
              </p>
              <Link
                href="/#"
                className="card-news__link font-[500] flex flex-row items-center text-[15px] leading-[25px] gap-2"
              >
                Read More
                <ArrowRightOutlined className="transition-all" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

"use client";
import Section from "@/app/components/section";
import {
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GithubOutlined,
  BehanceOutlined,
} from "@ant-design/icons";
import {
  blogArticle,
  blogCategories,
  blogInstar,
  blogOption,
  blogPopular,
} from "@/mockAPI";
import { Avatar, Button, Divider, Input, Space, Typography } from "antd";
import Image from "next/image";

const BlogUi = () => {
  return (
    <div className="blog-page">
      <Section className="py-[30px] lg:py-[80px] xl:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 -mx-[15px] gap-y-6">
            {blogOption.map((item) => (
              <div className="px-[15px]" key={item.id}>
                <div className="blog-content relative text-center cursor-pointer">
                  <Image
                    src={item.image}
                    quality={100}
                    width={100}
                    height={100}
                    className="w-full h-full max-h-[270px]"
                    alt="Blog Image"
                    priority
                  />
                  <div
                    id="overlayBlog"
                    className=" absolute top-[20px] left-[20px] right-[20px] bottom-[20px] bg-gray-900/50 text-white transition-all ease-in duration-200 flex items-center justify-center"
                  >
                    <div>
                      <h5 className="mb-[0px] text-[18px] leading-[26px] uppercase text-white relative font-semibold">
                        {item.title}
                      </h5>
                      <div className="w-full bg-white h-[1px]" />
                      <p className="text-[14px] leading-[26px] font-[400]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className="">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 -mx-[15px]">
            <div className="lg:col-span-2 xl:col-span-2 px-[15px]">
              {blogArticle.map((item, i) => (
                <div
                  className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 -mx-[15px] mb-[40px]"
                  key={i}
                >
                  <div className="text-left sm:text-left md:text-right lg:text-right xl:text-right pt-[30px] px-[15px] pb-[15px]">
                    <div className="mb-[20px]">
                      {item.tag.map((_, i) => (
                        <span key={i}>{_}, </span>
                      ))}
                    </div>
                    <div className="flex flex-col items-start sm:items-start md:items-end lg:items-end xl:items-end gap-2">
                      {item.meta.map((me) => (
                        <Space key={me.id_x} style={{ columnGap: 15 }}>
                          <Typography.Text className="text-gray-500">
                            {me.title_chill}
                          </Typography.Text>
                          {me.icon}
                        </Space>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-2 px-[15px]">
                    <div className="w-full">
                      <Image
                        src={item.image}
                        width={100}
                        quality={100}
                        height={100}
                        alt="Image of Blog"
                        priority
                        className="w-full h-full"
                      />
                      <div className="blog-details pt-[20px]">
                        <h1 className="text-[24px] font-bold tracking-tight">
                          {item.title}
                        </h1>
                        <Typography.Text className="text-gray-500 mt-[8px] text-[15px]">
                          {item.desc}
                        </Typography.Text>
                        <div className="mt-[26px]">
                          <Button
                            className="bg-gray-100 text-black font-semibold"
                            type="primary"
                          >
                            View More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-1 px-[15px]">
              <div className="border border-gray-100 p-[30px] bg-gray-50">
                <aside>
                  <Input.Search
                    placeholder="Search Posts"
                    className="rounded-full placeholder:text-white"
                  />
                  <Divider />
                </aside>

                <aside>
                  <div className="text-center">
                    <Space direction="vertical" align="center">
                      <Avatar
                        src="https://preview.colorlib.com/theme/aroma/img/blog/author.png.webp"
                        size={120}
                        alt="Avatar"
                      />
                      <Typography.Text
                        strong
                        className="text-[18px] tracking-tight"
                      >
                        Nguyen Van A
                      </Typography.Text>
                      <Typography.Paragraph className="text-gray-500">
                        Lorem ipsum dolor
                      </Typography.Paragraph>
                      <Space style={{ columnGap: 15 }}>
                        {[
                          <FacebookOutlined className="text-[16px]" />,
                          <TwitterOutlined className="text-[16px]" />,
                          <GithubOutlined className="text-[16px]" />,
                          <BehanceOutlined className="text-[16px]" />,
                        ].map((icon, i) => (
                          <div key={i}>{icon}</div>
                        ))}
                      </Space>
                      <Typography.Text className="text-[15px] text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem eum minus, tenetur sequi culpa quod hic.
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Asperiores maxime ipsam suscipit quidem neque.
                      </Typography.Text>
                    </Space>
                  </div>

                  <Divider />
                </aside>
                <aside>
                  <div className="text-center mb-[26px]">
                    <span className="py-[8px] px-[20px] block w-full text-[16px] font-semibold bg-blue-600 text-white">
                      Popular Posts
                    </span>
                  </div>
                  <div className="flex flex-col justify-center align-middle gap-5">
                    {blogPopular.map((item) => (
                      <div
                        className="flex flex-row items-center gap-4"
                        key={item.id}
                      >
                        <Image
                          src={item.image}
                          width={100}
                          quality={100}
                          height={100}
                          alt={item.title}
                        />
                        <div className="flex flex-col gap-1">
                          <Typography.Text className="font-bold text-[14px]">
                            {item.title}
                          </Typography.Text>
                          <Typography.Text>{item.time}</Typography.Text>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Divider />
                </aside>
                <aside>
                  <div className="text-center mb-[26px]">
                    <span className="py-[8px] px-[20px] block w-full text-[16px] font-semibold bg-blue-600 text-white">
                      Post Categories
                    </span>
                  </div>

                  <div className="flex flex-col justify-center align-middle">
                    {blogCategories.map((item) => (
                      <div className="flex flex-row justify-between border-b-[1px] py-[15px] border-dotted border-gray-200">
                        <span>{item.title}</span>
                        <span>{item.index}</span>
                      </div>
                    ))}
                  </div>
                  <Divider />
                </aside>

                <aside>
                  <div className="text-center mb-[26px]">
                    <span className="py-[8px] px-[20px] block w-full text-[16px] font-semibold bg-blue-600 text-white">
                      Newsletter
                    </span>
                  </div>
                  <div className="text-center">
                    <Typography.Text className="text-[15px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem eum minus, tenetur sequi culpa ea non quod hic
                    </Typography.Text>
                  </div>
                  <div className="mt-5 mb-2">
                    <Input.Search
                      placeholder="Enter email address"
                      allowClear
                      size="middle"
                      enterButton="Subcribe"
                      prefix={<MailOutlined />}
                      className="bg-blue-600"
                    />
                  </div>
                  <span className="text-center block">
                    You can unsubscribe at any time
                  </span>
                  <Divider />
                </aside>

                <aside>
                  <div className="text-center mb-[26px]">
                    <span className="py-[8px] px-[20px] block w-full text-[16px] font-semibold bg-blue-600 text-white">
                      Tag Clouds
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-1 gap-y-3">
                    {[
                      "Technology",
                      "Fashion",
                      "Architecture",
                      "Food",
                      "Lifestyle",
                      "Adventure",
                      "Art",
                      "Technology",
                    ].map((item) => (
                      <div>
                        <span className="text-[12px] px-[8px] py-[4px] border border-gray-200 bg-white cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-200 ease-in">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Divider />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="instagram_area relative">
        <div
          className="container"
          style={{
            maxWidth: 1625,
          }}
        >
          <div className="absolute left-1/2 top-1/2 z-20 -translate-y-2/4 -translate-x-2/4">
            <Button size="large" className="bg-white">
              Follow us on instagram
            </Button>
          </div>
          <div className="instar_image -mx-[15px] flex flex-wrap mb-[70px] sm:mb-[70px] md:mb-[120px] lg:-mb-[120px] xl:-mb-[120px]">
            {blogInstar.map((instar) => (
              <a
                href="/blog"
                className="h-full block overflow-hidden max-w-[50%] sm:max-w-[50%] md:max-w-[33.33%] lg:max-w-[16.667%] xl:max-w-[16.667%]"
                key={instar.id}
              >
                <img
                  src={instar.image}
                  alt="Image of Blog"
                  className="w-full transition-all"
                />
              </a>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogUi;

import {
  footerBannerAddress,
  footerBannerImage,
  footerBannerLink,
} from "@/mockAPI";
import { Button, Layout, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
const { Footer } = Layout;
const FooterPage = () => {
  return (
    <footer className="bg-sky-900">
      {/* footer-top */}
      <div className="footer-top lg:pt-[195px] lg:pb-[120px]  py-[50px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 -mx-[15px]">
            <div className="px-[15px] mb-[30px] lg:mb-[0px]">
              <h4 className="text-white mb-[10px] sm:mb-[28px] lg:mb-[28px] text-[18px] sm:text-[36px] lg:text-[36px] font-[500] leading-[24px] capitalize">
                Our Mission
              </h4>
              <Typography.Text className="text-[15px] text-white opacity-60">
                So seed seed green that winged cattle in. Gathering thing made
                fly you're no divided deep moved us lan Gathering thing us land
                years living.
              </Typography.Text>
              <br />
              <br />
              <Typography.Text className="text-[15px] text-white opacity-60">
                So seed seed green that winged cattle in. Gathering thing made
                fly you're no divided deep moved
              </Typography.Text>
            </div>
            <div className="px-[15px] mb-[30px] lg:mb-[0px] lg:ml-[95px]">
              <h4 className="text-white mb-[10px] sm:mb-[28px] lg:mb-[28px] text-[18px] font-[500] capitalize">
                Quick Links
              </h4>
              <Space align="start" direction="vertical">
                {footerBannerLink.map((item, i) => (
                  <Link href={`${item.path}`} key={i}>
                    <Typography.Text className="text-[15px] text-white opacity-60">
                      {item.title}
                    </Typography.Text>
                  </Link>
                ))}
              </Space>
            </div>
            <div className="px-[15px] mb-[30px] lg:mb-[0px] lg:mr-[95px]">
              <h4 className="text-white mb-[28px] text-[18px] font-[500] capitalize">
                Gallery
              </h4>
              <div className="flex flex-row flex-wrap gap-2">
                {footerBannerImage.map((item, i) => (
                  <Image
                    src={`/${item.url}`}
                    priority
                    alt="Picture of footer Image"
                    key={i}
                    width={70}
                    height={100}
                  />
                ))}
              </div>
            </div>
            <div className="px-[15px] mb-[30px] lg:mb-[0px]">
              <h4 className="text-white mb-[10px] sm:mb-[28px] lg:mb-[28px] text-[18px] font-[500] capitalize">
                Contact
              </h4>
              <div className="flex flex-col gap-y-3">
                {footerBannerAddress.map((item, i) => (
                  <div className="flex flex-row justify-start gap-3" key={i}>
                    <Button
                      shape="circle"
                      className="flex align-middle justify-center items-center bg-sky-500 text-white border-0"
                    >
                      {item.icon}
                    </Button>
                    <div className="flex flex-col">
                      <Typography.Text
                        strong
                        className="text-white capitalize text-[15px]"
                      >
                        {item.intro}
                      </Typography.Text>
                      <Typography.Text className="text-[15px] text-white opacity-60">
                        {item.des}
                      </Typography.Text>
                      {item.desExtra !== "" && (
                        <Typography.Text className="text-[15px] text-white opacity-60">
                          {item.desExtra}
                        </Typography.Text>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer-bottom */}
      <div className="footer-bottom h-[90px]">
        <div className="flex items-center justify-center h-full bg-sky-800">
          <Typography.Text strong className="text-white text-[16px]">
            Copyright ©2023 All rights reserved | LeChiHai -.-
          </Typography.Text>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;

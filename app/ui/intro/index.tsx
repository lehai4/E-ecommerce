"use client";
import { Typography } from "antd";

const Intro = ({
  intro,
  introItalic,
  des,
}: {
  intro: string;
  introItalic: string;
  des: string;
}) => {
  return (
    <div className="container">
      <div className="intro pb-[60px]">
        <p className="text-[16px] opacity-90 mb-[3px]">{des}</p>
        <h2 className={`text-[36px] font-[700] leading-[39px]`}>
          {intro}
          <Typography.Text className={`text-[36px] font-[700] relative`}>
            &nbsp;
            {introItalic}
            <span className="absolute h-[2px] w-full bg-blue-500 -bottom-2 left-0" />
          </Typography.Text>
        </h2>
      </div>
    </div>
  );
};

export default Intro;

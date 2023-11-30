"use client";
import { Input } from "antd";

const Subscribe = () => {
  return (
    <div className="container">
      <div className="subscribe text-center bg-white py-[45px] px-[10px] lg:py-[85px] lg:px-[10px] rounded-[5px] shadow-lg">
        <h3
          className={`text-[28px] lg:text-[36px] uppercase mb-[16px] font-[700] leading-[39px] tracking-tighter`}
        >
          get update from anywhere
        </h3>
        <p className="opacity-80 mb-[1rem] text-[15px]">
          Bearing Void gathering light light his eavening unto dont afraid
        </p>
        <div className="form-subscribe">
          <form
            action="/#"
            method="post"
            className="flex flex-row items-center flex-wrap justify-center gap-3 pt-[0.25rem] mt-[3rem]"
          >
            <label className="hidden" arria-label="email">
              Email
            </label>
            <Input
              size="large"
              bordered
              className="rounded-full w-full sm:w-4/12 md:w-4/12 lg:w-4/12 py-[12px]"
              placeholder="Your email address"
            />
            <button className="rounded-full border border-blue-600 text-base px-[30px] py-[12px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white  duration-300 ease-in">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

import React from "react";
import PropTypes from "prop-types";
import { policy } from "@/mockAPI";

const Policy = async () => {
  return (
    <div className="container">
      <div className="px-8 py-5 border border-slate-100 shadow-md rounded">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {policy.map((policy, i) => (
            <div
              key={i}
              className="flex flex-row items-center gap-4 relative before:absolute before:h-full before:w-[1px] before:bg-white sm:before:bg-white md:before:bg-white lg:before:bg-slate-200 xl:before:bg-slate-200  before:right-0 last:before:bg-white "
            >
              <div className="policy__icon">{policy.icon}</div>
              <div className="flex flex-col justify-center ">
                <div className=" font-semibold text-[18px]">{policy.name}</div>
                <div className=" text-[14px]">{policy.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Policy.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default Policy;
// [&>*:nth-child(even)]:before:bg-white sm:[&>*:nth-child(even)]:before:bg-white md:[&>*:nth-child(even)]:before:bg-white lg:[&>*:nth-child(even)]:before:bg-slate-200 xl:[&>*:nth-child(even)]:before:bg-slate-200

import React from "react";
import ArrowUp from "../assets/arrow-up.svg";
import ArrowDown from "../assets/arrow-down.svg";

const Card34 = ({
  iconSrc,
  title,
  value,
  graphSrc,
  trendPercentage,
  trendDirection,
}) => {
  return (
    <div className="flex flex-col justify-center w-[300px] h-[128px] bg-[#F1F4EB] rounded-lg shadow-lg px-3">
      <div className="flex gap-2 mt-5 px-2 w-[300px] h-[70px]">
        <div className="flex justify-center items-center">
          <img className="w-[43px] h-[43px]" src={iconSrc} alt="" />
          <div className="flex flex-col p-2 mt-2">
            <p className="font-[500] text-[15px] text-[#181818]">{title}</p>
            <p className="font-[600] text-[20px] text-[#101828]">{value}</p>
          </div>
        </div>
      </div>
      <div className="flex px-3 w-[320px] h-[70px] gap-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <img
              src={trendDirection === "up" ? ArrowUp : ArrowDown}
              alt="Trend Icon"
            />
            <div
              className={
                trendDirection === "up" ? "text-green-600" : "text-red-600"
              }
            >
              {trendPercentage} %
            </div>
          </div>
          <p className="text-[12px] text-[#181818]">last 7 days</p>
        </div>
        <img
          className="flex w-[150px] h-[80px] mb-12 pb-5"
          src={graphSrc}
          alt="Graph"
        />
      </div>
    </div>
  );
};

export default Card34;

import React from "react";

const Card12 = ({ iconSrc, title, value, graphSrc, legendItems }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[300px] h-[128px] bg-[#F1F4EB] rounded-lg shadow-lg">
      <div className="flex gap-3 w-auto h-[80px]">
        <div className="flex justify-center items-center">
          <img className="w-[38px] h-[38px]" src={iconSrc} alt="" />
          <div className="flex flex-col w-[130px] px-2">
            <p className="font-[600] text-[15px] text-[#181818]">{title}</p>
            <p className="font-[700] text-[18px] text-[#101828]">{value}</p>
          </div>
        </div>
        <div>
          <img className="w-[65px] h-[65px] mt-2" src={graphSrc} alt="" />
        </div>
      </div>
      <div className="flex justify-between w-[250px]">
        {legendItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex gap-2 items-center">
              <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
              <p className="font-[500] text-[12px] text-[#000000]">
                {item.label}
              </p>
            </div>
            <p className="font-[500] text-[14px] text-[#000000] ml-4">
              {item.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card12;

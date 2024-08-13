import React from "react";

const Card56 = ({ iconSrc, title, value, legendItems }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[300px] h-[128px] bg-[#F1F4EB] rounded-lg shadow-lg">
      <div className="flex gap-2 mt-5 px-6 w-[320px] h-[70px] mb-3">
        <div className="flex justify-center items-center">
          <img className="w-[43px] h-[43px]" src={iconSrc} alt="" />
          <div className="flex flex-col p-2 mt-2">
            <p className="font-[500] text-[15px] text-[#181818]">{title}</p>
            <p className="font-[600] text-[20px] text-[#101828]">{value}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[250px] mb-4">
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

export default Card56;

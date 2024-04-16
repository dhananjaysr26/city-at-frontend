import React from "react";

interface SectionHeadingProps {
  heading: string;
  description?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  description = "",
}) => {
  return (
    <div className=" flex flex-col items-center py-5">
      <h2 className="font-bold text-xl md:text-4xl text-[#212529] max-w-[720px]">
        {heading}
      </h2>
      <div className="w-20 h-1 bg-[#FFB72B] relative dot"></div>
      {description && (
        <p className="font-normal px-3 max-w-[768px] text-center text-sm md:text-[16px] text-[#212529] pt-3">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

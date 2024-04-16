import { features } from "@/utils/constants";
import Image from "next/image";
import React from "react";

interface FeaturesProps {}

const Feature = ({ src, heading, description }: any) => {
  return (
    <div className=" flex flex-col items-center justify-center gap-2">
      <Image width={70} height={70} alt="icon" src={src} />
      <h2 className=" font-semibold md:text-lg">{heading}</h2>
      <p className=" text-center text-sm md:text-base max-w-[300px] text-[#818992] ">
        {description}
      </p>
    </div>
  );
};

const Features: React.FC<FeaturesProps> = ({}) => {
  return (
    <div className=" max-w-[1200px] mx-auto gap-5 flex-wrap flex justify-center py-4 pb-8">
      {features.map((feature, i) => (
        <Feature key={`feature-${i}`} {...feature} />
      ))}
    </div>
  );
};

export default Features;

import type { FC } from "react";
import NavBar from "@/components/common/NavBar";
import { navItems } from "@/utils/constants";
import Footer from "@/components/common/Footer";
import Image from "next/image";

interface Props {
  className?: string;
  children: React.ReactNode;
  showBanner?: boolean;
}

const HomeLayout: FC<Props> = ({ className, children, showBanner = false }) => (
  <div className={className}>
    <NavBar navItems={navItems} />
    {showBanner && (
      <main className="w-full bg-[#FFFEDA] relative">
        <div className="h-[calc(100vh-150px)] py-10 md:py-0 md:h-[calc(100vh-150px)] bg-[#FFFEDA] w-full flex justify-evenly flex-col-reverse md:flex-row items-center max-w-[1200px] mx-auto ">
          <div className=" flex flex-col gap-y-4 px-3 md:ml-[20px] z-20">
            <h1 className="text-[#212529] font-bold px-3 md:px-0 text-xl text-[32px] xl:text-5xl md:w-[550px]">
              Recognize Faces with Lystface API
            </h1>
            <p className="md:w-[400px] px-3 text-[#818992] font-normal text-sm md:text-base xl:text-lg">
              Elevate your platform’s capabilities using our precision facial
              recognition API. Seamlessly integrate Lystface API for swift and
              secure user verification - experiencing the power of seamless
              identification, efficiency and reliability.
            </p>
            <ul className="list-disc ml-6 mt-2 text-[#818992] text-sm md:text-base">
              <li>Cutting Edge AI Technology</li>
              <li>Versatile Scalability</li>
            </ul>
            <div className="flex flex-row items-center ga-[14px] gap-x-2">
              <button className="bg-[#3E497A] cursor-pointer text-sm md:text-[15px] flex items-center justify-center w-[120px] md:w-[150px] h-[38px] md:h-[48px] text-white rounded-md">
                Get Started
              </button>
              <button className="text-[15px] text-[#3E497A] flex items-center justify-center gap-2 cursor-pointer  w-[120px] md:w-[150px] h-[38px] md:h-[48px]">
                <span>Watch Demo</span>
                <Image
                  src="/icons/play.svg"
                  width={20}
                  height={20}
                  alt="playicon"
                />
              </button>
            </div>
          </div>
          <div className="md:flex-1 flex justify-center items-center z-10 relative ">
            <video
              src="/videos/hero_video.mp4"
              className="bg-transparent rounded-[20px] h-[200px] sm:h-[250px] md:h-[320px]"
              loop
              autoPlay
              muted
            ></video>
          </div>

          {/* Relative Images */}
          <Image
            src="/icons/1.png"
            width={200}
            height={200}
            alt="animated-icon"
            className="absolute left-10 top-5 animate-updown select-none"
          />
          <Image
            src="/icons/2.png"
            width={200}
            height={200}
            alt="animated-icon"
            className="absolute left-0 bottom-10 animate-updown select-none"
          />
          <Image
            src="/icons/3.png"
            width={120}
            height={100}
            alt="animated-icon"
            className="absolute right-0 top-5 animate-updown select-none"
          />
          <Image
            src="/icons/4.png"
            width={200}
            height={200}
            alt="animated-icon"
            className="absolute right-0 bottom-10 animate-updown select-none"
          />
          <Image
            src="/icons/6.png"
            width={30}
            height={30}
            alt="animated-icon"
            className="absolute left-5 bottom-20 animate-spin-1 select-none"
          />
        </div>
      </main>
    )}
    <main>{children}</main>
    <Footer />
  </div>
);

export default HomeLayout;

import React from "react";
import CommonUi from "../../Common/CommonUi";
import { DesText, Title } from "../AboutUsSection";
import Image from "next/image";

const AboutUs = () => {
  const ImageCard = () => {
    return (
      <div className="rounded-lg w-[190px] md:w-[380px] h-[223px] md:h-[446px] min-w-[190] md:min-w-[380px] mt-8">
        <div className="bg-primary rounded-lg">
          <Image
            width={380}
            height={446}
            src="/about1.svg"
            className="rounded-lg"
            alt="factory image"
          />
        </div>
      </div>
    );
  };
  const SimpleCard = () => {
    return (
      <div className="rounded-lg bg-white p-4 flex-1">
        <div className="bg-[#E0F0FF] rounded-lg py-4 w-[100%] font-syne-sans text-md leading-md">
          <p className="text-center font-syne-sans text-2md leading-md">
            <Image
              src="/target.svg"
              alt="target"
              width={26}
              height={26}
              className="inline mr-4"
            />
            Our Mission
          </p>
        </div>
        <div className="text-center text-sm leading-[22px] mt-8 px-10">
          <p>
            To deliver high-performance, sustainable, and innovative piping
            solutions through advanced manufacturing, empowering industries and
            communities with durable infrastructure built for the future.
          </p>
        </div>
      </div>
    );
  };
  return (
    <CommonUi id="about-us">
      <div
        className="max-w-[1280px] mx-auto w-[100%] before:content-[''] before:absolute before:right-0 before:top-0 before:h-[60%] before:w-[30%] before:bg-[url('/pipes-icon.svg')] before:bg-no-repeat before:bg-cover before:bg-top-right 
      before:bottom-[40%] py-10"
      >
        <div className="flex flex-wrap flex-col md:flex-row">
          <div className="flex-1">
            <h2 className="text-4xs leading-3xs md:text-3xs uppercase font-inter-sans md:font-light md:leading-xs">
              ABOUT US
            </h2>
            <h2 className="text-[3rem] md:text-md text-white">
              Redefining Flow,
              <p>One Pipe at a Time</p>
            </h2>
          </div>
          <div className="flex-1">
            <h2 className="text-white text-2md md:text-xl font-syne-sans font-medium leading-md md:leading-4xl">
              The Era Of Manufacturing
            </h2>
            <p className="text-white/80 text-3xs font-inter-sans leading-3xs my-2 font-light tracking-normal">
              We are pioneering the future of piping solutions in an era defined
              by precision, sustainability, and innovation. Our approach blends
              cutting-edge technology, eco-conscious practices, and unparalleled
              durability to shape the next generation of infrastructure.
            </p>
          </div>
        </div>
        <div className="flex py-5 px-6 md:px-0 items-center gap-10 flex-wrap mt-8">
          <div className="items-start flex flex-col">
            <Title text="4.2 M.Tonn" />
            <DesText text="Manufacturing Capacity" />
          </div>
          <div className="items-start flex flex-col">
            <Title text="100+" />
            <DesText text="Team" />
          </div>{" "}
          <div className="items-start flex flex-col">
            <Title text="50+" />
            <DesText text="Happy Client" />
          </div>
          <div className="items-start flex flex-col">
            <Title text="7+ yrs" />
            <DesText text="Manufacturong Experience" />
          </div>
        </div>
        <div className="flex flex-row flex-nowrap overflow-x-auto space-x-4 scrollbar-hide justify-between mb-10">
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>

        {/* Cards design */}
        <div className="mt-10 pt-10 flex flex-wrap gap-10 flex-col md:flex-row">
          <SimpleCard />
          <SimpleCard />
        </div>
      </div>
    </CommonUi>
  );
};

export default AboutUs;

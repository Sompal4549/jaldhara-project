import Image from "next/image";
import React from "react";
export const Title = ({ text }) => {
  return (
    <h3 className="text-center text-white text-lg leading-xl font-poppins-sans font-medium">
      {text}
    </h3>
  );
};
export const DesText = ({ text }) => {
  return (
    <p className="text-center text-white text-2xs leading-xl font-poppins-sans font-light">
      {text}
    </p>
  );
};
const AboutUsSection = () => {
  return (
    <div className="w-full bg-primary" id="about-us">
      {/* Years of transforming... */}
      <div className="w-full relative h-full">
        <div
          className="z-1 absolute max-w-[90%] w-full h-full bottom-0 top-0 right-0 left-0 md:w-full mr-auto py-10 mb-10 bg-light-primary  before:content-[''] before:absolute before:right-0 before:top-0 before:h-[60%] before:w-[30%] before:bg-[url('/pipes-icon.svg')] before:bg-no-repeat before:bg-contain before:bg-top-right 
      before:bottom-[40%] rounded-ee-2xl"
        ></div>
        <div className="max-w-[1300px] w-full z-10 relative mx-auto">
          <div className="flex flex-col w-[80%] md:w-[60%] py-2 px-6 md:px-0">
            <h2 className="text-white text-2md md:text-xl font-syne-sans font-medium leading-md md:leading-4xl">
              Years of transforming industries with High quality HDPE Products
            </h2>
            <p className="text-white/80 text-2xs font-inter-sans leading-sm my-2 font-extralight">
              We are a leading manufacturer of high-quality HDPE, MDPE, and UPVC
              piping solutions, committed to durability, innovation, and
              sustainability. At the core of our operations is a commitment to
              excellence — from cutting-edge manufacturing processes to
              stringent quality control, we ensure every product meets global
              standards.
            </p>
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
        </div>
      </div>
      {/* Our quality... */}
      <div className="max-w-[1225px] w-full mx-auto py-10 my-10 relative">
        <div
          className="mt-10 w-[90%] md:w-[70%] ml-auto before:absolute 
        before:content-['']
        before:inset-0 md:mt-0 before:bg-primary/30 before:bg-darken before:z-10 before:h-full before:w-full before:bg-blend-overlay rounded-md"
        >
          <Image
            alt="worker"
            className="w-full h-auto rounded-md object-cover object-center min-h-[540px]"
            width={1000}
            height={700}
            src="./workers.svg"
          />
        </div>
        <div className="absolute w-full top-[-40px] md:top-0 left-0 bottom-0 h-full z-12 py-10 pl-6 md:pl-0">
          <h3 className="text-md md:text-2xl text-white font-manrope-sans font-light leading-xl md:leading-4xl w-[90%] md:w-[60%]">
            Our quality lies in our precision and willingness to attempt never-
            tried-before methods and solutions.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;

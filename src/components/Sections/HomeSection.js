import React from "react";
import MainTitle from "@/components/Headings/MainTitle";
const HomeSection = () => {
  return (
    <div
      className="w-full min-h-[700px] h-screen max-h-[900px] bg-[#5F93D0]"
      id="home"
    >
      <div className="bg-[url('/images/home-image.svg')] h-full w-full bg-cover bg-top relative bg-no-repeat py-10 bg-blend-overlay">
        <div className="absolute inset-0 bg-primary/70 bg-multiply z-10 py-10 px-5">
          <div className="max-w-[1300px] w-full mx-auto pt-5">
            <MainTitle>
              <p className="mt-8 md:mt-10">Redefining Flow, One Pipe at</p>
              <p>a Time</p>
            </MainTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

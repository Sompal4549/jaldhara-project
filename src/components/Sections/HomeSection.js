import React from "react";
import MainTitle from "@/components/Headings/MainTitle";
const HomeSection = () => {
  return (
    <div className="w-full bg-home-bg ">
      <div className="bg-[url('/images/home-image.svg')] w-full bg-cover bg-center h-screen relative bg-no-repeat py-10">
        <div className="absolute inset-0 bg-primary/70 bg-multiply z-10 py-10 px-5">
          <div className="max-w-[1300px] w-full mx-auto pt-5">
            <MainTitle>
              <p>Redefining Flow, One Pipe at</p>
              <p>a Time</p>
            </MainTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

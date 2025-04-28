import React from "react";
import MainTitle from "@/components/Headings/MainTitle";
const HomeSection = ({ data }) => {
  return (
    <div
      className="w-full min-h-[700px] h-screen max-h-[900px] bg-[#5F93D0]"
      id="home"
    >
      <div
        className={`bg-[url(${data.bgImage})] h-full w-full bg-cover bg-top relative bg-no-repeat py-10 bg-blend-overlay`}
      >
        <div
          className={`absolute inset-0 bg-primary/70 bg-multiply z-10 py-10 px-5 flex flex-col ${
            data.bottom ? "items-end justify-end" : ""
          }`}
        >
          <div className="max-w-[1300px] w-full mx-auto pt-5">
            <MainTitle>
              {data.mainTitle && (
                <h2 className="text-[50px] leading-[50px] md:text-3xl md:leading-3xl font-light">
                  {data.mainTitle}
                </h2>
              )}
              <p className="mt-8 md:mt-10">{data.title}</p>
              <p>{data.subTitle}</p>
              <p>{data.description}</p>
            </MainTitle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

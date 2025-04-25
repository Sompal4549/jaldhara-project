"use client";
import React, { useState } from "react";
import SectionTitle from "../Headings/SectionTitle";
// import DealSlider from "@/components/Sliders/DealSlider";
import Image from "next/image";
const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const clickHandler = (index) => {
    const indexToNumber = Number(index);
    if (isNaN(indexToNumber)) {
      setIndex(0);
    } else {
      setIndex(indexToNumber);
    }
  };
  return (
    <div className="w-full py-4 px-4 bg-primary" id="testimonial">
      <div className="relative max-w-[1200px] w-[100%] mx-auto">
        {/* Title */}
        <>
          <p className="text-start text-white font-light font-syne-sans leading-5xl text-3xl">
            Customer Stories
          </p>
          <h3 className="text-start text-white font-light font-syne-sans leading-5xl text-3xl">
            Teams with alignment on the latest work
          </h3>
        </>
        {/* Arrows */}
        <div className="absolute top-0 right-0 w-auto h-auto">
          <div className="arrow-left w-[160px] h-[160px] flex items-center justify-center text-center text-white"></div>
        </div>

        <div
          className={`flex transition-transform duration-700 ease-in-out`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {Array.from({ length: 5 }).map((_, ind) => (
            <div
              key={ind}
              // className={`w-full h-[720px] rounded-s-lg bg-white ${
              //   ind === index ? "block" : "hidden"
              // }`}
              className="min-w-full h-[720px] flex flex-row  rounded-s-lg px-4"
            >
              <div className="flex flex-row bg-white rounded-lg">
                <div className="img-container w-[55%] bg-blend-multiply rounded-lg">
                  <Image
                    alt="our work"
                    width={750}
                    height={720}
                    className="w-auto h-full max-h-[720px] bg-primary rounded-s-lg"
                    src="./construction.svg"
                  />
                </div>
                <div className="w-[45%] pl-8 py-8">
                  <p className="text-sm font-inter-sans font-bold leading-xs text-dark">
                    Construction {ind}
                  </p>
                  <ul className="font-manrope-sans font-light text-2xs tracking-normal list-disc pl-5">
                    <li>
                      <p className="mt-5 text-[rgba(0, 19, 37, 0.85)]">
                        Water Supply Systems: HDPE pipes are ideal for
                        transporting drinking water due to their resistance to
                        corrosion and chemicals, ensuring safe and reliable
                        water distribution.
                      </p>
                    </li>
                    <li>
                      <p className="mt-5 text-[rgba(0, 19, 37, 0.85)]">
                        Drainage Systems: Used in sewage and drainage systems
                        because of their smooth inner surface, which reduces
                        blockages and ensures efficient waste flow.
                      </p>
                    </li>
                    <li>
                      <p className="mt-5 text-[rgba(0, 19, 37, 0.85)]">
                        Geotechnical Applications: Utilized in soil
                        stabilization projects due to their flexibility and
                        resistance to environmental factors.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <ul className="bg-primary flex gap-2 cursor-pointer my-5 w-full items-center justify-center">
        {Array.from({ length: 5 }).map((_, ind) => {
          return (
            <li
              key={`dot-${ind}-item`}
              className={`p-1 h-2 ${
                ind === index ? "w-6 bg-secondary" : "w-3 bg-white"
              } rounded-full text-white`}
              onClick={() => clickHandler(ind)}
              value={ind}
            ></li>
          );
        })}
      </ul> */}
      </div>
    </div>
  );
};

export default Testimonial;

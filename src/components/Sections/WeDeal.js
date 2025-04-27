"use client";
import React, { useState } from "react";
import SectionTitle from "../Headings/SectionTitle";
// import DealSlider from "@/components/Sliders/DealSlider";
import Image from "next/image";
const WeDeal = () => {
  const [index, setIndex] = useState(0);
  const clickHandler = (val) => {
    const indexToNumber = Number(val);
    if (isNaN(indexToNumber)) {
      setIndex(0);
    } else {
      setIndex(indexToNumber);
    }
  };
  return (
    <div className="w-full py-4 px-4 bg-primary" id="we-deal">
      <SectionTitle text="Industries we deal with" />
      <div
        className={`flex transition-transform duration-700 ease-in-out md:my-10 py-10`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {Array.from({ length: 5 }).map((_, ind) => (
          <div
            key={ind}
            // className={`w-full h-[720px] rounded-s-lg bg-white ${
            //   ind === index ? "block" : "hidden"
            // }`}
            className={`min-w-full md:h-[720px] flex flex-row  rounded-s-lg md:px-4 px-0 ${
              ind === index ? "" : "opacity-5"
            }`}
          >
            <div className="flex flex-col md:flex-row bg-white rounded-lg">
              <div className="img-container w-full md:w-[55%] bg-blend-multiply rounded-lg">
                <Image
                  alt="our work"
                  width={750}
                  height={720}
                  className="w-full md:w-auto h-[290px] md:h-full max-h-[720px] bg-primary rounded-s-lg object-cover object-top"
                  src="./construction.svg"
                />
              </div>
              <div className="w-full md:w-[45%] pl-8 py-8">
                <p className="text-2xs md:text-sm font-inter-sans font-bold leading-2xs md:leading-xs text-dark">
                  Construction {ind}
                </p>
                <ul className="font-manrope-sans font-light text-4xs md:text-2xs tracking-normal list-disc pl-5">
                  <li>
                    <p className="mt-5 text-[rgba(0, 19, 37, 0.85)]">
                      Water Supply Systems: HDPE pipes are ideal for
                      transporting drinking water due to their resistance to
                      corrosion and chemicals, ensuring safe and reliable water
                      distribution.
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
                      Geotechnical Applications: Utilized in soil stabilization
                      projects due to their flexibility and resistance to
                      environmental factors.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ul className="bg-primary flex gap-2 cursor-pointer my-5 w-full items-center justify-center">
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
      </ul>
    </div>
  );
};

export default WeDeal;

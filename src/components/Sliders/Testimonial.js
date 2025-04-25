"use client";
import React, { useState } from "react";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
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
        <div className="w-[55%]">
          <p className="text-start text-white font-light font-manrope-sans leading-3xs text-4xs">
            Customer Stories
          </p>
          <h3 className="text-start text-white font-light font-syne-sans leading-5xl text-3xl">
            Teams with alignment on the latest work
          </h3>
        </div>
        {/* Arrows */}
        <div className="absolute top-0 right-0 w-auto h-auto flex">
          <div className="arrow-left w-[160px] h-[160px] flex items-center justify-center text-center text-white text-4xl border-2 border-blue">
            <PiArrowLeftThin />
          </div>
          <div className="arrow-left w-[160px] h-[160px] flex items-center justify-center text-center text-white text-4xl border-2 border-blue">
            <PiArrowRightThin />
          </div>
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
              className={`min-w-full h-auto flex flex-row border-2 border-[#003471] ${
                ind === index ? "" : "ml-4"
              }`}
            >
              <div className="flex flex-row justify-between p-4">
                <div className="img-container w-[55%]">
                  <p className="mt-5 text-white">
                    Lorem ipsum dolor sit amet consectetur. Risus sapien morbi
                    vitae rutrum. Purus felis turpis enim viverra vitae
                    dignissim odio rhoncus tellus.
                  </p>
                  <div className="flex flex-row">
                    <Image
                      alt="our work"
                      width={72}
                      height={72}
                      className="w-auto h-full max-h-[72px] rounded-s-lg"
                      src="./user.svg"
                    />
                    <p className="mt-5 text-white font-inter-sans">
                      Geotechnical Applications: Utilized in soil stabilization
                      projects due to their flexibility and resistance to
                      environmental factors.
                    </p>
                  </div>
                </div>
                <div className="w-[45%] pl-8 py-8 flex items-end text-end">
                  <Image
                    alt="our work"
                    width={265}
                    height={100}
                    className="w-auto h-full max-h-[100px] rounded-s-lg ml-auto"
                    src="./team.svg"
                  />
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

"use client";
import React, { useState } from "react";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
// import DealSlider from "@/components/Sliders/DealSlider";
import Image from "next/image";
const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const clickHandler = (val) => {
    const indexToNumber = Number(val);
    if (!isNaN(indexToNumber)) {
      if (indexToNumber === -1) {
        if (index === 0) {
          setIndex(4);
        } else {
          setIndex((ind) => ind - 1);
        }
      } else {
        if (index === 4) {
          setIndex(0);
        } else {
          setIndex((ind) => ind + 1);
        }
      }
    }
  };
  return (
    <div className="w-full py-4 px-4 bg-primary" id="testimonial">
      <div className="max-w-[1200px] w-[100%] mx-auto mb-8">
        {/* Title */}
        <div className="w-full md:w-[55%]">
          <p className="text-start text-white font-light font-manrope-sans leading-3xs text-4xs uppercase">
            Customer Stories
          </p>
          <h3 className="text-start text-white font-light font-syne-sans md:leading-5xl leading-2xl text-md md:text-3xl">
            Teams with alignment on the latest work
          </h3>
        </div>
        {/* Arrows */}
        <div className="relative">
          <div className="absolute top-[-50px] md:top-[-160px] right-0 w-auto h-auto flex">
            <div
              className="arrow-left w-[50px] h-[50px] md:w-[160px] md:h-[160px] flex items-center justify-center text-center text-white text-4xl shadow-[0_0px_0px_0.5px_rgba(222,222,222,1)] cursor-pointer"
              onClick={() => clickHandler(-1)}
            >
              <PiArrowLeftThin />
            </div>
            <div
              className="arrow-right w-[50px] h-[50px] md:w-[160px] md:h-[160px] flex items-center justify-center text-center text-white text-4xl shadow-[0_0px_0px_0.5px_rgba(222,222,222,1)] border-[2px] border-[rgba(0,52,113,1)] border-solid cursor-pointer"
              onClick={() => clickHandler(1)}
            >
              <PiArrowRightThin />
            </div>
          </div>
          <div
            className={`flex transition-transform duration-700 ease-in-out relative mt-[80px]`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: 5 }).map((_, ind) => (
              <div
                key={ind}
                // className={`w-full h-[720px] rounded-s-lg bg-white ${
                //   ind === index ? "block" : "hidden"
                // }`}
                className={`min-w-full h-auto flex flex-row shadow-[0_0px_0px_0.5px_rgba(222,222,222,1)] border-[2px] border-[rgba(0,52,113,1)] border-solid ${
                  ind === index ? "" : "opacity-0"
                }`}
              >
                <div className="flex flex-row justify-between p-4">
                  <div className="img-container w-[55%] flex flex-col md:gap-10">
                    <p className="mt-5 text-white font-inter-sans font-light md:text-xs text-3xs leading-5xs md:leading-sm">
                      Lorem ipsum dolor sit amet consectetur. Risus sapien morbi
                      vitae rutrum. Purus felis turpis enim viverra vitae
                      dignissim odio rhoncus tellus.
                    </p>
                    <div className="flex flex-row items-center gap-2 mt-4 md:mt-10">
                      <Image
                        alt="our work"
                        width={72}
                        height={72}
                        className="w-[1.5rem] h-[1.5rem] md:w-auto md:h-full max-h-[72px] rounded-s-lg"
                        src="./user.svg"
                      />
                      <div className="text-white font-manrope-sans">
                        <p className="text-3xs leading-5xs md:text-sm md:leading-[28px]">
                          Jonathan Simcoe
                        </p>
                        <p className="text-5xs leading-[10px] md:text-2xs md:leading-[28px] mt-2">
                          Senior Product Designer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[84px] md:w-[45%] pl-0 md:pl-8 md:py-8 flex items-end text-end">
                    <Image
                      alt="our work"
                      width={265}
                      height={100}
                      className="w-[5rem] md:w-auto h-full max-h-[100px] rounded-s-lg ml-auto"
                      src="./team.svg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
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

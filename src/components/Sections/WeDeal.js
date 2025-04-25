"use client";
import React, { useState } from "react";
import SectionTitle from "../Headings/SectionTitle";
import DealSlider from "@/components/Sliders/DealSlider";
const WeDeal = () => {
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
    <div className="w-full py-4 px-4 bg-primary" id="we-deal">
      <SectionTitle text="Industries we deal with" />
      <DealSlider index={index} />

      <ul className="bg-primary flex gap-2 cursor-pointer my-5 w-full items-center justify-center">
        {Array.from({ length: 5 }).map((_, ind) => (
          <li
            key={`dot-${index}-item`}
            className={`p-1 h-2 ${
              ind === index ? "w-6 bg-secondary" : "w-3 bg-white"
            } rounded-full`}
            onClick={() => clickHandler(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default WeDeal;

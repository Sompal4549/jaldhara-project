import Image from "next/image";
import React from "react";

const DealSlider = ({ index }) => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, ind) => (
        <div
          key={index}
          className={`w-full h-[720px] rounded-s-lg bg-white ${
            ind === index ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-row">
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
                Construction
              </p>
              <ul className="font-manrope-sans font-light text-2xs tracking-normal list-disc pl-5">
                <li>
                  <p className="mt-5 text-[rgba(0, 19, 37, 0.85)]">
                    Water Supply Systems: HDPE pipes are ideal for transporting
                    drinking water due to their resistance to corrosion and
                    chemicals, ensuring safe and reliable water distribution.
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
    </>
  );
};

export default DealSlider;

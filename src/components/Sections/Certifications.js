import React from "react";
import SectionTitle from "@/components/Headings/SectionTitle";
import Image from "next/image";
const Certifications = () => {
  return (
    <div className="w-full py-4 px-4 bg-primary" id="certifications">
      <SectionTitle text="Our Certifications" />
      <div className="items-center flex justify-center gap-10 flex-wrap">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center w-[200px] text-center"
            >
              <div className="w-[200px] h-[200px] bg-white/10 rounded-full flex items-center text-center justify-center">
                <Image
                  src="./certification.svg"
                  alt="certification icon"
                  width={110}
                  height={110}
                  className=""
                />
              </div>
              <div className="px-4 text-white">
                <p className="font-inter-sans text-sm">
                  BIS Certification (BIS 4984)
                </p>
                <p className="font-inter-sans text-2xs">CM/L-NO: 5800024409</p>
                <p className="font-inter-sans text-2xs">
                  Issue Date : 30 Aug 2018
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;

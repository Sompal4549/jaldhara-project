import React from "react";
import SectionTitle from "@/components/Headings/SectionTitle";
import Image from "next/image";
const Certifications = () => {
  return (
    <div className="w-full py-4 px-4 bg-primary" id="certifications">
      <div className="max-w-[1200px] w-[100%] mx-auto">
        <div className="w-full py-8">
          <SectionTitle text="Our Certifications" />
        </div>
        <div className="items-center flex gap-10 flex-wrap w-full justify-around py-8">
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center w-[250px] text-center gap-4"
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
                  <p className="font-inter-sans text-2xs leading-sm">
                    CM/L-NO: 5800024409
                  </p>
                  <p className="font-inter-sans text-2xs leading-sm">
                    Issue Date : 30 Aug 2018
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certifications;

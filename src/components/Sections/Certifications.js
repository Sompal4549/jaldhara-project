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
        {/* Certificates */}
        <div className="items-center flex gap-10 flex-wrap w-full justify-around py-8">
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <div
                key={index}
                className="flex flex-col flex-wrap items-center w-[120px] md:w-[250px] text-center gap-4"
              >
                <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-white/10 rounded-full flex items-center text-center justify-center">
                  <Image
                    src="./certification.svg"
                    alt="certification icon"
                    width={110}
                    height={110}
                    className="w-[55px] md:w-[110px] h-[55px] md:h[110px]"
                  />
                </div>
                <div className="px-4 text-white flex flex-col md:gap-2 gap-1">
                  <p className="font-inter-sans text-[10px] md:text-sm leading-[12px]md:leading-sm">
                    BIS Certification (BIS 4984)
                  </p>
                  <p className="font-inter-sans md:text-2xs md:leading-sm text-[8px] leading-[12px]">
                    CM/L-NO: 5800024409
                  </p>
                  <p className="font-inter-sans md:text-2xs md:leading-sm text-[8px] leading-[12px]">
                    Issue Date : 30 Aug 2018
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full bg-gradient-to-r py-10 flex items-center my-10 justify-center flex-col to-[#D0E9FF] from-[#F2F9FF] rounded-lg px-4 text-center">
          <h3 className="md:text-primary font-bold font-syne-sans leading-xs md:leading-lg text-xs md:text-md tracking-tight">
            Need Help Choosing the Right Products?
          </h3>
          <p className="font-light font-inter-sans leading-sm text-3xs md:text-2xs tracking-tight">
            {" "}
            Our team is here to guide you in selecting the perfect solution for
            your needs.
          </p>
          <button className="text-white bg-primary font-manrope-sans text-2xs px-8 py-2 rounded-lg mt-6">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;

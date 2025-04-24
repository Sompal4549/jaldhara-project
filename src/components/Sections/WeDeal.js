import React from "react";
import SectionTitle from "../Headings/SectionTitle";
import Image from "next/image";
const WeDeal = () => {
  return (
    <div className="w-full py-4 px-4 bg-primary" id="why-section">
      <SectionTitle text="Industries we deal with" />
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="w-full h-[720px] rounded-lg">
          <div className="flex flex-row">
            <div className="img-container w-[60%] bg-primary bg-blend-multiply">
              <Image
                alt="our work"
                width={750}
                height={720}
                className="w-full h-full max-h-[720px] bg-primary rounded-lg"
                src="./construction.svg"
              />
            </div>
            <div className="bg-white"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeDeal;

import Image from "next/image";
import React from "react";

const WhySection = () => {
  return (
    <div className="w-full py-4 px-4 bg-primary" id="why-section">
      <div className="md:py-[5rem] md:px-[2.75rem] max-w-[1200px] w-[100%] bg-white rounded-md mx-auto">
        <div>
          <p className="text-primary text-3xl leading-3xl font-inter-sans font-light">
            Why
          </p>
          <p className="text-primary text-3xl font-syne-sans font-bold leading-7xl md:pl-10">
            Jaldhara Polytubes
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-between gap-5 md:pl-10 py-10 items-center">
          <div className="md:w-[55%]">
            <ul className="list-none flex flex-col gap-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className="flex flex-column items-center gap-8">
                  <div className="min-w-[72px] w-[72px] h-[72px] rounded-full border-2 border-primary/30 flex items-center justify-center text-center">
                    <span className="text-center font-inter-sans text-primary text-sm leading-xs">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="font-inter-sans text-sm leading-xs">
                      Advanced Manufacturing Technology
                    </p>
                    <p className="text-4xs font-inter-sans leading-relaxed tracking-wider mt-2">
                      Leveraging state-of-the-art manufacturing systems, we
                      ensure precision-engineered HDPE piping solutions that
                      meet the highest global standards.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center text-center w-full md:w-auto">
            <Image
              src="./factory.svg"
              alt="workers working in the factory"
              className="max-w-[360px] w-full h-[100%] max-h-[520px] md:max-h-[560px] rounded-lg mx-auto"
              height={560}
              width={360}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;

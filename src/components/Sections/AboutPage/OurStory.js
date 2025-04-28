import React from "react";
import CommonUi from "../../Common/CommonUi";
import AboutSectionTitle from "../../Headings/AboutSectionTitle";
import Image from "next/image";

const OurStory = () => {
  return (
    <CommonUi id="about-us">
      <div className="max-w-[1280px] mx-auto w-[100%]  py-10">
        <div className="flex flex-wrap flex-col md:flex-row">
          <div className="flex-1">
            <AboutSectionTitle title="ABOUT US"></AboutSectionTitle>
          </div>
        </div>
        <div className="flex flex-col md:py-[5rem] md:px-[2.75rem] max-w-[1280px] w-[100%] bg-white rounded-2xl md:rounded-md mx-auto p-5">
          <div className="flex flex-row bg-white p-5">
            <Image
              src="/calendar.svg"
              width={75}
              height={75}
              alt="calendar icon"
            />
            <div>
              <p>Inception of JD Polytubes</p>
              <p>
                Established in 2017, JD Polytubes began with a vision to deliver
                durable, high-performance piping solutions. Rooted in innovation
                and sustainability, our journey reflects a commitment to quality
                and future-ready infrastructure.
              </p>
            </div>
          </div>
          <div className="h-[80px] w-1 bg-[#81AAD4]"></div>
          <div className="flex flex-row bg-white p-5">
            <Image
              src="/calendar.svg"
              width={75}
              height={75}
              alt="calendar icon"
            />
            <div>
              <p>Inception of JD Polytubes</p>
              <p>
                Established in 2017, JD Polytubes began with a vision to deliver
                durable, high-performance piping solutions. Rooted in innovation
                and sustainability, our journey reflects a commitment to quality
                and future-ready infrastructure.
              </p>
            </div>
          </div>
          <div className="h-[80px] w-1 bg-[#81AAD4]"></div>{" "}
          <div className="flex flex-row bg-white p-5">
            <Image
              src="/calendar.svg"
              width={75}
              height={75}
              alt="calendar icon"
            />
            <div>
              <p>Inception of JD Polytubes</p>
              <p>
                Established in 2017, JD Polytubes began with a vision to deliver
                durable, high-performance piping solutions. Rooted in innovation
                and sustainability, our journey reflects a commitment to quality
                and future-ready infrastructure.
              </p>
            </div>
          </div>
          <div className="h-[80px] w-1 bg-[#81AAD4]"></div>{" "}
          <div className="flex flex-row bg-white p-5">
            <Image
              src="/calendar.svg"
              width={75}
              height={75}
              alt="calendar icon"
            />
            <div>
              <p>Inception of JD Polytubes</p>
              <p>
                Established in 2017, JD Polytubes began with a vision to deliver
                durable, high-performance piping solutions. Rooted in innovation
                and sustainability, our journey reflects a commitment to quality
                and future-ready infrastructure.
              </p>
            </div>
          </div>
          <div className="h-[80px] w-1 bg-[#81AAD4]"></div>
        </div>
      </div>
    </CommonUi>
  );
};

export default OurStory;

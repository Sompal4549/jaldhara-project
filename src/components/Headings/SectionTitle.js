import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <>
      <h3 className="text-start text-white font-light font-syne-sans md:leading-5xl md:text-3xl text-2lg leading-[40px]">
        {text}
      </h3>
    </>
  );
};

export default SectionTitle;

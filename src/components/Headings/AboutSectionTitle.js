import React from "react";

const AboutSectionTitle = ({ title, fontWeight }) => {
  return (
    <>
      <h2
        className={`text-4xs leading-3xs md:text-3xs uppercase font-inter-sans md:font-${
          fontWeight || "light"
        } md:leading-xs`}
      >
        {title}
      </h2>
    </>
  );
};

export default AboutSectionTitle;

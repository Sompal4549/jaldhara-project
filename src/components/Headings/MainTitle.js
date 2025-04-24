import React from "react";

const MainTitle = ({ children }) => {
  return (
    <h1 className="w-[100%] md:w-[70%] mt-10 md:text-5xl font-syne-sans pt-10 md:leading-6xl text-white font-semibold text-xl leading-2xl">
      {children}
    </h1>
  );
};

export default MainTitle;

import Image from "next/image";
import React from "react";

const Logo = ({ height, width }) => {
  return (
    <>
      <Image
        src="./logo.svg"
        alt="logo"
        height={height || 30}
        width={width || 30}
        className={`img-responsive h-[${
          height || "30px"
        }] object-contain object-center`}
      />
    </>
  );
};

export default Logo;

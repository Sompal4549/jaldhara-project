import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <Image
        src="./logo.svg"
        alt="logo"
        height={30}
        width={30}
        className="img-responsive h-[30px] object-contain object-center"
      />
    </>
  );
};

export default Logo;

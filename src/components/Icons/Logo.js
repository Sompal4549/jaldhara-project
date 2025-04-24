import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <Image
        // src="./assets/images/favicon.png"
        src="./pipes.png"
        alt="logo"
        height={50}
        width={50}
      />
    </>
  );
};

export default Logo;

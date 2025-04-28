import React from "react";

const CommonUi = ({ children, id }) => {
  return (
    <div
      className="w-full bg-primary animate__animated animate__bounce common-ui"
      id={id}
    >
      {/* Years of transforming... */}
      <div className="w-full relative h-full">{children}</div>
      <style>
        {`
        .common-ui{
        animation-duration:2s;
        }
        #${id}{
       animation-duration:2s;
        }
        `}
      </style>
    </div>
  );
};

export default CommonUi;

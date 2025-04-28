import React from "react";

const CommonUi = ({ children, id }) => {
  return (
    <div className="w-full bg-primary" id={id}>
      {/* Years of transforming... */}
      <div className="w-full relative h-full">{children}</div>
    </div>
  );
};

export default CommonUi;

import React from "react";

/**
 *
 * @param {ReactElement} children
 * @returns PageLayout Component
 */
const PageLayout = ({ children }) => {
  return (
    <main className="min-h-screen w-[100vw] flex flex-col items-center justify-center max-w-[100%] bg-primary overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">{children}</div>
    </main>
  );
};

export default PageLayout;

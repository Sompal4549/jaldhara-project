import React from "react";
import SectionTitle from "../Headings/SectionTitle";

const ProductsSection = () => {
  // Card component
  const Card = ({ imgUrl, title, text }) => {
    return (
      <div
        className={`p-4 relative card w-[320px] min-w-[320px] h-[320px] bg-[url('/Subtract.svg')] bg-cover bg-center bg-no-repeat after:content-['']  after:absolute after:bottom-0 after:right-0 after:bg-[url('/${imgUrl}')] after:h-[60%] after:top:[40%] after:bg-cover after:bg-center after-z-10 after:w-[90%]`}
      >
        <div className="w-[50%]">
          <p className="text-white text-4xl leading-5xl font-inter-sans font-light">
            {title}
          </p>
          <p className="text-white text-md leading-md font-inter-sans font-light">
            {text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-primary " id="products">
      {/* Our products */}
      <div className="flex max-w-[1200px] w-full mx-auto justify-between items-center">
        <SectionTitle text="Our Products" />
        <button className="btn bg-white text-primary text-3xs leading-[1.25rem] p-2 px-4 rounded-lg cursor-pointer">
          View All
        </button>
      </div>
      <div className="w-full pl-[7%]">
        <div className="flex flex-nowrap overflow-x-auto space-x-4 scrollbar-hide py-10 my-10 gap-6 px-4">
          <Card imgUrl="pipes.svg" title="01" text="HDPE PIPES" />
          <Card imgUrl="pipe.svg" title="02" text="MDPE Gas Pipes" />
          <Card imgUrl="pipes.svg" title="03" text="MDPE Gas Pipes" />
          <Card imgUrl="pipe.svg" title="04" text="MDPE Gas Pipes" />
          <Card imgUrl="pipes.svg" title="04" text="MDPE Gas Pipes" />
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;

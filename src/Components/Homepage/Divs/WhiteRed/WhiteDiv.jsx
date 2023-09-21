import React from "react";

const WhiteDiv = () => {
  return (
    <div>
      <div class="bg-white transform scale-100 transition-transform duration-300 hover:scale-90  overflow-hidden rounded-3xl h-[70vh] p-2">
        <div className="transform scale-100 transition-transform duration-300 hover:scale-90 grid lg:grid-cols-1  lg:gap-4">
          <div className="pt-10lg:mt-4 p-8   lg:p-8">
            <h1 className="text-2xl lg:text-4xl font-bold mb-8 text-black">
              Create and Share, Effortless Visuals
            </h1>
            <p className="text-lg lg:text-xl text-black font-bold">
              Send money to friends and family, or get paid by customers.{" "}
            </p>
          </div>
          <div>
            <img src="ppt1.jpg" alt="img" className="lg:mt-4  w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteDiv;

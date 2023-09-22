import React from "react";

const WhiteDiv = () => {
  return (
    <div>
      <div class="bg-white transform scale-100 transition-transform duration-300 hover:scale-90  overflow-hidden rounded-3xl h-auto p-2">
        <div className="transform scale-100 transition-transform duration-300 hover:scale-90 ">
          <div className="px-8 pt-4">
            <h1 className="text-2xl lg:text-4xl font-bold  text-black">
              Create and Share,<br/>Effortless Visuals
            </h1>
            <p className="text-lg pt-6 lg:text-xl text-black font-bold">
              Send money to friends and family, or get paid by customers.{" "}
            </p>
          </div>
          <div>
            <img src="fe2.png" alt="img" className="mt-8  w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteDiv;

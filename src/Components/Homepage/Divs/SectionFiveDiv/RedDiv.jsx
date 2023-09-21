import React from "react";

const RedDiv = () => {
  return (
    <div>
      <div class="bg-[#ec5b7a] transform scale-100 transition-transform duration-300 hover:scale-90  overflow-hidden rounded-3xl h-[70vh] p-2">
        <div className="transform scale-100 transition-transform duration-300 hover:scale-90 ">
          <div className="pt-10 lg:mt-4 p-8   lg:p-8">
            <h1 className="text-2xl lg:text-4xl font-bold mb-8 text-white">
              Create and Share, Effortless Visuals
            </h1>
            <p className="text-lg lg:text-xl text-white font-bold">
              Send money to friends and family, or get paid by customers.{" "}
            </p>
          </div>
          <div>
            <img src="fe1.png" alt="img" className="lg:mt-4  w-full  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedDiv;

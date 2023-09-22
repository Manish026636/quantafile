import React from "react";

const RedDiv = () => {
  return (
    <div>
      <div class="bg-[#ec5b7a] transform scale-100 transition-transform duration-300 hover:scale-90  overflow-hidden rounded-3xl h-auto p-2">
        <div className="transform scale-100 transition-transform duration-300 hover:scale-90 ">
          <div className="px-8 pt-4">
            <h1 className="text-2xl lg:text-4xl font-bold  text-white">
              Create and Share,<br/>Effortless Visuals
            </h1>
            <p className="text-lg pt-6 lg:text-xl text-white font-bold">
              Send money to friends and family, or get paid by customers.{" "}
            </p>
          </div>
          <div className="flex justify-center">
            <img src="fe1.png" alt="img" className="mt-8  w-96 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedDiv;

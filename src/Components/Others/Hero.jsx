import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="h-screen bg-black pt-1    ">
        <div className="text-center mt-36 ">
          <h1
            id="typing-text"
            className="font-bold text-transparent text-4xl lg:text-7xl bg-clip-text bg-gradient-to-r from-teal-500  to-blue-800"
          >
            ARTIFICIAL INTELLIGENCE
            <br /> WECLOMES YOU
          </h1>
        </div>
        <div className="">
          <div className=" flex justify-center items-center px-10">
            <img src="AI.png" className=" " alt="AI" />
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Hero;
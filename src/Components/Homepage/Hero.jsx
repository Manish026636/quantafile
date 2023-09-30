import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="flex flex-col items-center">
          <div className="flex  flex-col items-center pb-0 pt-8 text-center   lg:pt-32">
          <h1 className="mb-8 text-4xl heroheading font-extrabold text-black sm:text-5xl md:mb-12 md:text-8xl transition-color duration-300 ">Experience the Future of College <span className="gradient-background px-2  text-white rounded-lg ">Automation</span></h1>
            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg">Welcome to a Smarter, Streamlined Campus Life.</p>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
              <Link to="/Signup"><button className="inline-block rounded-2xl bg-black px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:bg-gray-400 md:text-base">Get free account</button></Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;

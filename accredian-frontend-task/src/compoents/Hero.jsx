import React, { useState } from "react";
import PopupForm from "./PopupForm";
import hero_img from "../assets/hero-img.png";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="container mx-auto shadow-2xl bg-blue-50 rounded-xl px-6 py-10 my-8 max-w-xl md:max-w-2xl lg:max-w-4xl">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        {/* Left Content */}
        <div className="text-center md:text-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Let's Learn & Earn
          </h1>
          <p className="text-gray-600 text-lg font-semibold mt-2 md:mt-0">Get a chance to win up to</p>
          <p className="text-blue-500 text-2xl font-semibold">Rs. 15,000</p>
          <button
            onClick={handleClickOpen}
            className="mt-5 bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition duration-300"
          >
            Refer now
          </button>
          <PopupForm open={open} handleClose={handleClose} />
        </div>

        {/* Right Image */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src={hero_img}
            alt="hero"
            className="w-full max-w-sm md:max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

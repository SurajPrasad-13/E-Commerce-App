import React from "react";
import heroImg from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Hero Image"
        className=" w-full h-100 md:h-140  object-cover"
      />
      <div className="absolute inset-0  flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl fonbold tracking-tighter uppercase mb-4">
            Vacation <br /> Ready
          </h1>
          <p className=" text-sm tracking-tighter md:text-lg mb-6">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>
          <Link to="#" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">
          Shop Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

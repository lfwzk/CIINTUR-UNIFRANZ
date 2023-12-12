import React, { useState, useRef } from "react";
import video from "../assets/ciintur.mp4";
import logo from "../assets/logowhite.png";

const Hero = () => {
  return (
    <section className="hero h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 transition-opacity duration-1000"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <img src={logo} alt="Logo" className="mx-auto w-50 pt-6" />
        <h1 className="text-white text-3xl font-light mt-4 font-lato">
          Centro de Investigación, Innovación y Transformación Digital en
          Turismo
        </h1>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Button from "./ui/AiGenerateButton";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div
      className="py-20 lg:h-screen w-full text-4xl relative flex flex-col items-center justify-center gap-4 p-10
"
    >
      {/* gradient style */}
      <span className="absolute bg-[#0dedbc] blur-3xl w-[400px] h-60 bottom-0 right-0 opacity-20"></span>
      <span className="absolute bg-[#9c40ff] blur-3xl w-[400px] h-60 top-0 left-0 opacity-20"></span>
      <button
        data-aos="fade-up"
        className="text-base font-normal text-primary-dark px-4 py-[2px] bg-[#00D9F5]/20 rounded-full"
      >
        Gemini Powered
      </button>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-6xl lg:text-8xl font-bold font-Oxanium"
        >
          QuickDoc{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
            AI
          </span>
        </h1>
        <p
          data-aos="fade-up"
          className="text-base mb-4 md:mb-0 md:text-lg font-Sora text-center mt-4 max-w-2xl"
        >
          Chat with Your Documents. Instantly. Turn any PDF into a smart
          assistant using Gemini
        </p>
        <Link to={"/chat"}>
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Hero;

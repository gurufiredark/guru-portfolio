"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 min-h-screen bg-black px-4">
      <div className={`text-center text-white p-4 lg:p-6 transform transition-all duration-1000 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}>
        <span className="text-2xl lg:text-4xl font-bold leading-snug inline-block hover:scale-105 hover:text-purple-300 transition-transform duration-300">
          Em processo...
        </span>
      </div>

      <div className={`transform transition-all duration-1000 p-4 lg:p-6 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}>
        <div className="flex flex-col h-full items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]">
            <Image
              src="/guru-portfolio/imgs/zoro.png"
              alt="Zoro"
              width={600}
              height={600}
              className="absolute w-full h-full object-contain transition-all duration-500 scale-110 lg:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
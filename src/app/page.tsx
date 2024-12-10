"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const showSecondImage = isHovered || isClicked;

  return (
    <div className="flex flex-row mx-auto items-center justify-center gap-8 min-h-screen bg-black shadow-md shadow-white">
      <div 
        className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div 
            className="relative w-[28rem] h-[28rem] cursor-pointer rounded-full overflow-hidden group border-2 border-purple-500 shadow-lg shadow-purple-500/50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsClicked(!isClicked)}
          >
            <img 
              src="/imgs/Gojo.png"
              alt="Gojo"
              className={`absolute w-full h-full object-contain transition-all duration-500 scale-125
                ${showSecondImage ? 'opacity-0 blur-xl' : 'opacity-100 blur-0'}`}
            />
            <img 
              src="/imgs/eu.png"
              alt="Gabriel"
              className={`absolute w-full h-full object-cover transition-all duration-500
                ${showSecondImage ? 'opacity-100 blur-0' : 'opacity-0 blur-xl'}`}
            />
          </div>
        </div>
      </div>

      <div 
        className={`text-center text-white p-6 transform transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <span className="text-4xl font-bold leading-snug inline-block hover:scale-105 transition-transform duration-300">
          Desenvolvedor Full Stack
        </span>
        <h1 className="text-xl mt-4 transform hover:-translate-y-1 transition-transform duration-300">
          Oi!
          <span className="text-purple-400 font-bold hover:text-purple-300 transition-colors duration-300">
            {" "}Eu sou o Gabriel{" "}
          </span>
        </h1>
        <p className="text-xl mt-4 hover:text-gray-300 transition-colors duration-300">
          Sou apaixonado por desenvolvimento de software <br /> 
          e gosto de aprender novas coisas.
        </p>
        <div className="flex flex-col items-center justify-center p-6 gap-4">
          <Button 
            size="lg" 
            className="bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transform transition-all duration-300 rounded-full uppercase"
          >
            <a href="/CV-Gabriel-Rodrigues.pdf" download className="flex items-center">
              <span>Download CV</span>
              <FiDownload className="ml-2" />
            </a>
          </Button>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
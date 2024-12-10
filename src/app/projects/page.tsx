"use client";
import React, { useState, useEffect } from "react";

const Projects = () => {

const [isVisible, setIsVisible] = useState(false);


useEffect(() => {
    setIsVisible(true);
}, []);


return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-screen bg-black">
        <div className={`text-center text-white p-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
            >
            <span className="text-4xl font-bold leading-snug inline-block hover:scale-105 hover:text-purple-300 transition-transform duration-300">
                Em processo...
            </span>
        </div>

        <div className={`transform transition-all duration-1000 p-6 mt-4 ${isVisible ? "translate-x-0 opacity-100": "-translate-x-full opacity-0"}`}>
            <div className="flex flex-col h-full items-center justify-center">
                <div className="relative w-[600px] h-[600px]">
                <img
                    src="/imgs/zoro.png"
                    alt="Gojo"
                    className={`absolute w-full h-full object-contain transition-all duration-500 scale-125`}
                />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Projects;

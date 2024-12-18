"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Social from "@/components/Social";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    const listaSkills = [
        "Typescript",
        "JavaScript",
        "React",
        "NodeJs",
        "Java",
        "Spring Boot",
        "Python",
        "PostgreSQL"
    ];

    const listaSoftSkills = [
        "Comunicação eficaz",
        "Trabalho em equipe",
        "Resolução de problemas",
        "Adaptabilidade",
        "Proatividade",
        "Curiosidade e disposição para aprender",
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`flex flex-col mx-auto items-center justify-center min-h-screen bg-black transform transition-all duration-1000 p-4 lg:p-8 
        ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4 max-w-[1400px]">
            
                <div className="hidden lg:flex flex-col items-center justify-center w-full lg:w-1/3">
                    <Image 
                        src="/guru-portfolio/imgs/toji.png" 
                        alt="Imagem esquerda" 
                        width={600}
                        height={400}
                        className="w-full max-w-[400px] lg:max-w-[600px] rounded-lg shadow-md" 
                    />
                </div>
                
                <div className="flex flex-col items-center justify-center w-full lg:w-1/3 max-w-full lg:max-w-md gap-4 px-4">
                    <h1 className="text-xl lg:text-2xl font-bold font-serif text-purple-600">About</h1>
                    <span className="text-sm lg:text-base text-white font-semibold hover:text-purple-300 transition-colors duration-300 text-center lg:text-left">
                        Oi! Eu sou o Gabriel, mas pode me chamar de Guru, tenho 22 anos, sou cientista da computação e desenvolvedor Full Stack apaixonado por tecnologia, sempre em busca de novos aprendizados e oportunidades.
                    </span>

                    <h1 className="text-xl lg:text-2xl font-bold font-serif text-purple-600 mt-4">Skills</h1>
                    <span className="text-sm lg:text-base text-white font-semibold hover:text-purple-300 transition-colors duration-300 w-full">
                        Como desenvolvedor full stack ja trabalhei com algumas tecnologias, como:
                        <ul className="mt-2">
                            {listaSkills.map((skill, index) => (
                                <li key={index} className="ml-6 list-disc">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </span>
                    
                    <h1 className="text-xl lg:text-2xl font-bold font-serif text-purple-600 mt-4">Soft Skills</h1>
                    <span className="text-sm lg:text-base text-white font-semibold hover:text-purple-300 transition-colors duration-300 w-full">
                        Sou motivado pelo aprendizado contínuo, por isso sempre estou em busca de aprimorar minhas habilidades técnicas e interpessoais, como:
                        <ul className="mt-2">
                            {listaSoftSkills.map((softskill, index) => (
                                <li key={index} className="ml-6 list-disc">
                                    {softskill}
                                </li>
                            ))}
                        </ul>
                    </span>
                </div>

                <div className="hidden lg:flex flex-col items-center justify-center w-full lg:w-1/3">
                    <Image 
                        src="/guru-portfolio/imgs/gojo2.png" 
                        alt="Imagem direita" 
                        width={600}
                        height={400}
                        className="w-full max-w-[400px] lg:max-w-[600px] rounded-lg shadow-md" 
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 mt-8">
                <Social />  
            </div>
        </div>
    );
};

export default About;
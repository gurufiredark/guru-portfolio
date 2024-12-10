"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';


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
        <div className={`flex mx-auto items-center justify-center gap-8 min-h-screen bg-black transform transition-all duration-1000 
        ${ isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
            <div className="flex flex-row items-center gap-4">
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <Image 
                        src="/imgs/toji.png" 
                        alt="Imagem esquerda" 
                        width={600}
                        height={400}
                        className="w-5/6 max-w-[600px] rounded-lg shadow-md" 
                    />
                </div>
                
                <div className="flex flex-col items-center justify-center max-w-md gap-4">
                    <h1 className="flex flex-col justify-center text-2xl font-bold font-serif text-purple-600">About</h1>
                    <span className="text-white font-semibold hover:text-purple-300 transition-colors duration-300 ">
                            Oi! Eu sou o Gabriel, mas pode me chamar de Guru, tenho 22 anos, sou cientista da computação e desenvolvedor Full Stack apaixonado por tecnologia, sempre em busca de novos aprendizados e oportunidades.
                    </span>

                    <h1 className="flex flex-col justify-center text-2xl font-bold font-serif text-purple-600 mt-4">Skills</h1>
                    <span className="text-white font-semibold hover:text-purple-300 transition-colors duration-300 ">
                            Como desenvolvedor full stack ja trabalhei com algumas tecnologias, como:
                                {listaSkills.map((skill, index) => {
                                    return (
                                        <li key={index} className="ml-6 list-disc">
                                            {skill}
                                        </li>
                                    );
                                })}
                    </span>
                    
                    <h1 className="flex flex-col justify-center text-2xl font-bold font-serif text-purple-600 mt-4">Soft Skills</h1>
                    <span className="text-white font-semibold hover:text-purple-300 transition-colors duration-300 ">
                    Sou motivado pelo aprendizado contínuo, por isso sempre estou em busca aprimorar minhas habilidades técnicas e interpessoais, como:
                            {listaSoftSkills.map((softskill, index) => {
                                    return (
                                        <li key={index} className="ml-6 list-disc">
                                            {softskill}
                                        </li>
                                    );
                                })}
                    </span>
                </div>

                <div className="flex-1 flex items-center justify-center" >
                    <Image 
                        src="/imgs/gojo2.png" 
                        alt="Imagem direita" 
                        width={600}
                        height={400}
                        className="w-5/6 max-w-[600px] rounded-lg shadow-md" 
                    />
                </div>
            </div>
            
        </div>
    );
};

export default About;

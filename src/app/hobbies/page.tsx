"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';

const Hobbies = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`flex mx-auto items-center justify-center min-h-screen bg-black transform transition-all duration-1000 p-4 lg:p-8
        ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4 max-w-[1400px]">
                
                <div className="hidden lg:flex flex-col items-center justify-center">
                    <Image 
                        src="/guru-portfolio/imgs/luffy.png" 
                        alt="Imagem esquerda" 
                        width={600}
                        height={400}
                        className="w-full max-w-[400px] lg:max-w-[600px] rounded-lg shadow-md" 
                    />
                </div>
                
                <div className="flex flex-col items-center justify-center max-w-full lg:max-w-md gap-4 px-4">
                    <h1 className="text-xl lg:text-2xl font-bold font-serif text-purple-600 mt-4">Animes e Mangás</h1>
                    <span className="text-sm lg:text-base text-white font-semibold hover:text-purple-300 transition-colors duration-300 text-center lg:text-left">
                        Sou fã de animes/mangás e adoro mergulhar em histórias emocionantes e bem construídas. Sempre busco novas obras de personagens marcantes, que no fim passam alguma mensagem para nós. 
                        <br className="hidden lg:block"/>Alguns dos meus Animes e Mangás favoritos são: One Piece, Jujutsu Kaisen, Naruto, Hunter x Hunter, Frieren: Beyond Journey's, Demon Slayer, Dragon Ball, Blue Lock, entre outros.
                    </span>

                    <h1 className="text-xl lg:text-2xl font-bold font-serif text-purple-600 mt-4">Jogos</h1>
                    <span className="text-sm lg:text-base text-white font-semibold hover:text-purple-300 transition-colors duration-300 text-center lg:text-left">
                        Gosto muito de jogar praticamente tudo, porém jogos competitivos no estilo FPS e MOBA são os que mais me fascinam. Também gosto muito de jogos de luta e RPG.
                        <br className="hidden lg:block"/>Alguns dos meus Jogos favoritos são: Valorant, Counter-Strike 2, Call Of Duty, League of Legends, Fortnite, DB FighterZ, entre outros.
                    </span>
                    
                    <h1 className="text-xl lg:text-2xl font-bold font-serif text-purple-600 mt-4">Esportes</h1>
                    <span className="text-sm lg:text-base text-white font-semibold hover:text-purple-300 transition-colors duration-300 text-center lg:text-left">
                        Tenho um grande interesse por esportes e valorizo a dedicação e o espírito competitivo que eles envolvem. Gosto de acompanhar e praticar atividades físicas que me mantenham ativo e focado.
                        <br className="hidden lg:block"/>Esportes e atividades que costumo praticar: Futebol, musculção, caminhada, xadrez, entre outros.
                    </span>
                    
                    <span className="text-sm lg:text-base text-white font-semibold hover:text-purple-300 transition-colors duration-300 mt-4 text-center lg:text-left">
                        Esses interesses complementam minha paixão pela tecnologia, trazendo criatividade e equilíbrio à minha jornada profissional e pessoal.
                    </span>
                    
                    <Image 
                        src="/guru-portfolio/imgs/deathkid.png" 
                        alt="Imagem centro" 
                        width={600}
                        height={400}
                        className="w-full max-w-[300px] lg:max-w-[600px] rounded-lg shadow-md mt-4" 
                    />
                </div>

                <div className="hidden lg:flex flex-col items-center justify-center">
                    <Image 
                        src="/guru-portfolio/imgs/madara1.png" 
                        alt="Imagem direita" 
                        width={600}
                        height={400}
                        className="w-full max-w-[400px] lg:max-w-[700px] rounded-lg shadow-md" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Hobbies;
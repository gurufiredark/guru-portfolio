"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';


const Hobbies = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`flex mx-auto items-center justify-center gap-8 min-h-screen bg-black transform transition-all duration-1000 
        ${ isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
            <div className="flex flex-row items-center gap-4">
                <div className="flex-1 flex-col items-center justify-center gap-4">
                    <Image 
                        src="/imgs/luffy.png" 
                        alt="Imagem esquerda" 
                        width={600}
                        height={400}
                        className="w-full max-w-[600px] rounded-lg shadow-md" 
                    />
                </div>
                
                <div className="flex flex-col items-center justify-center max-w-md gap-4">
                    <h1 className="flex flex-col justify-center text-2xl font-bold font-serif text-purple-600 mt-6">Animes e Mangás</h1>
                    <span className="text-white font-semibold hover:text-purple-300 transition-colors duration-300 ">
                    Sou fã de animes/mangás e adoro mergulhar em histórias emocionantes e bem construídas. Sempre busco novas obras de personagens marcantes, que no fim passam alguma mensagem para nós. 
                    <br/>Alguns dos meus Animes e Mangás favoritos são: One Piece, Jujutsu Kaisen, Naruto, Hunter x Hunter, Frieren: Beyond Journey's, Demon Slayer, Dragon Ball, Blue Lock, entre outros.
                    </span>

                    <h1 className="flex flex-col justify-center text-2xl font-bold font-serif text-purple-600 mt-4">Jogos</h1>
                    <span className="text-white font-semibold hover:text-purple-300 transition-colors duration-300 ">
                            Gosto muito de jogar praticamente tudo, porém jogos competitivos no estilo FPS e MOBA são os que mais me fascinam. Também gosto muito de jogos de luta e RPG.
                            <br/>Alguns dos meus Jogos favoritos são: Valorant, Counter-Strike 2, Call Of Duty, League of Legends, Fortnite, DB FighterZ, entre outros.
                    </span>
                    
                    <h1 className="flex flex-col justify-center text-2xl font-bold font-serif text-purple-600 mt-4">Esports</h1>
                    <span className="text-white font-semibold hover:text-purple-300 transition-colors duration-300 ">
                    Tenho um grande interesse por esportes e valorizo a dedicação e o espírito competitivo que eles envolvem. Gosto de acompanhar e praticar atividades físicas que me mantenham ativo e focado.
                    <br/>Alguns dos meus Esports favoritos são: Futebol, MMA, Xadrez, entre outros.
                    </span>
                    
                    <span className="text-white font-semibold hover:text-purple-300 transition-colors duration-300 mt-6 ">
                    Esses interesses complementam minha paixão pela tecnologia, trazendo criatividade e equilíbrio à minha jornada profissional e pessoal.
                    </span>
                    
                    <Image 
                        src="/imgs/deathkid.png" 
                        alt="Imagem esquerda" 
                        width={600}
                        height={400}
                        className="w-full h-full rounded-lg shadow-md" 
                    />
                </div>

                <div className="flex-1 flex-col items-center justify-center" >
                <Image 
                    src="/imgs/madara1.png" 
                    alt="Imagem direita" 
                    width={700}
                    height={400}
                    className="w-full h-full max-w-[700px] rounded-lg shadow-md" 
                />
                </div>
            </div>
            
        </div>
    );
};

export default Hobbies;

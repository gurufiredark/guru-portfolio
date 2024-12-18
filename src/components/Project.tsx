"use client";
import Image from "next/image";
import Social from "./Social";

interface ProjectProps {
    imagemSrc: string;
    title: string;
    descricao: string;
    link: string;
}

const Project: React.FC<ProjectProps> = ({ imagemSrc, title, descricao, link }) => {
    return (
        <div className="rounded-lg gap-2 overflow-hidden hover:scale-105 transition-transform duration-300 hover:text-purple-400 w-80 border-2 border-purple-500 shadow-lg shadow-purple-500/50">
            <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-96 flex flex-col items-center justify-center"
            >
                <div className="relative mt-4 w-full h-64 lg:h-80">
                    <Image
                        src={imagemSrc}
                        alt={descricao}
                        layout="fill"
                        objectFit="contain"
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col items-center justify-center flex-grow p-2">
                    <p className="text-center mt-2 lg:text-base font-semibold">{title}</p>
                    <p className="text-center mt-2 text-xs">{descricao}</p>
                </div>
            </a>
        </div>
        
    );
};

export default Project;

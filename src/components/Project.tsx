"use client";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";

interface ProjectProps {
    imagemSrc: string;
    title: string;
    descricao: string;
    githubLink: string;
    deployLink?: string;
}

const Project: React.FC<ProjectProps> = ({ imagemSrc, title, descricao, githubLink, deployLink }) => {
    return (
        <div className="rounded-lg overflow-hidden w-80 border-2 hover:scale-105 transition-transform duration-300 hover:text-purple-400 border-purple-500 shadow-lg shadow-purple-500/50">
            <div className="relative h-48 group">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src={imagemSrc}
                        alt={descricao}
                        fill
                        className="object-contain p-4 transition-all duration-300 group-hover:blur-sm"
                    />
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors"
                    >
                        <FiGithub className="w-6 h-6 text-white" />
                    </a>
                    {deployLink && (
                        <a
                            href={deployLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors"
                        >
                            <FaGlobe className="w-6 h-6 text-white" />
                        </a>
                    )}
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 h-48">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-center">{descricao}</p>
            </div>
        </div>
    );
};

export default Project;

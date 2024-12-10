"use client";

const About = () => {

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

    return (
        <div className="flex mx-auto items-center justify-center gap-8 min-h-screen bg-black">
            <div className="flex flex-row items-center gap-4">
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <img src="/imgs/toji.png" alt="Imagem esquerda" className="w-5/6 max-w-[600px] rounded-lg shadow-md" />
                </div>
                
                <div className="flex flex-col items-center justify-center max-w-md gap-4">
                    <h1 className="flex flex-col justify-center text-2xl font-bold font-serif text-purple-600">About</h1>
                    <span className="text-white font-semibold hover:text-purple-300 transition-colors duration-300 ">
                            Oi! Eu sou o Gabriel, tenho 22 anos sou um ciêntista da computação e desenvolvedor full stack, que sempres estou em busca de novos aprendizados e oportunidades.
                    </span>

                    <h1 className="flex flex-col justify-center text-2xl font-bold font-serif text-purple-600">Skills</h1>
                    <span className="text-white font-semibold hover:text-purple-300 transition-colors duration-300 ">
                            Como desenvolvedor full stack ja trabalhei com diversas tecnologias, como:
                                {listaSkills.map((skill, index) => {
                                    return (
                                        <li className="ml-6 list-disc">
                                            {skill}
                                            {index === listaSkills.length - 1 ? "" : ""}
                                        </li>
                                    );
                                })}
                    </span>
                    
                    <h1 className="flex flex-col justify-center text-2xl font-bold font-serif text-purple-600">Soft Skills</h1>
                    <span className="text-white font-semibold hover:text-purple-300 transition-colors duration-300 ">
                            Sou apaixonado por desenvolvimento de software e gosto de aprender novas coisas.
                            {listaSoftSkills.map((softskill, index) => {
                                    return (
                                        <li className="ml-6 list-disc">
                                            {softskill}
                                            {index === listaSoftSkills.length - 1 ? "" : ""}
                                        </li>
                                    );
                                })}
                    </span>
                </div>

                <div className="flex-1 flex w-full h-full items-center justify-center">
                    <img src="/imgs/madara1.png" alt="Imagem direita" className="w-5/6 max-w-[600px] rounded-lg shadow-md" />
                </div>
            </div>
            
        </div>
    );
};

export default About;
